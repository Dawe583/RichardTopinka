"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { useEffect, useState, type ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Defer the state write so we never call setState synchronously in the effect.
    const raf = requestAnimationFrame(() => setEnabled(!mq.matches));
    const onChange = () => setEnabled(!mq.matches);
    mq.addEventListener("change", onChange);
    return () => {
      cancelAnimationFrame(raf);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  if (!enabled) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{ lerp: 0.09, wheelMultiplier: 1, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}
