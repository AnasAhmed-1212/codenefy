import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { FAQ } from "@/components/faq";
import { Icon } from "@/components/icon";
import { Container, Eyebrow } from "@/components/ui";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = createMetadata("Contact Codenefy", "Contact Codenefy about software development, engineering support, AI, cloud, ecommerce, marketplace services, video editing, or graphic design.", "/contact");
export const dynamic = "force-dynamic";

export default function ContactPage() {
  const available = Boolean(process.env.CONTACT_WEBHOOK_URL);
  const phoneDigits = site.phone.replace(/[^0-9]/g, "");
  return <><PageHero eyebrow="Start a conversation" title="Let’s talk about your next project." description="A new product, engineering support, an online store, or creative content. Share what you’re working toward and let’s discuss the right next step." breadcrumbs={[{ label: "Contact" }]} />
    <section className="bg-paper py-16 lg:py-24"><Container className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"><aside className="lg:sticky lg:top-28"><Eyebrow>A useful first conversation</Eyebrow><h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight">Bring your ambition.<br />We’ll help shape the brief.</h2><p className="mt-5 text-sm leading-7 text-muted">You don’t need every detail worked out. A description of your business, your goal, and your current challenge is a good place to start.</p>{(site.email || site.phone) && <div className="mt-9 border-t border-line pt-7"><h3 className="mb-4 text-sm font-semibold">Prefer to speak directly?</h3>{site.email && <a href={`mailto:${site.email}`} className="flex items-center gap-3 py-2 text-sm underline underline-offset-4"><Icon name="mail" className="h-4 w-4 shrink-0" />{site.email}</a>}{site.phone && <a href={`https://wa.me/${phoneDigits}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-2 text-sm underline underline-offset-4"><Icon name="mobile" className="h-4 w-4 shrink-0" />{site.phone} · WhatsApp</a>}</div>}<div className="mt-9 border-t border-line pt-7"><h3 className="mb-5 text-sm font-semibold">What happens next</h3><ol className="space-y-5">{["We review your enquiry and the support you need.", "We contact you to clarify the requirements.", "Where the project is a fit, we discuss scope, delivery arrangements, and a proposal."].map((text, index) => <li key={text} className="flex gap-4"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line bg-white font-mono text-[10px]">0{index + 1}</span><p className="text-sm leading-6 text-muted">{text}</p></li>)}</ol></div><div className="mt-9 flex items-start gap-3 border-t border-line pt-7"><Icon name="globe" className="mt-1 h-5 w-5 shrink-0" /><p className="text-xs leading-6 text-muted">Supporting businesses in Pakistan, the USA, Canada, Australia, the UAE, Saudi Arabia, and worldwide.</p></div></aside><Suspense fallback={<div className="h-[760px] animate-pulse rounded-2xl border border-line bg-white" aria-label="Loading enquiry form" />}><ContactForm available={available} /></Suspense></Container></section>
    <FAQ items={[{ question: "Can I contact you before I have a complete brief?", answer: "Yes. A description of your goal and current challenge is enough to begin. We can work through the details together." }, { question: "Can you support our existing team or platform?", answer: "Share your current setup and the help you need so we can assess the fit, technical requirements, and available working arrangement." }, { question: "Do you work with international clients?", answer: "Yes. We serve businesses across the listed markets and worldwide, with availability and working arrangements agreed for each engagement." }]} />
  </>;
}
