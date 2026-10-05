import type { SiteContent } from "./types";

// Conteúdo inicial do site. Quando o Supabase entrar, ele vira o valor
// padrão (e o fallback) do que estiver salvo no banco.
export const defaultContent: SiteContent = {
  profile: {
    name: "Maria Fernanda Campagnolo",
    shortName: "Maria Fernanda",
    role: "Psicóloga",
    crp: "CRP 06/213950",
  },
  contact: {
    phone: "(11) 97376-5109",
    whatsappButtonLabel: "Fale comigo no WhatsApp",
    whatsappAtendimentoMessage:
      "Olá, Fernanda! Vim pelo site e gostaria de saber mais sobre o atendimento psicológico online.",
    whatsappPalestraMessage:
      "Olá, Fernanda! Vim pelo site e gostaria de conversar sobre uma palestra ou roda de conversa.",
    instagramUrl: "https://www.instagram.com/psico.fernandacampagnolo/",
    linkedinUrl:
      "https://www.linkedin.com/in/maria-fernanda-benedito-campagnolo-417a2120b/",
    googleReviewsUrl: "",
  },
  hero: {
    tag: "Psicologia clínica • Humanista • Fenomenológica/Existencial",
    eyebrow: "Psicóloga online para adultos e idosos",
    title: "Um espaço seguro para cuidar da mente em todas as fases da vida.",
    text: "Atendimento psicológico online, com olhar especial para o envelhecimento e a terceira idade. Também ministra palestras sobre saúde mental, vínculos, prevenção e qualidade de vida.",
    primaryCta: "Agendar atendimento online",
    secondaryCta: "Convidar para palestra",
    rating: "5,0",
    ratingLabel: "no Google",
    badge: "Atuação no CRAS de Joanópolis",
    image: {
      src: "/images/fernanda-retrato.jpg",
      alt: "Retrato da psicóloga Maria Fernanda Campagnolo",
    },
  },
  highlights: [
    { title: "Atendimento", text: "Online e acolhedor" },
    { title: "Terceira idade", text: "Escuta especializada" },
    { title: "Palestras", text: "Saúde mental e prevenção" },
    { title: "Políticas públicas", text: "CRAS • SCFV • Joanópolis" },
  ],
  about: {
    tag: "Sobre a psicóloga",
    title: "Psicologia que acolhe o indivíduo e também fortalece a comunidade.",
    paragraphs: [
      "Maria Fernanda Campagnolo atua na clínica e na assistência social, articulando escuta psicológica, fortalecimento de vínculos e ações coletivas de promoção da saúde mental.",
      "No município de Joanópolis, integra o trabalho do CRAS dentro do Serviço de Convivência e Fortalecimento de Vínculos (SCFV), com ações voltadas a diferentes públicos — incluindo um olhar atento à população idosa.",
    ],
    cta: "Conhecer a trajetória profissional",
    image: {
      src: "/images/fernanda-roda-suas.jpg",
      alt: "Fernanda conversando com um grupo, vestindo a camiseta comemorativa dos 21 anos do SUAS",
    },
  },
  services: {
    title: "Atuação clínica, social e educativa",
    intro:
      "Uma presença profissional que transita entre o atendimento individual, a terceira idade, o trabalho comunitário e a formação de grupos.",
    items: [
      {
        icon: "online",
        tag: "Online",
        title: "Atendimento psicológico online",
        text: "Sessões individuais com escuta humanizada e acompanhamento personalizado, de onde você estiver.",
      },
      {
        icon: "envelhecimento",
        tag: "Terceira idade",
        title: "Psicologia e envelhecimento",
        text: "Acolhimento das mudanças, perdas, vínculos, autonomia e novos sentidos que atravessam a maturidade.",
      },
      {
        icon: "palestras",
        tag: "Palestras",
        title: "Palestras e rodas de conversa",
        text: "Conteúdos acessíveis e sensíveis para escolas, equipes, empresas, serviços públicos e grupos comunitários.",
      },
    ],
  },
  territory: {
    tag: "Joanópolis • SP",
    title: "Saúde mental também se constrói no território.",
    text: "No CRAS de Joanópolis, Fernanda participa do Serviço de Convivência e Fortalecimento de Vínculos, conduzindo atividades, grupos e ações de conscientização que aproximam a psicologia da vida cotidiana.",
    bullets: [
      "Grupos e convivência",
      "Ações com idosos",
      "Prevenção de violências",
      "Fortalecimento de vínculos",
    ],
    image: {
      src: "/images/roda-de-conversa-cras.jpg",
      alt: "Roda de conversa com participantes do Serviço de Convivência no CRAS de Joanópolis",
    },
  },
  talks: {
    tag: "Palestras, oficinas e rodas de conversa",
    title: "Temas que transformam informação em cuidado.",
    intro:
      "Conteúdos adaptados ao público, ao contexto e ao objetivo de cada instituição.",
    image: {
      src: "/images/palestra-psicologia-suas.jpg",
      alt: "Fernanda com participantes após a palestra “Psicologia no SUAS: da clínica ao território”",
    },
    topics: [
      {
        title: "Saúde mental",
        text: "Conscientização e cuidado no cotidiano.",
      },
      {
        title: "Junho Violeta",
        text: "Prevenção da violência contra a pessoa idosa.",
      },
      {
        title: "Fortalecimento de vínculos",
        text: "Família, comunidade, pertencimento e proteção.",
      },
      {
        title: "Envelhecimento saudável",
        text: "Autonomia, saúde emocional e qualidade de vida.",
      },
    ],
  },
  faq: {
    tag: "Dúvidas frequentes",
    title: "Perguntas comuns antes da primeira conversa.",
    items: [
      {
        question: "Como funciona a terapia online?",
        answer:
          "As sessões acontecem por videochamada, em um horário combinado, de onde você estiver. Basta um celular ou computador com internet e um lugar reservado, onde você se sinta à vontade para conversar.",
      },
      {
        question: "A terapia online funciona tão bem quanto a presencial?",
        answer:
          "Para a maioria das pessoas, sim. O atendimento psicológico online é regulamentado pelo Conselho Federal de Psicologia, e a escuta, o vínculo e o sigilo são os mesmos do consultório.",
      },
      {
        question: "Você atende pessoas idosas?",
        answer:
          "Sim. O envelhecimento e a terceira idade são um dos focos do meu trabalho: mudanças, perdas, vínculos, autonomia e novos sentidos que chegam com a maturidade.",
      },
      {
        question: "O atendimento é sigiloso?",
        answer:
          "Sim. O sigilo é um dever ético da psicóloga, previsto no Código de Ética Profissional do Psicólogo, e vale também para os atendimentos online.",
      },
      {
        question: "Como agendar a primeira conversa?",
        answer:
          "Toque em qualquer botão de agendamento ou no ícone do WhatsApp. A mensagem já vai pronta: é só enviar e combinamos juntos o melhor horário.",
      },
      {
        question: "Você faz palestras para escolas, empresas e serviços públicos?",
        answer:
          "Sim. Faço palestras, oficinas e rodas de conversa sobre saúde mental, Junho Violeta, fortalecimento de vínculos e envelhecimento saudável, adaptadas ao público e ao objetivo de cada instituição.",
      },
    ],
  },
  contactCta: {
    title: "Vamos conversar?",
    text: "Fernanda está disponível para atendimentos psicológicos online e para convites de palestras, rodas de conversa e ações institucionais.",
    primaryCta: "Agendar atendimento",
    secondaryCta: "Solicitar palestra",
  },
  footer: {
    lines: ["Atendimento online • Brasil", "Palestras e ações institucionais"],
  },
};
