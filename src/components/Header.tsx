"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { IconMenu, IconClose, IconWhatsApp } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const quote = whatsappLink(site.whatsapp.messages.quote);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-smooth ${
        scrolled || open ? "border-b border-ink-line bg-ink/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a
          href="#inicio"
          onClick={() => setOpen(false)}
          className="font-display text-xl font-semibold tracking-[0.22em] text-cream"
        >
          KING <span className="gold-text">EVENTOS</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-cream/75 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={quote}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold hidden lg:inline-flex"
        >
          <IconWhatsApp className="h-4 w-4" />
          Solicite um orçamento
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream lg:hidden"
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-ink-line bg-ink/98 backdrop-blur transition-[max-height] duration-500 ease-smooth lg:hidden ${
          open ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <nav className="container-x flex flex-col py-4">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink-line/60 py-4 text-base tracking-wide text-cream/85 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href={quote}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-gold mt-5"
          >
            <IconWhatsApp className="h-4 w-4" />
            Solicite um orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
