import { AdminHeader } from "@/components/admin/admin-header";
import { PasswordForm } from "@/components/admin/password-form";
import { createClient } from "@/lib/supabase/server";

export default async function PasswordPage() {
  const supabase = await createClient();
  const { data: claims } = await supabase.auth.getClaims();

  return (
    <>
      <AdminHeader email={claims?.claims.email as string | undefined} current="/admin/senha" />
      <main className="mx-auto max-w-md px-4 py-8">
        <h1 className="font-serif text-3xl font-medium">Trocar senha</h1>
        <p className="mt-1 text-sm text-muted">Use pelo menos 8 caracteres.</p>
        <div className="mt-6 rounded-3xl border border-line bg-ivory p-6">
          <PasswordForm />
        </div>
      </main>
    </>
  );
}
