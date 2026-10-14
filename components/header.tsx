"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Brand } from "./brand";
import { Icon } from "./icon";
import { Button, Container } from "./ui";

const links = [{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/services", label: "Services" }, { href: "/contact", label: "Contact" }];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white">
    <Container className="flex h-20 items-center justify-between gap-6">
      <Brand light onClick={() => setOpen(false)} />
      <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">{links.map((link) => {
        const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
        return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`relative py-3 text-[13px] transition-colors hover:text-brand ${active ? "text-white after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-4 after:bg-brand" : "text-white/60"}`}>{link.label}</Link>;
      })}</nav>
      <Button href="/contact" className="hidden min-h-10 px-4 py-2 text-xs lg:inline-flex">Discuss your project</Button>
      <button ref={menuButton} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 md:hidden"><Icon name={open ? "close" : "menu"} /></button>
    </Container>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-white/10 px-5 py-5 md:hidden">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined} className="block rounded-lg px-3 py-3 text-sm hover:bg-white/5 hover:text-brand">{link.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="mt-3 flex min-h-12 w-full items-center justify-center gap-6 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-black">Discuss your project<Icon name="arrow" className="h-4 w-4" /></Link></nav>}
  </header>;
}
