import type { SiteContent } from "./types";

// Descreve o que aparece no painel /admin: nomes amigáveis, ajudas e limites.
// O mesmo esquema valida o conteúdo no servidor antes de publicar.

type BaseField = {
  key: string;
  label: string;
  help?: string;
};

export type TextField = BaseField & {
  kind: "text";
  max: number;
  multiline?: boolean;
  optional?: boolean;
};

export type UrlField = BaseField & {
  kind: "url";
  optional?: boolean;
};

export type PhoneField = BaseField & {
  kind: "phone";
};

export type ImageFieldSpec = BaseField & {
  kind: "image";
  aspect: string; // proporção mostrada na prévia do recorte, ex.: "4/5"
};

export type StringListField = BaseField & {
  kind: "stringList";
  itemLabel: string;
  max: number;
  multiline?: boolean;
  minItems: number;
  maxItems: number;
};

export type ObjectListField = BaseField & {
  kind: "objectList";
  itemLabel: string;
  fields: TextField[];
  minItems: number;
  maxItems: number;
  // Itens com partes fixas no código (ex.: ícone) não podem ser adicionados/removidos.
  fixedLength?: boolean;
};

export type Field =
  | TextField
  | UrlField
  | PhoneField
  | ImageFieldSpec
  | StringListField
  | ObjectListField;

export type SectionSpec = {
  key: keyof SiteContent;
  title: string;
  description: string;
  fields: Field[];
};

export const contentSchema: SectionSpec[] = [
  {
    key: "hero",
    title: "Topo da página",
    description: "A primeira coisa que as pessoas veem: título, foto e botões principais.",
    fields: [
      { kind: "image", key: "image", label: "Foto principal", aspect: "4/5" },
      { kind: "text", key: "tag", label: "Etiqueta acima do título", max: 70 },
      {
        kind: "text",
        key: "eyebrow",
        label: "Frase curta acima do título",
        max: 60,
        help: "Ajuda o Google a entender o que você faz. Ex.: “Psicóloga online para adultos e idosos”.",
      },
      { kind: "text", key: "title", label: "Título principal", max: 80 },
      { kind: "text", key: "text", label: "Texto de apresentação", max: 280, multiline: true },
      { kind: "text", key: "primaryCta", label: "Botão verde (agendar)", max: 32 },
      { kind: "text", key: "secondaryCta", label: "Botão branco (palestra)", max: 32 },
      { kind: "text", key: "rating", label: "Nota no Google", max: 4, help: "Ex.: 5,0" },
      { kind: "text", key: "ratingLabel", label: "Texto ao lado da nota", max: 20 },
      { kind: "text", key: "badge", label: "Destaque ao lado da nota", max: 45 },
    ],
  },
  {
    key: "highlights",
    title: "Faixa verde",
    description: "Os quatro destaques logo abaixo do topo.",
    fields: [
      {
        kind: "objectList",
        key: "",
        label: "Destaques",
        itemLabel: "Destaque",
        minItems: 4,
        maxItems: 4,
        fixedLength: true,
        fields: [
          { kind: "text", key: "title", label: "Título", max: 24 },
          { kind: "text", key: "text", label: "Texto", max: 32 },
        ],
      },
    ],
  },
  {
    key: "about",
    title: "Sobre mim",
    description: "Sua apresentação e trajetória.",
    fields: [
      { kind: "image", key: "image", label: "Foto", aspect: "4/5" },
      { kind: "text", key: "tag", label: "Etiqueta", max: 40 },
      { kind: "text", key: "title", label: "Título", max: 90 },
      {
        kind: "stringList",
        key: "paragraphs",
        label: "Parágrafos",
        itemLabel: "Parágrafo",
        max: 400,
        multiline: true,
        minItems: 1,
        maxItems: 4,
      },
      {
        kind: "text",
        key: "cta",
        label: "Botão do LinkedIn",
        max: 40,
        help: "O botão leva para o link do LinkedIn cadastrado em “Contato e redes”.",
      },
    ],
  },
  {
    key: "services",
    title: "Atendimentos",
    description: "Os três cartões de atuação.",
    fields: [
      { kind: "text", key: "title", label: "Título", max: 60 },
      { kind: "text", key: "intro", label: "Texto de introdução", max: 220, multiline: true },
      {
        kind: "objectList",
        key: "items",
        label: "Cartões",
        itemLabel: "Cartão",
        minItems: 3,
        maxItems: 3,
        fixedLength: true,
        fields: [
          { kind: "text", key: "tag", label: "Etiqueta", max: 20 },
          { kind: "text", key: "title", label: "Título", max: 45 },
          { kind: "text", key: "text", label: "Texto", max: 160, multiline: true },
        ],
      },
    ],
  },
  {
    key: "territory",
    title: "Atuação pública (CRAS)",
    description: "O trabalho no CRAS de Joanópolis.",
    fields: [
      { kind: "image", key: "image", label: "Foto", aspect: "4/3" },
      { kind: "text", key: "tag", label: "Etiqueta", max: 40 },
      { kind: "text", key: "title", label: "Título", max: 80 },
      { kind: "text", key: "text", label: "Texto", max: 400, multiline: true },
      {
        kind: "stringList",
        key: "bullets",
        label: "Tópicos",
        itemLabel: "Tópico",
        max: 40,
        minItems: 1,
        maxItems: 8,
      },
    ],
  },
  {
    key: "talks",
    title: "Palestras",
    description: "Temas de palestras, oficinas e rodas de conversa.",
    fields: [
      { kind: "image", key: "image", label: "Foto", aspect: "4/3" },
      { kind: "text", key: "tag", label: "Etiqueta", max: 50 },
      { kind: "text", key: "title", label: "Título", max: 80 },
      { kind: "text", key: "intro", label: "Texto de introdução", max: 200, multiline: true },
      {
        kind: "objectList",
        key: "topics",
        label: "Temas",
        itemLabel: "Tema",
        minItems: 1,
        maxItems: 8,
        fields: [
          { kind: "text", key: "title", label: "Nome do tema", max: 40 },
          { kind: "text", key: "text", label: "Descrição curta", max: 90 },
        ],
      },
    ],
  },
  {
    key: "faq",
    title: "Dúvidas frequentes",
    description: "Perguntas e respostas. Ajudam quem está decidindo e também aparecem no Google.",
    fields: [
      { kind: "text", key: "tag", label: "Etiqueta", max: 40 },
      { kind: "text", key: "title", label: "Título", max: 80 },
      {
        kind: "objectList",
        key: "items",
        label: "Perguntas",
        itemLabel: "Pergunta",
        minItems: 1,
        maxItems: 10,
        fields: [
          { kind: "text", key: "question", label: "Pergunta", max: 90 },
          { kind: "text", key: "answer", label: "Resposta", max: 400, multiline: true },
        ],
      },
    ],
  },
  {
    key: "contactCta",
    title: "Faixa “Vamos conversar?”",
    description: "O convite roxo no fim da página.",
    fields: [
      { kind: "text", key: "title", label: "Título", max: 40 },
      { kind: "text", key: "text", label: "Texto", max: 220, multiline: true },
      { kind: "text", key: "primaryCta", label: "Botão de atendimento", max: 32 },
      { kind: "text", key: "secondaryCta", label: "Botão de palestra", max: 32 },
    ],
  },
  {
    key: "contact",
    title: "Contato e redes",
    description: "WhatsApp, mensagens prontas e links das redes.",
    fields: [
      {
        kind: "phone",
        key: "phone",
        label: "WhatsApp / telefone",
        help: "Com DDD. Ex.: (11) 97376-5109",
      },
      { kind: "text", key: "whatsappButtonLabel", label: "Texto do botão flutuante do WhatsApp", max: 32 },
      {
        kind: "text",
        key: "whatsappAtendimentoMessage",
        label: "Mensagem pronta: atendimento",
        max: 250,
        multiline: true,
        help: "Texto que já aparece escrito quando a pessoa abre o WhatsApp para agendar.",
      },
      {
        kind: "text",
        key: "whatsappPalestraMessage",
        label: "Mensagem pronta: palestra",
        max: 250,
        multiline: true,
        help: "Texto que já aparece escrito quando a pessoa abre o WhatsApp para convidar para palestra.",
      },
      { kind: "url", key: "instagramUrl", label: "Link do Instagram", optional: true },
      { kind: "url", key: "linkedinUrl", label: "Link do LinkedIn", optional: true },
      {
        kind: "url",
        key: "googleReviewsUrl",
        label: "Link das avaliações no Google",
        optional: true,
        help: "Se preenchido, a nota no topo vira um link para as avaliações.",
      },
    ],
  },
  {
    key: "profile",
    title: "Nome e registro",
    description: "Como seu nome aparece no topo e no rodapé.",
    fields: [
      { kind: "text", key: "shortName", label: "Nome curto (topo)", max: 30 },
      { kind: "text", key: "name", label: "Nome completo (rodapé)", max: 60 },
      { kind: "text", key: "role", label: "Profissão", max: 30 },
      { kind: "text", key: "crp", label: "CRP", max: 20 },
    ],
  },
  {
    key: "footer",
    title: "Rodapé",
    description: "As linhas de texto do rodapé.",
    fields: [
      {
        kind: "stringList",
        key: "lines",
        label: "Linhas",
        itemLabel: "Linha",
        max: 50,
        minItems: 0,
        maxItems: 4,
      },
    ],
  },
];
