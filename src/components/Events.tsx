"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { site } from "@/content/site";

export default function Events() {
  const [active, setActive] = useState<string>("Todos");

  const items =
    active === "Todos"
      ? site.events.items
      : site.events.items.filter((event) => event.category === active);

  return (
    <section id="eventos" className="py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Portfólio"
          title="Eventos que criamos"
          description="Uma amostra dos formatos que organizamos. As imagens abaixo são ilustrativas e podem ser substituídas pelas fotos reais da King Eventos."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {site.events.categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.16em] transition-colors duration-300 ${
                active === category
                  ? "border-gold bg-gold text-ink"
                  : "border-cream/20 text-cream/60 hover:border-gold/60 hover:text-cream"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-ink-muted"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold">
                  {item.category}
                </span>
                <p className="mt-1 font-display text-xl text-cream">{item.title}</p>
                <p className="mt-1 text-xs text-cream/70">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
