"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Work } from "@/lib/content";

export function Gallery({ works }: { works: Work[] }) {
  const categories = useMemo(
    () => ["Vše", ...Array.from(new Set(works.map((w) => w.series)))],
    [works]
  );
  const [filter, setFilter] = useState("Vše");
  const filtered = useMemo(
    () => (filter === "Vše" ? works : works.filter((w) => w.series === filter)),
    [works, filter]
  );

  const [index, setIndex] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const open = index !== null;

  const close = useCallback(() => {
    setIndex(null);
    setZoomed(false);
  }, []);

  const go = useCallback(
    (dir: number) => {
      setZoomed(false);
      setIndex((i) =>
        i === null ? i : (i + dir + filtered.length) % filtered.length
      );
    },
    [filtered.length]
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

  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const selectFilter = (cat: string) => {
    setFilter(cat);
    setIndex(null);
    setZoomed(false);
  };

  const active = index !== null ? filtered[index] : null;

  return (
    <>
      {/* filter bar */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => selectFilter(cat)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors ${
              filter === cat
                ? "border-ink bg-ink text-paper"
                : "border-line text-ink-soft hover:border-ink hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 sm:gap-6 lg:columns-3">
        {filtered.map((work, i) => (
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
          className="fixed inset-0 z-[100] flex flex-col bg-noir/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* top bar */}
          <div
            className="flex items-center justify-between px-5 py-4 text-xs uppercase tracking-[0.16em] text-paper/70 sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <span>
              {index! + 1} / {filtered.length}
            </span>
            <button
              type="button"
              onClick={close}
              className="transition-colors hover:text-paper"
            >
              Zavřít ✕
            </button>
          </div>

          {/* stage */}
          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 px-3 py-6 text-3xl text-paper/60 transition-colors hover:text-paper sm:left-6"
              aria-label="Předchozí"
            >
              ‹
            </button>

            <figure
              className="flex h-full max-h-full items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                width={active.w}
                height={active.h}
                alt={`${active.title} — ${active.series}, ${active.year}`}
                priority
                onClick={() => setZoomed((z) => !z)}
                className={`max-h-[68vh] w-auto object-contain transition-transform duration-500 ${
                  zoomed ? "scale-[1.7] cursor-zoom-out" : "cursor-zoom-in"
                }`}
              />
            </figure>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 px-3 py-6 text-3xl text-paper/60 transition-colors hover:text-paper sm:right-6"
              aria-label="Další"
            >
              ›
            </button>
          </div>

          {/* caption + thumbnails */}
          <div
            className="px-5 pb-5 pt-2 sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <figcaption className="mb-3 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.16em] text-paper/70">
              <span>{active.title}</span>
              <span className="text-paper/30">/</span>
              <span>{active.series}</span>
              <span className="text-paper/30">/</span>
              <span>{active.year}</span>
            </figcaption>
            <div className="mx-auto flex max-w-full justify-start gap-2 overflow-x-auto pb-1 sm:justify-center">
              {filtered.map((w, i) => (
                <button
                  key={w.src}
                  type="button"
                  onClick={() => {
                    setZoomed(false);
                    setIndex(i);
                  }}
                  className={`relative h-14 w-14 shrink-0 overflow-hidden transition-opacity ${
                    i === index ? "opacity-100 ring-1 ring-paper" : "opacity-40 hover:opacity-80"
                  }`}
                  aria-label={w.title}
                >
                  <Image src={w.src} alt="" fill sizes="56px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
