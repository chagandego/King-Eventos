"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { IconWhatsApp } from "./icons";

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(site.whatsapp.messages.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a King Eventos no WhatsApp"
      className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-sm font-medium text-ink shadow-[0_14px_34px_-10px_rgba(37,211,102,0.6)] transition-all duration-500 ease-smooth hover:pr-5 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/25">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/25" />
        <IconWhatsApp className="h-5 w-5" />
      </span>
      <span className="hidden sm:block">Fale conosco</span>
    </a>
  );
}
