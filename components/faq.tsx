import type { FAQ as FAQType } from "@/lib/services";
import { Container, SectionHeading } from "./ui";
import { Icon } from "./icon";

export function FAQ({ items, title = "A few things you might be wondering." }: { items: FAQType[]; title?: string }) {
  return <section className="py-20 lg:py-28"><Container className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-20"><SectionHeading eyebrow="Good questions" title={title} /><div>{items.map((item) => <details key={item.question} className="group border-b border-line first:border-t"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-base font-medium"><span>{item.question}</span><Icon name="plus" className="h-4 w-4 shrink-0 transition-transform group-open:rotate-45" /></summary><p className="max-w-2xl pb-6 pr-7 text-sm leading-7 text-muted">{item.answer}</p></details>)}</div></Container></section>;
}
