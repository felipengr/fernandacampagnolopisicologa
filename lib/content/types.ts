// Tudo o que a Fernanda poderá editar pelo painel /admin.
// Layout, cores, ícones e a ordem das seções ficam no código.

export type ImageField = {
  src: string;
  alt: string;
} | null;

export type ServiceIcon = "online" | "envelhecimento" | "palestras";

export type SiteContent = {
  profile: {
    name: string;
    shortName: string;
    role: string;
    crp: string;
  };
  contact: {
    phone: string;
    whatsappButtonLabel: string;
    whatsappAtendimentoMessage: string;
    whatsappPalestraMessage: string;
    instagramUrl: string;
    linkedinUrl: string;
    googleReviewsUrl: string;
  };
  hero: {
    tag: string;
    eyebrow: string;
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    rating: string;
    ratingLabel: string;
    badge: string;
    image: ImageField;
  };
  highlights: {
    title: string;
    text: string;
  }[];
  about: {
    tag: string;
    title: string;
    paragraphs: string[];
    cta: string;
    image: ImageField;
  };
  services: {
    title: string;
    intro: string;
    items: {
      icon: ServiceIcon;
      tag: string;
      title: string;
      text: string;
    }[];
  };
  territory: {
    tag: string;
    title: string;
    text: string;
    bullets: string[];
    image: ImageField;
  };
  talks: {
    tag: string;
    title: string;
    intro: string;
    image: ImageField;
    topics: {
      title: string;
      text: string;
    }[];
  };
  faq: {
    tag: string;
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  contactCta: {
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    lines: string[];
  };
};
