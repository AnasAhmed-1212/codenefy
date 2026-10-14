import { PageHero } from "@/components/page-hero";
import { Container, Eyebrow } from "@/components/ui";
import { ServiceExplorer } from "@/components/service-explorer";
import { CTA } from "@/components/cta";
import { Process } from "@/components/process";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Our Services", "Explore Codenefy's software development, AI, cloud, engineering outsourcing, Shopify, WordPress, marketplace support, video editing, and graphic design services.", "/services");

export default function ServicesPage() {
  return <><PageHero eyebrow="Our services" title="The right expertise for your next move." description="Technology, engineering support, ecommerce, and creative services. Explore the capabilities we can bring together around your business needs." breadcrumbs={[{ label: "Services" }]} />
    <section className="bg-paper py-16 lg:py-20"><Container><Eyebrow>Find your starting point</Eyebrow><h2 className="mb-9 font-heading text-3xl font-semibold tracking-tight">What would you like to build or improve?</h2><ServiceExplorer /></Container></section>
    <Process /><CTA title="Not sure where to start?" description="Describe your goal and your current challenge. We’ll help you find the services and working arrangement that fit." label="Help me plan my project" />
  </>;
}
