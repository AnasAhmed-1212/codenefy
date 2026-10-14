import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import ts from "typescript";

// Evaluate the pure SEO modules with isolated environment settings.
// The test domain is never written to the site's configuration.
async function load(file, env = {}, dependencies = {}) {
  const source = await readFile(file, "utf8");
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const context = { exports: {}, URL, process: { env }, require: name => {
    assert.ok(name in dependencies, `Unexpected dependency: ${name}`);
    return dependencies[name];
  } };
  runInNewContext(code, context, { filename: file, timeout: 1000 });
  return context.exports;
}

const serviceData = await load("lib/services.ts");
const slugs = serviceData.services.map(service => service.slug);
assert.equal(slugs.length, 14);
assert.equal(new Set(slugs).size, 14);
for (const service of serviceData.services) {
  assert.ok(service.description && service.headline && service.overview);
  assert.ok(service.offerings.length >= 3 && service.deliverables.length >= 3 && service.faqs.length >= 3);
}

const origin = "https://codenefy.example";
const configuredSite = await load("lib/site.ts", { NEXT_PUBLIC_SITE_URL: `${origin}/` });
const seo = await load("lib/seo.ts", {}, { "./site": configuredSite });
for (const service of serviceData.services) {
  const path = `/services/${service.slug}`;
  const metadata = seo.createMetadata(service.title, service.description, path);
  assert.equal(metadata.title.absolute, `${service.title} | Codenefy`);
  assert.equal(metadata.alternates.canonical, `${origin}${path}`);
  assert.equal(metadata.openGraph.url, `${origin}${path}`);
  assert.equal(metadata.twitter.card, "summary_large_image");
}
const dependencies = { "@/lib/site": configuredSite, "@/lib/services": serviceData };
const sitemap = (await load("app/sitemap.ts", {}, dependencies)).default();
assert.equal(sitemap.length, 20);
assert.equal(new Set(sitemap.map(item => item.url)).size, 20);
assert.ok(sitemap.every(item => item.url.startsWith(origin)));
const robots = (await load("app/robots.ts", {}, dependencies)).default();
assert.equal(robots.rules.allow, "/");
assert.equal(robots.sitemap, `${origin}/sitemap.xml`);

const unconfiguredSite = await load("lib/site.ts");
const unconfiguredDependencies = { ...dependencies, "@/lib/site": unconfiguredSite };
assert.equal((await load("app/sitemap.ts", {}, unconfiguredDependencies)).default().length, 0);
assert.equal((await load("app/robots.ts", {}, unconfiguredDependencies)).default().rules.disallow, "/");
assert.equal((await load("lib/site.ts", { NEXT_PUBLIC_SITE_URL: "invalid-domain" })).siteUrl, undefined);
console.log("PASS: 14 complete services, unique URLs, production canonicals/social metadata, 20 sitemap entries, robots, and preview configuration.");
