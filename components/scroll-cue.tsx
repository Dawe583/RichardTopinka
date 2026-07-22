"use client";

import { useEffect, useState } from "react";

// Small "scroll" hint under the hero. Fades out once the visitor starts
// scrolling so it never lingers.
export function ScrollCue({ className = "" }: { className?: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setHidden(window.scrollY > 80);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className={`scroll-cue ${hidden ? "is-hidden" : ""} flex flex-col items-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="text-[0.62rem] uppercase tracking-[0.28em] text-ink-faint">
        Scroll
      </span>
      <span className="scroll-cue-line" />
    </div>
  );
}
