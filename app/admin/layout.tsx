import type { Metadata } from "next";

// O painel depende da sessão de quem está logado: nunca pré-renderizar.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Painel do site",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return <div className="min-h-screen bg-cream text-ink">{children}</div>;
}
