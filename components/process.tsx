import { processSteps } from "@/lib/site";
import { Container, SectionHeading } from "./ui";

export function Process({ compact = false }: { compact?: boolean }) {
  return <section className={`bg-paper ${compact ? "py-16" : "py-20 lg:py-28"}`}><Container><SectionHeading eyebrow="A practical process" title={<>Clear from the first conversation.<br /><span className="text-muted">Focused through delivery.</span></>} /><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{processSteps.map((step, index) => <div key={step.title} className="border-t border-line pt-6"><span className="font-mono text-xs text-muted">0{index + 1} /</span><h3 className="mt-7 font-heading text-2xl font-semibold tracking-tight">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{step.description}</p></div>)}</div></Container></section>;
}
