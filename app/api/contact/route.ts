import { NextResponse } from "next/server";
import { services } from "@/lib/services";
import { siteUrl } from "@/lib/site";

export const runtime = "nodejs";

const fields = { name: 120, email: 254, company: 160, country: 100, phone: 50, service: 100, details: 5000, timeline: 120, budget: 120 } as const;
type Enquiry = Record<keyof typeof fields, string>;

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin && origin !== siteUrl) return NextResponse.json({ error: "Please submit your enquiry through our contact page." }, { status: 403 });
  if (!request.headers.get("content-type")?.includes("application/json")) return NextResponse.json({ error: "Invalid enquiry format." }, { status: 415 });
  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 12000) return NextResponse.json({ error: "Your enquiry is too long. Please shorten the project details." }, { status: 413 });
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid body");
    body = parsed as Record<string, unknown>;
  } catch { return NextResponse.json({ error: "We couldn’t read your enquiry. Please try again." }, { status: 400 }); }
  if (body.website) return NextResponse.json({ error: "We couldn’t send your enquiry. Please try again." }, { status: 400 });
  const enquiry = {} as Enquiry;
  for (const [key, max] of Object.entries(fields)) {
    const value = body[key];
    if (value !== undefined && typeof value !== "string") return NextResponse.json({ error: "Please check your enquiry details." }, { status: 400 });
    const text = typeof value === "string" ? value.trim() : "";
    if (text.length > max) return NextResponse.json({ error: `Please shorten the ${key} field.` }, { status: 400 });
    enquiry[key as keyof Enquiry] = text;
  }
  if (!enquiry.name || !enquiry.country || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email) || enquiry.details.length < 20 || (enquiry.service !== "not-sure" && !services.some(service => service.slug === enquiry.service))) {
    return NextResponse.json({ error: "Please enter your name, a valid email, country, service, and at least 20 characters about your project." }, { status: 400 });
  }
  const destination = process.env.CONTACT_WEBHOOK_URL;
  if (!destination) return NextResponse.json({ error: "Online enquiries are temporarily unavailable. Please use our direct contact details or check back shortly." }, { status: 503 });
  try {
    const url = new URL(destination);
    if (url.protocol !== "https:" && !(url.protocol === "http:" && ["localhost", "127.0.0.1"].includes(url.hostname))) throw new Error("Invalid delivery configuration");
    const response = await fetch(url, {
      method: "POST", headers: { "Content-Type": "application/json", ...(process.env.CONTACT_WEBHOOK_SECRET ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_SECRET}` } : {}) },
      body: JSON.stringify({ ...enquiry, serviceName: services.find(service => service.slug === enquiry.service)?.title || "Not sure yet", source: "Codenefy website", submittedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10000), cache: "no-store", redirect: "error",
    });
    if (!response.ok) throw new Error("Delivery failed");
    return NextResponse.json({ success: true });
  } catch { return NextResponse.json({ error: "We couldn’t send your enquiry. Please try again or use our direct contact details." }, { status: 502 }); }
}
