"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setShow(window.scrollY > 700);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo?: (t: number, o?: unknown) => void } }).__lenis;
    if (lenis?.scrollTo) lenis.scrollTo(0, { duration: 1.1 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Zpět nahoru"
      className={`to-top fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-lg text-paper shadow-lg hover:bg-noir ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      ↑
    </button>
  );
}
