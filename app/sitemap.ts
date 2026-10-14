import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return ["/", "/about", "/services", "/contact", "/privacy", "/terms", ...services.map(service => `/services/${service.slug}`)].map(path => ({ url: `${siteUrl}${path === "/" ? "" : path}` }));
}
