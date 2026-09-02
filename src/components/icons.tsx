import type { ReactNode, SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function IconMenu(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function IconClose(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconArrowRight(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconWhatsApp(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.15 1.6 5.96L2 22l4.25-1.68a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.06c-.24.68-1.42 1.31-1.95 1.36-.5.05-1.13.24-3.66-.76-3.08-1.21-5.06-4.34-5.21-4.54-.15-.2-1.25-1.66-1.25-3.17s.79-2.25 1.07-2.56c.28-.31.61-.38.81-.38.2 0 .41 0 .58.01.19.01.44-.07.69.53.24.6.83 2.06.9 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5l-.44.53c-.15.15-.31.32-.13.61.17.29.77 1.27 1.65 2.06 1.14 1.01 2.1 1.33 2.39 1.48.29.15.46.13.63-.08.17-.2.73-.85.92-1.14.19-.29.39-.24.65-.15.26.1 1.67.79 1.96.93.29.15.48.22.55.34.07.12.07.71-.17 1.39Z" />
    </svg>
  );
}

export function IconMapPin(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconPhone(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5c0 8.3 6.7 15 15 15l1-3.6-4-1.6-1.6 2A12 12 0 0 1 8 9.2l2-1.6L8.6 4H4Z" />
    </svg>
  );
}

export function IconInstagram(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconQuote(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M9.5 6C6.5 6 4 8.5 4 11.5V18h6v-6H7.2c0-1.9 1-3.3 2.9-4L9.5 6Zm10 0c-3 0-5.5 2.5-5.5 5.5V18h6v-6h-2.8c0-1.9 1-3.3 2.9-4L19.5 6Z" />
    </svg>
  );
}

const servicePaths: Record<string, ReactNode> = {
  rings: (
    <>
      <circle cx="9" cy="14" r="5" />
      <circle cx="15" cy="14" r="5" />
      <path d="M9 4.5l1.5 2h3L15 4.5" />
    </>
  ),
  cap: (
    <>
      <path d="M2 9l10-4 10 4-10 4z" />
      <path d="M6 11v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4" />
      <path d="M22 9v5" />
    </>
  ),
  cake: (
    <>
      <path d="M4 21h16v-7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3z" />
      <path d="M4 16c1.5 1.2 3 1.2 4.5 0S11.5 14.8 13 16s3 1.2 4.5 0S20 14.8 20 16" />
      <path d="M12 3v4M9.5 5 12 3l2.5 2" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15l-1.8-4.2L5.5 9l4.7-1.3z" />
      <path d="M18 15l.9 2.4L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.6z" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.7 0 2-1.3 1.2-2.3-.8-1-.5-2.7 1-2.7H17a4 4 0 0 0 4-4c0-4.4-4-7-9-7z" />
      <circle cx="7.5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4a3 3 0 0 1 6 0M9 11h6M9 15h4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  star: (
    <>
      <path d="M12 3l2.6 6.3L21 10l-5 4.2L17.5 21 12 17.3 6.5 21 8 14.2 3 10l6.4-.7z" />
    </>
  ),
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  return (
    <svg {...base} className={className}>
      {servicePaths[name] ?? servicePaths.sparkles}
    </svg>
  );
}
