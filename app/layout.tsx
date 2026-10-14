import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title: { default: "Codenefy | Software, Ecommerce and Creative Services", template: "%s | Codenefy" },
  description: site.description,
  applicationName: site.name,
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="top" className="min-h-screen">
        <a href="#main" className="fixed left-5 top-3 z-[100] -translate-y-24 rounded-lg bg-brand px-5 py-3 font-semibold text-black focus:translate-y-0">Skip to content</a>
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
        <StructuredData data={{ "@context": "https://schema.org", "@type": "Organization", name: site.name, description: site.description, ...(siteUrl ? { url: siteUrl, "@id": `${siteUrl}/#organization` } : {}), ...(site.email ? { email: site.email } : {}), ...(site.phone ? { telephone: site.phone } : {}), areaServed: site.markets.map(name => ({ "@type": "Country", name })) }} />
      </body>
    </html>
  );
}
