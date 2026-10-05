import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { businessName, seo, siteUrl } from "@/lib/seo";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${businessName}`,
  },
  description: seo.description,
  applicationName: businessName,
  authors: [{ name: "Maria Fernanda Campagnolo" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: businessName,
    title: seo.shareTitle,
    description: seo.shareDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.shareTitle,
    description: seo.shareDescription,
  },
  formatDetection: { telephone: false },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

export const viewport: Viewport = {
  themeColor: "#3b5a4a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      {/* Extensões do navegador (ex.: ColorZilla) adicionam atributos no <body>
          antes do React carregar; isso evita um falso alerta de hidratação. */}
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
