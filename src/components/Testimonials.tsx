import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/content/site";
import { IconQuote } from "./icons";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que nossos clientes dizem"
          description="Conteúdo demonstrativo. Os depoimentos abaixo são exemplos e devem ser substituídos por avaliações reais de clientes da King Eventos."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {site.testimonials.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 80}>
              <figure className="flex h-full flex-col border border-ink-line bg-ink-soft p-8">
                <IconQuote className="h-8 w-8 text-gold/50" />
                <blockquote className="mt-4 flex-1 text-cream/75">{item.text}</blockquote>
                <figcaption className="mt-6 border-t border-ink-line pt-4">
                  <span className="block font-display text-lg text-cream">{item.name}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-gold">{item.event}</span>
                  <span className="mt-2 block text-[10px] uppercase tracking-[0.2em] text-cream/40">
                    Exemplo demonstrativo
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
