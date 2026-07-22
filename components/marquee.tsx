"use client";

import { useEffect, useRef } from "react";

const WORDS = ["Portrét", "Akt", "Fine art", "Světlo", "Tělo", "Ticho", "Ateliér"];

type LenisLike = { velocity?: number };

export function Marquee() {
  const skewRef = useRef<HTMLDivElement | null>(null);

  // Skew the band based on scroll velocity (uses Lenis' velocity when present,
  // otherwise the raw scroll delta), easing back to flat when idle.
  useEffect(() => {
    const el = skewRef.current;
    if (!el) return;
    let raf = 0;
    let lastY = window.scrollY;
    let current = 0;

    const loop = () => {
      const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
      let v: number;
      if (lenis && typeof lenis.velocity === "number") {
        v = lenis.velocity;
      } else {
        const y = window.scrollY;
        v = y - lastY;
        lastY = y;
      }
      const target = Math.max(-7, Math.min(7, v * 0.35));
      current += (target - current) * 0.1;
      el.style.setProperty("--skew", `${current.toFixed(2)}deg`);
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  // Two identical runs so the -50% translate loops seamlessly.
  const run = (
    <div className="marquee-track" aria-hidden="true">
      {[0, 1].map((k) => (
        <div key={k} className="flex items-center">
          {WORDS.map((w) => (
            <span key={w} className="flex items-center">
              <span className="display px-8 text-5xl text-ink-soft sm:text-7xl">
                {w}
              </span>
              <span className="text-ink-faint">·</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="marquee border-y border-line py-8 sm:py-12" aria-label="Zaměření">
      <div ref={skewRef} className="marquee-skew">
        {run}
      </div>
    </section>
  );
}
