import type { IconName } from "@/lib/services";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  code: <><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" /></>,
  layers: <><path d="m12 3 10 6-10 6L2 9l10-6Zm-9 11 9 5 9-5M3 18l9 5 9-5" /></>,
  sparkles: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Zm7-1v4m-2-2h4M4 18v4m-2-2h4" /></>,
  mobile: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 5h4M11 18h2" /></>,
  cloud: <><path d="M7 18H6a4 4 0 0 1-1-7.87 7 7 0 0 1 13.4-2A5 5 0 0 1 18 18h-1M12 12v10m-3-7 3-3 3 3" /></>,
  users: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3m2-17a3 3 0 0 1 0 6m1 4a5 5 0 0 1 3 4v3" /></>,
  bag: <><path d="M5 7h14l2 14H3L5 7Zm3 0V6a4 4 0 0 1 8 0v1" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
  box: <><path d="m12 2 9 5v10l-9 5-9-5V7l9-5ZM3 7l9 5 9-5M12 12v10M7 4.5l9 5" /></>,
  video: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m10 9 5 3-5 3V9Z" /></>,
  pen: <><path d="m15 3 6 6-10 10-8 2 2-8L15 3Zm-2 2 6 6M5 13l6 6" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  infinity: <path d="M12 12c-2-3-3-5-6-5a5 5 0 0 0 0 10c3 0 4-2 6-5s3-5 6-5a5 5 0 0 1 0 10c-3 0-4-2-6-5Z" />,
};

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
