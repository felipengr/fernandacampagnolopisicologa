import type { SiteContent } from "@/lib/content/types";
import { whatsappLink } from "@/lib/contact";
import { MobileMenu } from "./mobile-menu";
import { ButtonLink, Container } from "./ui";

export type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atendimentos", href: "#atendimentos" },
  { label: "Palestras", href: "#palestras" },
  { label: "Atuação pública", href: "#atuacao-publica" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function SiteHeader({ content }: { content: SiteContent }) {
  const { profile, contact } = content;
  const ctaHref = whatsappLink(contact.phone, contact.whatsappAtendimentoMessage);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/90 backdrop-blur">
      <Container className="relative flex h-18 items-center justify-between gap-6">
        <a href="#inicio" className="leading-tight">
          <span className="block font-serif text-xl font-medium text-ink">{profile.shortName}</span>
          <span className="block text-[0.7rem] tracking-wide text-muted">
            {profile.role} • {profile.crp}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 whitespace-nowrap lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-ink/80 transition-colors hover:text-forest">
              {item.label}
            </a>
          ))}
          <ButtonLink href={ctaHref} className="px-4 py-2.5">
            Agendar conversa
          </ButtonLink>
        </nav>

        <MobileMenu items={navItems} ctaLabel="Agendar conversa" ctaHref={ctaHref} />
      </Container>
    </header>
  );
}
