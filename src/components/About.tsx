import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { IconWhatsApp } from "./icons";

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src={site.about.image}
                alt={site.about.imageAlt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-gold/50 lg:block" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow mb-6">Sobre a King Eventos</p>
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Cada evento tem uma história</h2>
          <p className="mt-6 font-display text-xl italic text-gold/90 sm:text-2xl">{site.about.quote}</p>

          <div className="mt-6 space-y-4 text-cream/70">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 30)}>{paragraph}</p>
            ))}
          </div>

          <a
            href={whatsappLink(site.whatsapp.messages.quote)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold mt-9"
          >
            <IconWhatsApp className="h-4 w-4" />
            Fale com nossa equipe
          </a>
        </Reveal>
      </div>
    </section>
  );
}
