import type { SiteContent } from "@/lib/content/types";
import { phoneDigits } from "@/lib/content/validate";
import { businessName, seo, siteUrl } from "@/lib/seo";

const absolute = (src: string) => (src.startsWith("http") ? src : `${siteUrl}${src}`);

// Dados estruturados (schema.org): ajudam Google e assistentes de IA a entender
// quem é a profissional, o que ela oferece e como entrar em contato.
export function StructuredData({ content }: { content: SiteContent }) {
  const { profile, contact, hero, services, talks, faq } = content;
  const digits = phoneDigits(contact.phone);
  const telephone = `+${digits.startsWith("55") ? digits : `55${digits}`}`;
  const sameAs = [contact.instagramUrl, contact.linkedinUrl, contact.googleReviewsUrl].filter(Boolean);
  const personId = `${siteUrl}/#pessoa`;

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#site`,
      url: siteUrl,
      name: businessName,
      inLanguage: "pt-BR",
    },
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      jobTitle: profile.role,
      image: hero.image ? absolute(hero.image.src) : undefined,
      url: siteUrl,
      sameAs,
      knowsAbout: [
        "Psicologia clínica",
        "Psicologia humanista",
        "Psicologia fenomenológica-existencial",
        "Envelhecimento e terceira idade",
        "Saúde mental",
        "Fortalecimento de vínculos",
        "Prevenção da violência contra a pessoa idosa",
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Registro profissional",
        name: profile.crp,
        recognizedBy: { "@type": "Organization", name: "Conselho Regional de Psicologia de São Paulo (CRP-SP)" },
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#servico`,
      name: businessName,
      description: seo.description,
      url: siteUrl,
      telephone,
      image: hero.image ? absolute(hero.image.src) : undefined,
      founder: { "@id": personId },
      areaServed: { "@type": "Country", name: "Brasil" },
      address: { "@type": "PostalAddress", addressRegion: "SP", addressCountry: "BR" },
      availableLanguage: "pt-BR",
      sameAs,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Atendimentos e palestras",
        itemListElement: [
          ...services.items.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item.title, description: item.text },
          })),
          ...talks.topics.map((topic) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `Palestra: ${topic.title}`, description: topic.text },
          })),
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#duvidas`,
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });

  return (
    <script
      type="application/ld+json"
      // Escapa "<" para o conteúdo editável não conseguir fechar a tag <script>.
      dangerouslySetInnerHTML={{ __html: json.replace(/</g, "\\u003c") }}
    />
  );
}
