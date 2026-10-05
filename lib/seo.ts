// Endereço público do site, usado em links absolutos (Google, WhatsApp, sitemap).
// Fica sempre no domínio oficial, inclusive em testes, para o Google nunca
// indexar endereços provisórios. NEXT_PUBLIC_SITE_URL só serve para trocar o domínio.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://fernandacampagnolo.com.br").replace(/\/+$/, "");

// Mesmo nome do Perfil da Empresa no Google, para o Google ligar os dois.
export const businessName = "Psicóloga Maria Fernanda Campagnolo";

export const seo = {
  title: "Psicóloga Online | Maria Fernanda Campagnolo – CRP 06/213950",
  description:
    "Psicóloga online com abordagem humanista e fenomenológica-existencial. Terapia para adultos e idosos, de onde você estiver. Agende pelo WhatsApp.",
  shareTitle: "Maria Fernanda Campagnolo · Psicóloga Online",
  shareDescription:
    "Terapia online para adultos e idosos e palestras sobre saúde mental. Um espaço seguro para cuidar da mente em todas as fases da vida.",
};
