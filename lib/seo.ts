import type { Metadata } from "next";
import { site, siteUrl } from "./site";

export function createMetadata(title: string, description: string, path = "/"): Metadata {
  return {
    title: { absolute: `${title} | ${site.name}` }, description,
    alternates: siteUrl ? { canonical: `${siteUrl}${path === "/" ? "" : path}` } : undefined,
    openGraph: {
      title: `${title} | ${site.name}`, description, siteName: site.name, type: "website", locale: "en_US",
      ...(siteUrl ? { url: `${siteUrl}${path}` } : {}),
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Codenefy — Build your next move" }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: ["/opengraph-image"] },
  };
}
