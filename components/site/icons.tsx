import type { ReactNode, SVGProps } from "react";
import type { ServiceIcon } from "@/lib/content/types";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.8l2.8 5.7 6.3.9-4.55 4.43 1.07 6.27L12 17.1l-5.62 2.96 1.07-6.27L2.9 9.4l6.3-.9L12 2.8z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V16M8 7.8v.01M11.5 16v-3.2a2.3 2.3 0 0 1 4.6 0V16M11.5 10.5V16" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 4h3.5l1.5 4-2 1.3a11 11 0 0 0 6.7 6.7L16 14l4 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.16-1.5A9.9 9.9 0 1 0 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.06.89.9-2.98-.2-.31a8.2 8.2 0 1 1 6.86 3.73zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.55.12-.16.25-.63.8-.78.96-.14.17-.29.19-.53.07a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.42l-.75-1.82c-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04 4.76 4.76 0 0 0 1 2.53 10.9 10.9 0 0 0 4.17 3.68c1.55.67 2.16.73 2.94.61.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.15-1.17-.06-.1-.22-.17-.47-.29z" />
    </svg>
  );
}

const serviceIcons: Record<ServiceIcon, (props: IconProps) => ReactNode> = {
  online: (props) => (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  envelhecimento: (props) => (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
    </svg>
  ),
  palestras: (props) => (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7l-4 4v-4H6a2 2 0 0 1-2-2V6z" />
    </svg>
  ),
};

export function ServiceIconView({ icon, ...props }: IconProps & { icon: ServiceIcon }) {
  const Icon = serviceIcons[icon];
  return <Icon {...props} />;
}
