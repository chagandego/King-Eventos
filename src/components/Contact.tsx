import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { IconMapPin, IconPhone, IconWhatsApp } from "./icons";

export default function Contact() {
  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contato"
          title="Entre em contato"
          description="Fale com a King Eventos pelo WhatsApp, pelo telefone ou envie sua solicitação pelo formulário."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <IconMapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-cream/45">Endereço</span>
                  <p className="mt-1 text-cream/85">{site.address.full}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <IconPhone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-cream/45">Telefone</span>
                  <p className="mt-1">
                    <a href={site.phone.href} className="text-cream/85 transition-colors hover:text-gold">
                      {site.phone.display}
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <IconWhatsApp className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-cream/45">WhatsApp</span>
                  <div className="mt-2">
                    <a
                      href={whatsappLink(site.whatsapp.messages.quote)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold"
                    >
                      <IconWhatsApp className="h-4 w-4" />
                      Conversar agora
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-sm border border-ink-line">
              <iframe
                title="Localização da King Eventos no Google Maps"
                src={site.maps.embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
