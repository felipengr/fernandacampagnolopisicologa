import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured, supabaseKey, supabaseUrl } from "@/lib/supabase/env";
import { defaultContent } from "./default-content";
import type { SiteContent } from "./types";
import { normalizeContent } from "./validate";

export type PublishedVersion = {
  id: number;
  content: SiteContent;
  createdAt: string;
};

// Leitura pública (sem cookies), para a página continuar estática.
// Ao publicar, o painel chama revalidatePath("/") e a página é regerada.
export async function getPublishedVersion(): Promise<PublishedVersion | null> {
  if (!isSupabaseConfigured) return null;

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data, error } = await supabase
    .from("site_versions")
    .select("id, content, created_at")
    .order("id", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("Erro ao ler o conteúdo publicado:", error.message);
    return null;
  }
  if (!data) return null;

  return { id: data.id, content: normalizeContent(data.content), createdAt: data.created_at };
}

export async function getSiteContent(): Promise<SiteContent> {
  const version = await getPublishedVersion();
  return version?.content ?? defaultContent;
}
