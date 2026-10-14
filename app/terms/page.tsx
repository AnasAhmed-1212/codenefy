import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Terms of Use", "Read the terms for using Codenefy's website, service information, and enquiry form.", "/terms");

export default function TermsPage() {
  return <LegalPage title="Terms of use." description="Information about using this website and starting a conversation with Codenefy." sections={[
    { title: "Website information", content: <p>This website introduces Codenefy’s services and provides a way to discuss potential work. Service descriptions are proposed capabilities and starting points for a conversation. They do not mean that every feature, platform, or support activity is included in every engagement.</p> },
    { title: "Project agreements", content: <p>A project’s scope, pricing, timing, responsibilities, acceptance criteria, revision arrangements, ownership, and support are agreed separately in a written proposal or service agreement. Sending an enquiry does not create a service contract or reserve engineering availability.</p> },
    { title: "Accurate information and appropriate use", content: <p>Provide accurate contact and project information when making an enquiry. Do not use this website to send unlawful content, spam, malicious code, or information you are not entitled to share. Do not submit passwords, payment details, or confidential records through the form.</p> },
    { title: "Third-party platforms", content: <p>Shopify, WordPress, Amazon, eBay, Etsy, and other named platforms are independent services. Their eligibility requirements, fees, terms, and decisions apply to their use. Mentioning a platform does not imply that Codenefy is an official partner or endorsed provider.</p> },
    { title: "Results and availability", content: <p>Sales results, marketplace account approvals, search rankings, AI output accuracy, and uninterrupted hosting or cloud service are not guaranteed by the descriptions on this website. Specific delivery and support commitments must be confirmed in the agreement for your project.</p> },
    { title: "Content and project materials", content: <p>Website content is provided to explain the business and services. Ownership and permitted use of project materials, source code, editable files, fonts, and third-party assets are defined in the relevant project agreement and applicable licenses.</p> },
    { title: "Questions", content: <p>For clarification about service information or a proposed engagement, visit our <Link className="text-ink underline underline-offset-4" href="/contact">Contact page</Link>. Information about enquiry details is available in our <Link className="text-ink underline underline-offset-4" href="/privacy">Privacy Policy</Link>.</p> },
  ]} />;
}
