import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/content/site";
import { ServiceIcon } from "./icons";

export default function Services() {
  return (
    <section id="servicos" className="border-y border-ink-line bg-ink-soft py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nossos Serviços"
          title="Soluções para cada tipo de celebração"
          description="Organização completa, do planejamento à execução. Os serviços abaixo podem ser adaptados conforme a necessidade de cada cliente."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 80}>
              <article className="group h-full bg-ink-soft p-8 transition-colors duration-300 hover:bg-ink-muted">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-300 group-hover:border-gold">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-cream/40">
          Lista editável em <code className="text-cream/60">src/content/site.ts</code>.
        </p>
      </div>
    </section>
  );
}
