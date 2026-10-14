export const site = {
  name: "Codenefy",
  tagline: "Build your next move.",
  description: "Build software, extend your engineering team, and strengthen your online business with Codenefy's AI, cloud, ecommerce, and creative services.",
  markets: ["Pakistan", "United States", "Canada", "Australia", "United Arab Emirates", "Saudi Arabia"],
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
};

export const siteUrl = (() => {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.origin : undefined;
  } catch { return undefined; }
})();

export const processSteps = [
  { title: "Discover", description: "Tell us about your business, your people, and the challenge you want to solve." },
  { title: "Plan", description: "Together, define the scope, priorities, deliverables, and responsibilities." },
  { title: "Create", description: "We build with agreed review points, so your feedback shapes the work." },
  { title: "Deliver", description: "Review the result and prepare for launch, handover, or continued support." },
];

export const engagements = [
  { title: "Project delivery", description: "From an early idea to a defined brief. Agree on a practical scope, deliverables, and review milestones.", icon: "code" as const },
  { title: "Team extension", description: "Bring additional engineering capacity into your existing team, priorities, and development workflow.", icon: "users" as const },
  { title: "Ongoing collaboration", description: "Keep moving with continued development, technical support, or creative production as your needs change.", icon: "infinity" as const },
];
