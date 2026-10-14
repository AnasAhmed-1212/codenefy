import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/icon";
import { Process } from "@/components/process";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { ServiceCard } from "@/components/service-card";
import { StructuredData } from "@/components/structured-data";
import { getService, services } from "@/lib/services";
import { createMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map(service => ({ slug: service.slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  return service ? createMetadata(service.title, service.description, `/services/${slug}`) : { title: "Service not found", robots: { index: false } };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = services.filter(item => item.slug !== slug && item.category === service.category).slice(0, 3);
  const suggestions = related.length ? related : services.filter(item => item.slug !== slug).slice(0, 3);
  return <>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "Service", name: service.title, serviceType: service.title, description: service.description, provider: { "@type": "Organization", name: "Codenefy", ...(siteUrl ? { "@id": `${siteUrl}/#organization` } : {}) }, ...(siteUrl ? { url: `${siteUrl}/services/${slug}` } : {}), areaServed: "Worldwide" }} />
    {siteUrl && <StructuredData data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` }, { "@type": "ListItem", position: 3, name: service.title, item: `${siteUrl}/services/${slug}` }] }} />}
    <PageHero eyebrow={`${service.category} / ${service.title}`} title={service.headline} description={service.intro} breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.shortTitle }]} cta={{ label: "Discuss this service", href: `/contact?service=${slug}` }} />
    <section className="py-20 lg:py-28"><Container className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-20"><div><Icon name={service.icon} className="mb-7 h-10 w-10" /><h2 className="font-heading text-3xl font-semibold tracking-tight">{service.title},<br />with your goals in view.</h2></div><p className="text-lg leading-8 text-muted">{service.overview}</p></Container></section>
    <section className="bg-paper py-20 lg:py-24"><Container><SectionHeading eyebrow="What we can help with" title="A scope shaped around your business." description="The capabilities below are starting points. Features, integrations, and responsibilities are confirmed for your engagement." /><div className="grid gap-5 md:grid-cols-2">{service.offerings.map((offering, index) => <article key={offering.title} className="rounded-xl border border-line bg-white p-8"><span className="font-mono text-xs text-muted">0{index + 1}</span><h3 className="mt-6 font-heading text-2xl font-semibold tracking-tight">{offering.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{offering.description}</p></article>)}</div></Container></section>
    <section className="py-20 lg:py-24"><Container className="grid gap-9 lg:grid-cols-2 lg:gap-20"><SectionHeading eyebrow="Plan for the handover" title="Know what you’re working toward." description="A clear delivery plan helps everyone understand what is included and what comes next." /><ul className="space-y-0">{service.deliverables.map(item => <li key={item} className="flex items-start gap-4 border-b border-line py-5 first:border-t"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand"><Icon name="check" className="h-3.5 w-3.5" /></span><span className="text-sm leading-6">{item}</span></li>)}</ul></Container></section>
    <Process compact /><FAQ items={service.faqs} />
    <section className="bg-paper py-16 lg:py-20"><Container><SectionHeading eyebrow="Connected capabilities" title="Keep your next steps connected." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{suggestions.map(item => <ServiceCard key={item.slug} service={item} />)}</div></Container></section>
    <CTA title={`Let’s talk about ${service.shortTitle.toLowerCase()}.`} description="Tell us about your goals, existing setup, and what you need from the engagement. We’ll discuss a practical scope and the right next step." href={`/contact?service=${slug}`} />
  </>;
}
