"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Work } from "@/lib/content";

export function Gallery({ works }: { works: Work[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const go = useCallback(
    (dir: number) =>
      setIndex((i) => (i === null ? i : (i + dir + works.length) % works.length)),
    [works.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  const active = index !== null ? works[index] : null;

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 sm:gap-6 lg:columns-3">
        {works.map((work, i) => (
          <button
            key={work.src}
            type="button"
            onClick={() => setIndex(i)}
            className="photo group mb-4 block w-full sm:mb-6"
            aria-label={`Zvětšit: ${work.title}`}
          >
            <Image
              src={work.src}
              width={work.w}
              height={work.h}
              alt={`${work.title} — ${work.series}, ${work.year}`}
              className="h-auto w-full"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <span className="flex items-baseline justify-between px-1 pt-2 text-xs text-ink-faint opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="uppercase tracking-[0.14em]">{work.title}</span>
              <span>{work.year}</span>
            </span>
          </button>
        ))}
      </div>

      {open && active && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[100] flex items-center justify-center bg-noir/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 text-sm uppercase tracking-[0.16em] text-paper/70 transition-colors hover:text-paper"
          >
            Zavřít
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 px-4 py-6 text-2xl text-paper/60 transition-colors hover:text-paper sm:left-8"
            aria-label="Předchozí"
          >
            ‹
          </button>

          <figure
            className="max-h-[86vh] max-w-[92vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              width={active.w}
              height={active.h}
              alt={`${active.title} — ${active.series}, ${active.year}`}
              className="mx-auto max-h-[80vh] w-auto object-contain"
              priority
            />
            <figcaption className="mt-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.16em] text-paper/70">
              <span>{active.title}</span>
              <span className="text-paper/30">/</span>
              <span>{active.series}</span>
              <span className="text-paper/30">/</span>
              <span>{active.year}</span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-6 text-2xl text-paper/60 transition-colors hover:text-paper sm:right-8"
            aria-label="Další"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
