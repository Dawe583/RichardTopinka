"use client";

import { useEffect, useRef, useState } from "react";

const R = 21;
const CIRC = 2 * Math.PI * R;

export function BackToTop() {
  const [show, setShow] = useState(false);
  const barRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const bar = barRef.current;
      if (bar) bar.style.strokeDashoffset = String(CIRC * (1 - p));
      setShow(window.scrollY > 700);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo?: (t: number, o?: unknown) => void } }).__lenis;
    if (lenis?.scrollTo) lenis.scrollTo(0, { duration: 1.1 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`to-top fixed bottom-6 right-6 z-40 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={toTop}
        aria-label="Zpět nahoru"
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-ink text-lg text-paper shadow-lg hover:bg-noir"
      >
        <svg
          className="progress-ring pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <circle className="track" cx="24" cy="24" r={R} strokeWidth="2" />
          <circle
            ref={barRef}
            className="bar"
            cx="24"
            cy="24"
            r={R}
            strokeWidth="2"
            style={{ strokeDasharray: CIRC, strokeDashoffset: CIRC }}
          />
        </svg>
        <span className="relative">↑</span>
      </button>
    </div>
  );
}
