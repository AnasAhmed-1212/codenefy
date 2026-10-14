"use client";

import { useState } from "react";
import { categories, services, type ServiceCategory } from "@/lib/services";
import { ServiceCard } from "./service-card";

const groups: Record<ServiceCategory, { id: string; description: string }> = {
  Technology: { id: "technology", description: "Customer-facing products and the systems behind your operations." },
  "Engineering support": { id: "engineering-support", description: "Additional capacity and a working arrangement aligned with your team." },
  "Ecommerce & marketplaces": { id: "ecommerce-marketplaces", description: "Store setup, product presentation, and defined selling workflows." },
  Creative: { id: "creative", description: "Purposeful videos and consistent visuals for the places your business shows up." },
};

export function ServiceExplorer() {
  const [category, setCategory] = useState<ServiceCategory | "All services">("All services");
  const filtered = category === "All services" ? services : services.filter(service => service.category === category);
  return <div><div className="mb-12 flex flex-wrap gap-2" aria-label="Filter services">{["All services", ...categories].map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item as ServiceCategory | "All services")} className={`rounded-full border px-4 py-2.5 text-xs font-medium transition-colors ${category === item ? "border-ink bg-ink text-white" : "border-line bg-white text-muted hover:border-ink hover:text-ink"}`}>{item}</button>)}</div><p className="sr-only" role="status">{filtered.length} services displayed</p><div className="space-y-14">{categories.filter(item => category === "All services" || category === item).map(item => {
    const categoryServices = filtered.filter(service => service.category === item);
    return <section key={item} id={groups[item].id} className="scroll-mt-28"><div className="mb-6 border-t border-line pt-7"><h3 className="font-heading text-2xl font-semibold tracking-tight">{item}</h3><p className="mt-2 text-sm leading-6 text-muted">{groups[item].description}</p></div><div className={`grid gap-4 sm:grid-cols-2 ${categoryServices.length > 2 ? "lg:grid-cols-3" : ""}`}>{categoryServices.map(service => <ServiceCard key={service.slug} service={service} />)}</div></section>;
  })}</div></div>;
}
