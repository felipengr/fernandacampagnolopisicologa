import type { ComponentProps, ReactNode } from "react";

export const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-forest focus:ring-2 focus:ring-forest/15 disabled:bg-sand/50";

export function Label({ children, ...props }: ComponentProps<"label">) {
  return (
    <label className="mb-1.5 block text-sm font-medium text-ink" {...props}>
      {children}
    </label>
  );
}

export function Help({ children }: { children: ReactNode }) {
  return <p className="mt-1.5 text-xs leading-relaxed text-muted">{children}</p>;
}

const buttonVariants = {
  primary: "bg-forest text-white hover:bg-forest-dark disabled:bg-forest/40",
  outline: "border border-line bg-white text-ink hover:border-forest disabled:opacity-50",
  ghost: "text-muted hover:bg-sand hover:text-ink disabled:opacity-40",
  danger: "text-red-700 hover:bg-red-50 disabled:opacity-40",
} as const;

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: keyof typeof buttonVariants }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors disabled:cursor-not-allowed ${buttonVariants[variant]} ${className}`}
      {...props}
    />
  );
}

export function Notice({ tone, children }: { tone: "error" | "success" | "info"; children: ReactNode }) {
  const tones = {
    error: "border-red-200 bg-red-50 text-red-800",
    success: "border-forest/20 bg-forest/10 text-forest-dark",
    info: "border-line bg-ivory text-ink",
  };
  return (
    <div role={tone === "error" ? "alert" : "status"} className={`rounded-2xl border px-4 py-3 text-sm ${tones[tone]}`}>
      {children}
    </div>
  );
}
