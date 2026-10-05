import Image from "next/image";
import type { ReactNode } from "react";
import type { ImageField } from "@/lib/content/types";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Tag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block rounded-full bg-sand px-3 py-1 text-xs font-medium tracking-wide text-ink/75 ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-serif text-3xl leading-tight font-medium text-ink sm:text-4xl ${className}`}>
      {children}
    </h2>
  );
}

const buttonStyles = {
  primary: "bg-forest text-white hover:bg-forest-dark",
  outline: "border border-ink/25 bg-white text-ink hover:border-forest hover:text-forest",
  light: "bg-white text-ink hover:bg-cream",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

// Foto editável da seção. Sem foto, mostra um painel neutro no lugar
// para o layout nunca ficar com um buraco.
export function SectionImage({
  image,
  sizes,
  className = "",
  preload = false,
  objectPosition = "center",
  fallbackText,
}: {
  image: ImageField;
  sizes: string;
  className?: string;
  preload?: boolean;
  objectPosition?: string;
  fallbackText?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] bg-sand ${className}`}>
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 bg-linear-to-br from-lilac-soft via-cream to-sand p-8 text-center">
          <span className="font-serif text-6xl font-medium text-plum/70">MF</span>
          {fallbackText && (
            <span className="max-w-56 text-sm leading-relaxed text-muted">{fallbackText}</span>
          )}
        </div>
      )}
    </div>
  );
}
