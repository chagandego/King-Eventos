import Image from "next/image";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { IconWhatsApp, IconArrowRight } from "./icons";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen min-h-[100svh] items-center overflow-hidden"
    >
      <Image
        src={site.hero.image}
        alt={site.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/70 to-ink" />
      <div className="absolute inset-0 bg-ink/35" />

      <div className="container-x relative z-10 py-32">
        <div className="max-w-3xl">
          <p className="eyebrow mb-7 animate-[fade-up_0.8s_ease-out_both]">{site.hero.eyebrow}</p>

          <h1 className="animate-[fade-up_0.8s_ease-out_0.1s_both] text-4xl font-semibold leading-[1.05] text-cream sm:text-6xl lg:text-[4.5rem]">
            {site.hero.title}
          </h1>

          <p className="mt-7 max-w-xl animate-[fade-up_0.8s_ease-out_0.2s_both] text-lg leading-relaxed text-cream/75">
            {site.hero.subtitle}
          </p>

          <div className="mt-10 flex animate-[fade-up_0.8s_ease-out_0.3s_both] flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink(site.whatsapp.messages.quote)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <IconWhatsApp className="h-4 w-4" />
              Solicite um orçamento
            </a>
            <a href="#eventos" className="btn btn-outline">
              Conheça nossos eventos
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-12 flex animate-[fade-up_0.8s_ease-out_0.4s_both] flex-wrap items-center gap-x-5 gap-y-3 text-xs uppercase tracking-[0.24em] text-cream/55">
            {site.hero.badges.map((badge, i) => (
              <li key={badge} className="flex items-center gap-5">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-gold" />}
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/40 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Role</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  );
}
