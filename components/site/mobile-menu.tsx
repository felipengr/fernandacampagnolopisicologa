"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import type { NavItem } from "./site-header";

export function MobileMenu({ items, ctaLabel, ctaHref }: { items: NavItem[]; ctaLabel: string; ctaHref: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="-mr-2 rounded-full p-2 text-ink hover:bg-sand"
      >
        {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
      </button>

      {open && (
        <nav
          id="menu-mobile"
          className="absolute inset-x-0 top-full border-b border-line bg-cream px-5 pt-2 pb-6 shadow-sm"
        >
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3.5 text-base text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 flex justify-center rounded-full bg-forest px-5 py-3 text-sm font-medium text-white"
          >
            {ctaLabel}
          </a>
        </nav>
      )}
    </div>
  );
}
