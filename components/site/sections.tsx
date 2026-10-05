import type { SiteContent } from "@/lib/content/types";
import { instagramHandle, telLink, whatsappLink } from "@/lib/contact";
import { CodeIcon, InstagramIcon, LinkedinIcon, PhoneIcon, ServiceIconView, StarIcon, WhatsappIcon } from "./icons";
import { ButtonLink, Container, SectionImage, SectionTitle, Tag } from "./ui";

type Props = { content: SiteContent };

function contactLinks({ contact }: SiteContent) {
  return {
    atendimento: whatsappLink(contact.phone, contact.whatsappAtendimentoMessage),
    palestra: whatsappLink(contact.phone, contact.whatsappPalestraMessage),
  };
}

export function Hero({ content }: Props) {
  const { hero, contact } = content;
  const links = contactLinks(content);

  const rating = (
    <>
      <span className="flex text-star" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} className="size-3.5" />
        ))}
      </span>
      <span>
        <strong className="font-semibold text-ink">{hero.rating}</strong> {hero.ratingLabel}
      </span>
    </>
  );

  return (
    <section id="inicio" className="bg-cream">
      <Container className="grid items-center gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:py-20">
        <div>
          <Tag>{hero.tag}</Tag>
          <h1 className="mt-5">
            <span className="block text-sm font-medium tracking-wide text-forest">{hero.eyebrow}</span>
            <span className="mt-3 block font-serif text-[2.6rem] leading-[1.05] font-medium text-ink sm:text-5xl lg:text-[3.6rem]">
              {hero.title}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{hero.text}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={links.atendimento}>{hero.primaryCta}</ButtonLink>
            <ButtonLink href={links.palestra} variant="outline">
              {hero.secondaryCta}
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            {contact.googleReviewsUrl ? (
              <a
                href={contact.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-forest"
              >
                {rating}
              </a>
            ) : (
              <span className="flex items-center gap-2">{rating}</span>
            )}
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-forest" aria-hidden />
              {hero.badge}
            </span>
          </div>
        </div>

        <SectionImage
          image={hero.image}
          sizes="(min-width: 1152px) 480px, (min-width: 768px) 42vw, 100vw"
          preload
          objectPosition="50% 20%"
          className="aspect-4/5 w-full md:max-w-md md:justify-self-end"
        />
      </Container>
    </section>
  );
}

export function Highlights({ content }: Props) {
  return (
    <section aria-label="Áreas de atuação" className="bg-forest text-white">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4 md:py-12">
        {content.highlights.map((item) => (
          <div key={item.title}>
            <p className="font-serif text-xl">{item.title}</p>
            <p className="mt-1 text-xs tracking-wide text-white/70">{item.text}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

export function About({ content }: Props) {
  const { about, contact } = content;

  return (
    <section id="sobre" className="bg-ivory">
      <Container className="grid items-center gap-10 py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-24">
        <SectionImage
          image={about.image}
          sizes="(min-width: 1152px) 420px, (min-width: 768px) 38vw, 100vw"
          objectPosition="60% 30%"
          fallbackText="Psicologia Humanista • Fenomenológica-Existencial"
          className={`order-last aspect-4/5 w-full md:order-first ${about.image ? "" : "hidden md:block"}`}
        />
        <div>
          <Tag>{about.tag}</Tag>
          <SectionTitle className="mt-5">{about.title}</SectionTitle>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {contact.linkedinUrl && (
            <ButtonLink href={contact.linkedinUrl} variant="outline" className="mt-8 gap-2">
              <LinkedinIcon className="size-4" />
              {about.cta}
            </ButtonLink>
          )}
        </div>
      </Container>
    </section>
  );
}

export function Services({ content }: Props) {
  const { services } = content;

  return (
    <section id="atendimentos" className="bg-cream">
      <Container className="py-16 md:py-24">
        <div className="max-w-2xl">
          <SectionTitle>{services.title}</SectionTitle>
          <p className="mt-4 text-base leading-relaxed text-muted">{services.intro}</p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {services.items.map((item) => (
            <li key={item.title} className="flex flex-col rounded-3xl border border-line bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-full bg-lilac/60 text-plum">
                  <ServiceIconView icon={item.icon} className="size-5" />
                </span>
                <Tag>{item.tag}</Tag>
              </div>
              <h3 className="mt-6 font-serif text-2xl leading-snug font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Territory({ content }: Props) {
  const { territory } = content;

  return (
    <section id="atuacao-publica" className="bg-ivory">
      <Container className="grid items-center gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-24">
        <div>
          <Tag>{territory.tag}</Tag>
          <SectionTitle className="mt-5">{territory.title}</SectionTitle>
          <p className="mt-6 text-base leading-relaxed text-muted">{territory.text}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {territory.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 text-sm text-ink">
                <span className="size-2 shrink-0 rounded-full bg-lilac" aria-hidden />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <SectionImage
          image={territory.image}
          sizes="(min-width: 1152px) 600px, (min-width: 768px) 52vw, 100vw"
          className="aspect-4/3 w-full"
        />
      </Container>
    </section>
  );
}

export function Talks({ content }: Props) {
  const { talks } = content;

  return (
    <section id="palestras" className="bg-cream">
      <Container className="py-16 md:py-24">
        <div className="max-w-2xl">
          <Tag>{talks.tag}</Tag>
          <SectionTitle className="mt-5">{talks.title}</SectionTitle>
          <p className="mt-4 text-base leading-relaxed text-muted">{talks.intro}</p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-[1.25fr_1fr]">
          <SectionImage
            image={talks.image}
            sizes="(min-width: 1152px) 600px, (min-width: 768px) 55vw, 100vw"
            className="aspect-4/3 w-full md:aspect-auto md:min-h-80"
          />
          <ul className="flex flex-col gap-3">
            {talks.topics.map((topic) => (
              <li key={topic.title} className="flex-1 rounded-2xl border border-line bg-white px-5 py-4">
                <h3 className="text-sm font-semibold text-ink">{topic.title}</h3>
                <p className="mt-1 text-sm text-muted">{topic.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function Faq({ content }: Props) {
  const { faq } = content;

  return (
    <section id="duvidas" className="bg-ivory">
      <Container className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-24">
        <div>
          <Tag>{faq.tag}</Tag>
          <SectionTitle className="mt-5">{faq.title}</SectionTitle>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faq.items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="font-serif text-xl leading-snug font-medium text-ink">{item.question}</h3>
                <span
                  aria-hidden
                  className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-sand text-ink transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 text-base leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ContactCta({ content }: Props) {
  const { contactCta } = content;
  const links = contactLinks(content);

  return (
    <section id="contato" className="bg-plum text-white">
      <Container className="py-16 text-center md:py-20">
        <h2 className="font-serif text-4xl font-medium sm:text-5xl">{contactCta.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">{contactCta.text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={links.atendimento} variant="light">
            {contactCta.primaryCta}
          </ButtonLink>
          <ButtonLink href={links.palestra} variant="light">
            {contactCta.secondaryCta}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function SiteFooter({ content }: Props) {
  const { profile, contact, footer } = content;
  const socialLink = "flex items-center gap-2 transition-colors hover:text-forest";

  return (
    <footer className="bg-cream">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-serif text-xl font-medium">{profile.name}</p>
          <p className="mt-1 text-xs text-muted">
            {profile.role} • {profile.crp}
          </p>
        </div>

        <div className="space-y-2 text-sm text-muted sm:text-right">
          {footer.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <div className="flex flex-col gap-2 pt-2 sm:items-end">
            <a
              href={whatsappLink(contact.phone, contact.whatsappAtendimentoMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLink}
            >
              <WhatsappIcon className="size-4" />
              WhatsApp
            </a>
            <a href={telLink(contact.phone)} className={socialLink}>
              <PhoneIcon className="size-4" />
              {contact.phone}
            </a>
            {contact.instagramUrl && (
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className={socialLink}>
                <InstagramIcon className="size-4" />
                {instagramHandle(contact.instagramUrl)}
              </a>
            )}
            {contact.linkedinUrl && (
              <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className={socialLink}>
                <LinkedinIcon className="size-4" />
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col gap-3 border-t border-line pt-6 pb-24 text-xs text-muted sm:flex-row sm:items-center sm:justify-between md:pb-6">
          <p>
            © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            <CodeIcon className="size-3.5" />
            Desenvolvido por
            <a
              href="https://nogueiradev.com.br"
              target="_blank"
              rel="noopener"
              className="font-medium text-forest transition-colors hover:text-plum"
            >
              Felipe Nogueira
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export function WhatsappFloatingButton({ content }: Props) {
  const { contact } = content;

  return (
    <a
      href={whatsappLink(contact.phone, contact.whatsappAtendimentoMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={contact.whatsappButtonLabel}
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-[#25d366] p-3.5 text-white shadow-lg shadow-black/15 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:right-6 sm:bottom-6 md:px-5 md:py-3"
    >
      <WhatsappIcon className="size-7 md:size-5" />
      <span className="hidden text-sm font-medium md:inline">{contact.whatsappButtonLabel}</span>
    </a>
  );
}
