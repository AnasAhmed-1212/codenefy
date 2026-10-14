import Link from "next/link";
import type { Service } from "@/lib/services";
import { Icon } from "./icon";

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  return <Link href={`/services/${service.slug}`} className="group flex min-h-64 flex-col rounded-xl border border-line bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-ink hover:shadow-[0_12px_30px_-15px_#00000020]">
    <div className="mb-8 flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-paper transition-colors group-hover:bg-brand"><Icon name={service.icon} className="h-5 w-5" /></div><span className="font-mono text-[10px] text-muted">{index === undefined ? service.category : String(index + 1).padStart(2, "0")}</span></div>
    <h3 className="font-heading text-xl font-semibold tracking-tight">{service.shortTitle}</h3><p className="mb-7 mt-3 text-sm leading-6 text-muted">{service.description}</p><div className="mt-auto flex items-center justify-between text-xs font-semibold"><span>Explore service</span><Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
  </Link>;
}
