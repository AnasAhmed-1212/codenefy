import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = createMetadata("Privacy Policy", "Learn about information submitted through Codenefy's enquiry form and the website's use of essential services.", "/privacy");

export default function PrivacyPage() {
  return <LegalPage title="Privacy policy." description="How information submitted through this website is handled, and what you should know before sending an enquiry." sections={[
    { title: "Information you choose to provide", content: <p>The contact form asks for your name, email address, country or region, service of interest, and project details. You can also choose to provide a company name, phone number, timeline, and estimated budget. Please do not submit passwords, payment information, or confidential records.</p> },
    { title: "Purpose of an enquiry", content: <p>Enquiry information is used to review your requirements, contact you, assess whether the work is a fit, and discuss a potential engagement. Submitting an enquiry does not sign you up for a marketing mailing list through this website.</p> },
    { title: "Enquiry delivery and service providers", content: <p>When online enquiries are enabled, the website forwards your information to Codenefy’s configured enquiry-delivery service. A successful submission is shown only after that service accepts the enquiry. Hosting and delivery providers may process technical information needed to operate their services. Data locations and retention can depend on the providers selected for the live website.</p> },
    { title: "Fonts, links, and technical requests", content: <p>The website uses fonts from Google Fonts. Loading them can send your IP address and browser request information to Google. Links to external services, including WhatsApp when available, take you to services governed by their own privacy practices. This website does not include an advertising tracker or analytics integration in its current implementation.</p> },
    { title: "Storage and retention", content: <p>The website application does not save enquiry details in a local website database. Submitted information may be retained in the business’s configured enquiry destination and subsequent correspondence. The website does not set a specific retention duration; handling and deletion requests should be discussed directly with Codenefy.</p> },
    { title: "Questions and requests", content: <p>To ask about your enquiry information or request a correction or deletion, {site.email ? <a className="text-ink underline underline-offset-4" href={`mailto:${site.email}`}>email {site.email}</a> : <>use the available details on our <Link className="text-ink underline underline-offset-4" href="/contact">Contact page</Link></>}. Please provide enough context to identify the relevant enquiry without sharing unnecessary sensitive information.</p> },
  ]} />;
}
