import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { IconWhatsApp, IconInstagram } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-soft">
      <div className="container-x grid gap-10 py-16 md:grid-cols-3">
        <div>
          <span className="font-display text-xl font-semibold tracking-[0.22em] text-cream">
            KING <span className="gold-text">EVENTOS</span>
          </span>
          <p className="mt-3 text-sm text-cream/55">Organização de eventos</p>
          <p className="mt-4 max-w-xs text-sm text-cream/55">
            Planejamento e execução de casamentos, formaturas, aniversários e eventos corporativos em
            Sorocaba e região.
          </p>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-cream/45">Navegação</span>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-cream/65 transition-colors hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-cream/45">Contato</span>
          <p className="mt-4 text-sm text-cream/65">{site.address.full}</p>
          <p className="mt-2 text-sm">
            <a href={site.phone.href} className="text-cream/65 transition-colors hover:text-gold">
              {site.phone.display}
            </a>
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={whatsappLink(site.whatsapp.messages.quote)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <IconWhatsApp className="h-4 w-4" />
              WhatsApp
            </a>
            {site.social.instagram ? (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da King Eventos"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold"
              >
                <IconInstagram className="h-5 w-5" />
              </a>
            ) : (
              <span className="text-xs text-cream/35">Instagram em breve</span>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream/40 sm:flex-row">
          <p>© {site.year} King Eventos. Todos os direitos reservados.</p>
          <p>Sorocaba — SP</p>
        </div>
      </div>
    </footer>
  );
}
