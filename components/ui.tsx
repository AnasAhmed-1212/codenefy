import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./icon";

export function Container({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return <div id={id} className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

export function Button({ children, href, variant = "primary", className = "" }: { children: ReactNode; href: string; variant?: "primary" | "dark" | "outline"; className?: string }) {
  const variants = {
    primary: "border-brand bg-brand text-black hover:border-white hover:bg-white",
    dark: "border-ink bg-ink text-white hover:border-brand hover:bg-brand hover:text-black",
    outline: "border-current bg-transparent hover:bg-white/10",
  };
  return <Link href={href} className={`group inline-flex min-h-12 items-center justify-center gap-6 rounded-lg border px-6 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}>{children}<Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`mb-5 flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] ${light ? "text-white/65" : "text-muted"}`}><span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-brand" : "bg-ink"}`} />{children}</p>;
}

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: ReactNode; description?: string; light?: boolean }) {
  return <div className="mb-10 max-w-2xl lg:mb-14"><Eyebrow light={light}>{eyebrow}</Eyebrow><h2 className="font-heading text-3xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">{title}</h2>{description && <p className={`mt-5 max-w-xl text-base leading-7 ${light ? "text-white/60" : "text-muted"}`}>{description}</p>}</div>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="group inline-flex items-center gap-3 text-sm font-semibold underline decoration-current/25 underline-offset-4 hover:decoration-current">{children}<Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>;
}
