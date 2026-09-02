import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/content/site";
import { ServiceIcon } from "./icons";

export default function Differentials() {
  return (
    <section className="border-y border-ink-line bg-ink-soft py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Diferenciais" title="Por que escolher a King Eventos?" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.differentials.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 70}>
              <div className="h-full border border-ink-line bg-ink p-7 transition-colors duration-300 hover:border-gold/50">
                <ServiceIcon name={item.icon} className="h-6 w-6 text-gold" />
                <h3 className="mt-5 text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
