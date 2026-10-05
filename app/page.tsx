import { SiteHeader } from "@/components/site/site-header";
import {
  About,
  ContactCta,
  Faq,
  Hero,
  Highlights,
  Services,
  SiteFooter,
  Talks,
  Territory,
  WhatsappFloatingButton,
} from "@/components/site/sections";
import { StructuredData } from "@/components/site/structured-data";
import { getSiteContent } from "@/lib/content/get-site-content";

// Rede de segurança: se o Supabase falhar no build, a página se atualiza
// sozinha em até 1 hora. O normal é atualizar na hora, ao publicar.
export const revalidate = 3600;

export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <SiteHeader content={content} />
      <main>
        <Hero content={content} />
        <Highlights content={content} />
        <About content={content} />
        <Services content={content} />
        <Territory content={content} />
        <Talks content={content} />
        <Faq content={content} />
        <ContactCta content={content} />
      </main>
      <SiteFooter content={content} />
      <WhatsappFloatingButton content={content} />
      <StructuredData content={content} />
    </>
  );
}
