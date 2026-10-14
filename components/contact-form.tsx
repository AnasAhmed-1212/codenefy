"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/services";
import { Icon } from "./icon";

const inputClass = "mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-ink focus:outline-none focus:ring-2 focus:ring-brand/35 disabled:opacity-60";

function Field({ label, required = false, children, hint }: { label: string; required?: boolean; children: ReactNode; hint?: string }) {
  return <label className="block text-xs font-medium text-ink">{label}{required ? <span className="ml-1 text-muted" aria-hidden="true">*</span> : <span className="ml-1.5 font-normal text-muted">(optional)</span>}{children}{hint && <span className="mt-2 block text-[11px] font-normal leading-5 text-muted">{hint}</span>}</label>;
}

export function ContactForm({ available }: { available: boolean }) {
  const params = useSearchParams();
  const requestedService = params.get("service") || "not-sure";
  const [selectedService, setSelectedService] = useState(services.some(service => service.slug === requestedService) ? requestedService : "not-sure");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending"); setMessage("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We couldn’t send your enquiry. Please try again.");
      setStatus("success");
      setMessage("Thank you for contacting Codenefy. Your enquiry has been received. We’ll review the details and follow up using the contact information you provided.");
      form.reset(); setSelectedService("not-sure");
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : "We couldn’t send your enquiry. Please try again.");
    }
  }

  return <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 sm:p-9" aria-label="Project enquiry">
    <h2 className="font-heading text-2xl font-semibold tracking-tight">Tell us what you need.</h2><p className="mb-8 mt-2 text-sm leading-6 text-muted">A starting point is enough. Fields marked * are required.</p>
    {!available && <p className="mb-6 rounded-lg border border-line bg-paper p-4 text-xs leading-6 text-muted">Online enquiries are temporarily unavailable. {process.env.NEXT_PUBLIC_CONTACT_EMAIL ? "Please use the direct contact details on this page." : "Please check back shortly."}</p>}
    <fieldset disabled={status === "sending"} className="grid gap-5 sm:grid-cols-2">
      <legend className="sr-only">Contact and project details</legend>
      <Field label="Full name" required><input autoComplete="name" name="name" required maxLength={120} placeholder="Your name" className={inputClass} /></Field>
      <Field label="Work email" required><input type="email" autoComplete="email" name="email" required maxLength={254} placeholder="you@company.com" className={inputClass} /></Field>
      <Field label="Company name"><input autoComplete="organization" name="company" maxLength={160} placeholder="Your company or brand" className={inputClass} /></Field>
      <Field label="Country or region" required><input autoComplete="country-name" name="country" required maxLength={100} placeholder="Where your business operates" className={inputClass} /></Field>
      <Field label="Phone or WhatsApp"><input type="tel" autoComplete="tel" name="phone" maxLength={50} placeholder="Include your country code" className={inputClass} /></Field>
      <Field label="Service required" required><select name="service" required value={selectedService} onChange={event => setSelectedService(event.target.value)} className={inputClass}><option value="not-sure">Not sure yet</option>{services.map(service => <option key={service.slug} value={service.slug}>{service.title}</option>)}</select></Field>
      <div className="sm:col-span-2"><Field label="Project details" required hint="Please don’t include passwords, payment details, or confidential records."><textarea name="details" required minLength={20} maxLength={5000} rows={5} placeholder="What would you like to build or improve? Tell us about your goals, existing setup, and important requirements." className={`${inputClass} resize-y`} /></Field></div>
      <Field label="Preferred timeline"><input name="timeline" maxLength={120} placeholder="A target date, or flexible" className={inputClass} /></Field>
      <Field label="Estimated budget"><input name="budget" maxLength={120} placeholder="Approximate range and currency" className={inputClass} /></Field>
      <div className="hidden" aria-hidden="true"><label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label></div>
    </fieldset>
    <p className="mt-6 text-xs leading-6 text-muted">Read our <Link href="/privacy" className="font-medium text-ink underline underline-offset-4">Privacy Policy</Link> for information about how we handle your enquiry details.</p>
    <button type="submit" disabled={status === "sending" || !available} className="mt-6 flex min-h-12 w-full items-center justify-between gap-5 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand hover:text-black disabled:cursor-not-allowed disabled:opacity-50"><span>{status === "sending" ? "Sending your enquiry…" : "Send my enquiry"}</span><Icon name="arrow" className="h-4 w-4" /></button>
    {message && <div role={status === "error" ? "alert" : "status"} className={`mt-5 rounded-lg border p-4 text-sm leading-6 ${status === "success" ? "border-brand/50 bg-brand/10" : "border-red-200 bg-red-50 text-red-800"}`}>{message}</div>}
  </form>;
}
