import { AdminHeader } from "@/components/admin/admin-header";
import { Editor } from "@/components/admin/editor-loader";
import { Notice } from "@/components/admin/form-ui";
import { defaultContent } from "@/lib/content/default-content";
import { getPublishedVersion } from "@/lib/content/get-site-content";
import { createClient } from "@/lib/supabase/server";

export default async function AdminPage() {
  const supabase = await createClient();
  const [{ data: claims }, { data: isAdmin }, version] = await Promise.all([
    supabase.auth.getClaims(),
    supabase.rpc("is_admin"),
    getPublishedVersion(),
  ]);
  const email = claims?.claims.email as string | undefined;

  return (
    <>
      <AdminHeader email={email} current="/admin" />
      {isAdmin ? (
        <Editor initialContent={version?.content ?? defaultContent} publishedAt={version?.createdAt ?? null} />
      ) : (
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Notice tone="error">
            Este e-mail ainda não tem permissão para editar o site. Fale com o Felipe para liberar o acesso.
          </Notice>
        </div>
      )}
    </>
  );
}
