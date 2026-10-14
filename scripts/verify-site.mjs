import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { resolve } from "node:path";

// Production smoke checks: real routes, metadata, links, and local-only delivery.
// No customer information is sent to an external service.
const manifest = JSON.parse(await readFile(".next/prerender-manifest.json", "utf8"));
const pages = ["/", "/about", "/services", "/contact", "/privacy", "/terms", ...Object.keys(manifest.routes).filter(path => /^\/services\/[^/]+$/.test(path))];
assert.equal(pages.length, 20, "Expected six main pages and fourteen service pages");
const nextCli = resolve("node_modules/next/dist/bin/next");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const servers = [];
let deliveryCount = 0;
let deliveryStatus = 200;

async function startSite(port, webhook = "") {
  const child = spawn(process.execPath, [nextCli, "start", "--hostname", "127.0.0.1", "--port", String(port)], {
    env: { ...process.env, CONTACT_WEBHOOK_URL: webhook, CONTACT_WEBHOOK_SECRET: "" }, stdio: ["ignore", "pipe", "pipe"],
  });
  servers.push(child);
  let log = "";
  child.stdout.on("data", chunk => { log = (log + chunk).slice(-2000); });
  child.stderr.on("data", chunk => { log = (log + chunk).slice(-2000); });
  const base = `http://127.0.0.1:${port}`;
  for (let i = 0; i < 100; i++) {
    if (child.exitCode !== null) throw new Error(`Production server stopped: ${log}`);
    try { const response = await fetch(base, { signal: AbortSignal.timeout(1000) }); if (response.ok) return base; } catch { /* waiting for readiness */ }
    await sleep(200);
  }
  throw new Error("Production server did not become ready");
}

async function post(base, data, expected, extraHeaders = {}) {
  const response = await fetch(`${base}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json", ...extraHeaders }, body: JSON.stringify(data) });
  assert.equal(response.status, expected);
  return response.json();
}

const enquiry = { name: "Local smoke check", email: "test@example.com", country: "Pakistan", service: "web-development", details: "Local verification of the enquiry workflow. This is test data.", website: "" };
const mock = createServer(async (request, response) => {
  let raw = "";
  for await (const chunk of request) raw += chunk;
  const received = JSON.parse(raw);
  assert.equal(received.serviceName, "Web Development");
  assert.equal(received.source, "Codenefy website");
  assert.ok(received.submittedAt);
  deliveryCount++;
  response.writeHead(deliveryStatus, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ accepted: deliveryStatus === 200 }));
});

try {
  const base = await startSite(3101);
  const known = new Set([...pages, "/icon.svg", "/opengraph-image"]);
  const imageSources = new Set();
  for (const path of pages) {
    const response = await fetch(`${base}${path}`);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${path}: one H1`);
    assert.ok(/<title>[^<]+Codenefy[^<]*<\/title>/.test(html), `${path}: title`);
    assert.ok(/<meta name="description" content="[^"]+"/.test(html), `${path}: description`);
    assert.ok(/property="og:title"/.test(html), `${path}: social metadata`);
    assert.ok(/application\/ld\+json/.test(html), `${path}: structured data`);
    for (const match of html.matchAll(/<img[^>]+src="([^"]+)"/g)) imageSources.add(match[1].replaceAll("&amp;", "&"));
    for (const match of html.matchAll(/href="(\/[^"#?]*)/g)) {
      const target = match[1];
      if (!target.startsWith("/_next/") && !target.startsWith("//")) assert.ok(known.has(target), `${path}: internal link ${target}`);
    }
  }
  for (const source of imageSources) {
    assert.ok(source.startsWith("/"), "Logo assets must be local");
    const response = await fetch(`${base}${source}`);
    assert.equal(response.status, 200, `Logo image response: ${source}`);
    assert.ok(response.headers.get("content-type")?.startsWith("image/"));
  }
  assert.ok((await (await fetch(`${base}/contact`)).text()).includes("Online enquiries are temporarily unavailable."));
  const notFound = await fetch(`${base}/services/not-a-real-service`);
  assert.equal(notFound.status, 404);
  assert.equal((await fetch(`${base}/opengraph-image`)).headers.get("content-type"), "image/png");
  assert.equal((await fetch(`${base}/icon.svg`)).status, 200);
  assert.equal((await fetch(`${base}/sitemap.xml`)).status, 200);
  assert.equal((await fetch(`${base}/robots.txt`)).status, 200);
  await post(base, {}, 400);
  await post(base, { ...enquiry, email: "invalid" }, 400);
  await post(base, { ...enquiry, service: "unknown" }, 400);
  await post(base, { ...enquiry, website: "spam" }, 400);
  await post(base, enquiry, 403, { Origin: "https://unrelated.example" });
  const unavailable = await post(base, enquiry, 503);
  assert.ok(!unavailable.success);
  console.log(`PASS: ${pages.length} pages, H1s, metadata, structured data, internal links, assets, 404, and input validation.`);

  mock.listen(0, "127.0.0.1");
  await once(mock, "listening");
  const webhook = `http://127.0.0.1:${mock.address().port}`;
  const deliveryBase = await startSite(3102, webhook);
  assert.ok(!(await (await fetch(`${deliveryBase}/contact?service=web-development`)).text()).includes("Online enquiries are temporarily unavailable."), "Configured delivery must enable the contact form at runtime");
  const accepted = await post(deliveryBase, enquiry, 200);
  assert.equal(accepted.success, true);
  deliveryStatus = 500;
  const rejected = await post(deliveryBase, enquiry, 502);
  assert.ok(!rejected.success);
  assert.equal(deliveryCount, 2);
  console.log("PASS: confirmed delivery reports success; rejected or unconfigured delivery never reports success.");
} finally {
  await Promise.all(servers.map(async child => {
    if (child.exitCode !== null) return;
    const exited = once(child, "exit");
    child.kill();
    await exited;
  }));
  if (mock.listening) await new Promise(resolve => mock.close(resolve));
}
