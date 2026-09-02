import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { IconWhatsApp } from "./icons";

export default function QuoteCTA() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <Image
        src={site.quoteCta.image}
        alt=""
        aria-hidden="true"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/85" />

      <Reveal className="container-x relative z-10 text-center">
        <p className="eyebrow mb-6 justify-center">Orçamento</p>
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold sm:text-5xl">
          Seu próximo evento começa aqui
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-cream/70">
          Conte para a King Eventos o que você está planejando e descubra como podemos ajudar a
          transformar sua ideia em uma experiência inesquecível.
        </p>
        <a
          href={whatsappLink(site.whatsapp.messages.quote)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold mx-auto mt-10 px-9 py-4 text-base"
        >
          <IconWhatsApp className="h-5 w-5" />
          Solicitar orçamento pelo WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
