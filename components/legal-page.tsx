import type { ReactNode } from "react";
import { PageHero } from "./page-hero";
import { Container } from "./ui";

export function LegalPage({ title, description, sections }: { title: string; description: string; sections: { title: string; content: ReactNode }[] }) {
  return <><PageHero eyebrow="Website information" title={title} description={description} breadcrumbs={[{ label: title }]} /><section className="py-16 lg:py-24"><Container><div className="max-w-3xl space-y-10">{sections.map((section, index) => <section key={section.title} className="border-t border-line pt-7"><h2 className="font-heading text-xl font-semibold tracking-tight"><span className="mr-3 font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>{section.title}</h2><div className="mt-4 space-y-4 text-sm leading-7 text-muted">{section.content}</div></section>)}</div></Container></section></>;
}
