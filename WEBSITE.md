# Codenefy website

Responsive Next.js App Router website using TypeScript, Tailwind CSS 4, and reusable React components with typed props. Content follows the supplied Codenefy brand and content guide.

## Local development

Use `npm run dev`, then visit http://localhost:3000. Dependencies are declared in `package.json`; use `npm install` if they are missing. `npm run lint` checks the code, `npm run build` creates the production build, and `npm start` serves it.

After building, run `node scripts/verify-site.mjs` for route and enquiry smoke checks. Run `node scripts/verify-seo.mjs` for production-domain SEO configuration checks. The enquiry checks use local mock endpoints and synthetic data, start temporary servers on ports 3101 and 3102, and stop those servers afterward.

## Pages and content

Home, About, Services, Contact, Privacy Policy, Terms of Use, and 14 detailed service pages are included. Edit `lib/services.ts` to change descriptions or add a service. Its typed data powers the directory, cards, detail pages, contact choices, metadata, and sitemap. Shared UI is in `components/`; `lib/site.ts` contains brand and process information. No projects, testimonials, statistics, partnerships, or office addresses have been invented.

## Launch configuration

Copy `.env.example` to `.env.local` and set the real domain, verified email, and WhatsApp number. Public settings are embedded during a build: rebuild after changing them.

`NEXT_PUBLIC_SITE_URL` enables canonical URLs, indexing, sitemap entries, and absolute social-image URLs. Leave it blank for a local/unconfigured preview. Use a full origin such as `https://your-real-domain.com`, with no subdirectory.

`NEXT_PUBLIC_CONTACT_EMAIL` and `NEXT_PUBLIC_CONTACT_PHONE` add direct contact links. The phone should include its international country code.

## Enquiry delivery

Set `CONTACT_WEBHOOK_URL` to an HTTPS enquiry-delivery endpoint you control or select. `CONTACT_WEBHOOK_SECRET` optionally adds an `Authorization: Bearer ...` header. HTTP is permitted only for localhost delivery testing.

The contact page checks delivery availability on each request, so the enabled state matches the server configuration. Restart the server after changing server environment settings. Public contact details and the domain still require a rebuild.

The server posts JSON fields: `name`, `email`, `company`, `country`, `phone`, `service`, `details`, `timeline`, `budget`, `serviceName`, `source`, and `submittedAt`. The endpoint must accept the enquiry and return a 2xx response. It must not return success if it has discarded the enquiry.

Submission checks required fields, email, valid service, lengths, JSON format, a honeypot, and browser origin. Delivery uses a 10-second timeout, does not follow redirects, and keeps credentials on the server. The website does not persist enquiry records. Success appears only when the configured endpoint accepts the submission; missing configuration or failed delivery never shows a success message. Without the endpoint, the form displays an availability message and disables submission.

Use a delivery service with suitable spam/rate controls for the live site. No delivery provider or business email has been invented. Confirm delivery and reply handling before launch.

## SEO and accessibility

Each page has a title, description, canonical URL when configured, Open Graph and Twitter metadata. Organization, service, and breadcrumb JSON-LD accompany semantic headings and internal service links. `/sitemap.xml`, `/robots.txt`, a generated 1200×630 social image, an SVG icon, and a custom 404 ship with the app.

Layouts include a skip link, visible keyboard focus, accessible mobile navigation, labeled forms, submission feedback, native FAQ disclosures, responsive grids, and reduced-motion support.

Google Fonts loads Space Grotesk and Inter with system fallbacks. The privacy page describes this external request and the current enquiry implementation. Review the legal pages against the registered business name, actual hosting/delivery providers, retention practices, and local requirements before publishing; the guide did not provide those details.

This checkout is a local implementation. No domain, hosted deployment, or external enquiry destination is provisioned automatically.
