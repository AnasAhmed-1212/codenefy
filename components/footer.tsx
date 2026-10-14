import Link from "next/link";
import { Brand } from "./brand";
import { Container } from "./ui";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="border-t border-white/10 bg-ink pt-16 text-white">
    <Container>
      <div className="grid gap-12 pb-14 md:grid-cols-[2fr_1fr_1fr]">
        <div><Brand light large /><p className="mt-5 max-w-sm text-sm leading-7 text-white/50">We help businesses build digital products, extend their engineering capabilities, and strengthen their online presence.</p>{site.email && <a href={`mailto:${site.email}`} className="mt-5 inline-block text-sm text-brand underline underline-offset-4">{site.email}</a>}</div>
        <div><h2 className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-white/40">Explore</h2><ul className="space-y-3 text-sm">{[{ href: "/", label: "Home" }, { href: "/about", label: "About us" }, { href: "/services", label: "Our services" }, { href: "/contact", label: "Start a conversation" }].map(link => <li key={link.href}><Link className="text-white/70 transition-colors hover:text-brand" href={link.href}>{link.label}</Link></li>)}</ul></div>
        <div><h2 className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-white/40">Across borders</h2><p className="text-sm leading-7 text-white/70">Pakistan · USA · Canada<br />Australia · UAE · Saudi Arabia<br /><span className="text-brand">And worldwide.</span></p></div>
      </div>
      <div className="flex flex-col justify-between gap-5 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row"><p>© {new Date().getFullYear()} Codenefy. All rights reserved.</p><div className="flex gap-6"><Link className="hover:text-white" href="/privacy">Privacy policy</Link><Link className="hover:text-white" href="/terms">Terms of use</Link><a className="hover:text-white" href="#top">Back to top ↑</a></div></div>
    </Container>
  </footer>;
}
