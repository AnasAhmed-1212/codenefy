import { Button, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return <section className="bg-paper py-28 lg:py-40"><Container><Eyebrow>404 / Page not found</Eyebrow><h1 className="max-w-xl font-heading text-5xl font-semibold tracking-tight sm:text-6xl">Let’s find your<br />next move.</h1><p className="mt-6 max-w-lg text-base leading-7 text-muted">The page you’re looking for isn’t here. Explore our services or head back to the homepage.</p><div className="mt-9 flex flex-wrap gap-3"><Button href="/" variant="dark">Back to home</Button><Button href="/services">Explore services</Button></div></Container></section>;
}
