import { AdminHeader } from "@/components/admin/admin-header";
import { Notice } from "@/components/admin/form-ui";
import { RestoreButton } from "@/components/admin/restore-button";
import { createClient } from "@/lib/supabase/server";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("pt-BR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  });

export default async function HistoryPage() {
  const supabase = await createClient();
  const [{ data: claims }, { data: versions, error }] = await Promise.all([
    supabase.auth.getClaims(),
    supabase
      .from("site_versions")
      .select("id, note, created_at, created_by_email")
      .order("id", { ascending: false })
      .limit(30),
  ]);

  return (
    <>
      <AdminHeader email={claims?.claims.email as string | undefined} current="/admin/historico" />
      <main className="mx-auto max-w-3xl space-y-4 px-4 py-8">
        <div className="px-1">
          <h1 className="font-serif text-3xl font-medium">Histórico</h1>
          <p className="mt-1 text-sm text-muted">
            Cada vez que você publica, uma versão fica guardada aqui. Se algo der errado, é só voltar para uma
            versão anterior.
          </p>
        </div>

        {error && <Notice tone="error">Não foi possível carregar o histórico.</Notice>}
        {versions?.length === 0 && <Notice tone="info">Nada publicado ainda.</Notice>}

        <ol className="space-y-3">
          {versions?.map((version, i) => (
            <li
              key={version.id}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-ivory p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium">
                  {formatDate(version.created_at)}
                  {i === 0 && (
                    <span className="ml-2 rounded-full bg-forest/10 px-2 py-0.5 text-xs font-semibold text-forest">
                      no ar agora
                    </span>
                  )}
                </p>
                <p className="text-xs text-muted">
                  {version.note ?? "Publicação"}
                  {version.created_by_email ? ` · ${version.created_by_email}` : ""}
                </p>
              </div>
              {i > 0 && <RestoreButton versionId={version.id} />}
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}
