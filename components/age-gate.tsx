"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const KEY = "rt-age-ok";

export function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch {
      stored = null;
    }
    if (stored === "1") return;
    const raf = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  const accept = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  const leave = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[200] flex items-center justify-center bg-paper px-6"
      role="dialog"
      aria-modal="true"
      aria-label="Ověření věku"
    >
      <div className="max-w-lg text-center">
        <p className="eyebrow">Upozornění</p>
        <h2 className="display mt-6 text-4xl sm:text-5xl">
          Vstupujete do galerie
          <br />
          umělecké aktové fotografie
        </h2>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-ink-soft">
          Web {site.name} obsahuje uměleckou portrétní a aktovou tvorbu.
          Potvrďte prosím, že je vám 18 let nebo více.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={accept}
            className="rounded-full bg-ink px-8 py-3.5 text-sm uppercase tracking-[0.14em] text-paper transition-colors hover:bg-noir"
          >
            Je mi 18 a více — vstoupit
          </button>
          <button
            type="button"
            onClick={leave}
            className="text-sm uppercase tracking-[0.14em] text-ink-soft link-underline hover:text-ink"
          >
            Odejít
          </button>
        </div>
        <p className="mt-8 text-xs text-ink-faint">{site.draftNote}</p>
      </div>
    </div>
  );
}
