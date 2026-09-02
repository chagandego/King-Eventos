"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { site } from "@/content/site";
import { IconArrowRight, IconClose } from "./icons";

export default function Gallery() {
  const images = site.gallery;
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, prev, next]);

  return (
    <section id="galeria" className="border-t border-ink-line bg-ink-soft py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Galeria"
          title="Momentos & ambientações"
          description="Imagens ilustrativas. Esta galeria está pronta para receber as fotos reais dos eventos da King Eventos."
        />

        <div className="mt-14 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[210px] lg:grid-cols-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ampliar imagem: ${img.alt}`}
              className={`group relative overflow-hidden rounded-sm bg-ink-muted ${
                img.wide ? "col-span-2" : ""
              } ${img.tall ? "row-span-2" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-ink/10 transition-colors duration-300 group-hover:bg-ink/40" />
            </button>
          ))}
        </div>
      </div>

      {isOpen && index !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagem"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <IconClose className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Imagem anterior"
            className="absolute left-4 inline-flex h-11 w-11 rotate-180 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold hover:text-gold sm:left-8"
          >
            <IconArrowRight className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Próxima imagem"
            className="absolute right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold hover:text-gold sm:right-8"
          >
            <IconArrowRight className="h-5 w-5" />
          </button>

          <figure
            className="relative mx-auto w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={images[index].src}
                alt={images[index].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-cream/60">
              {images[index].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
