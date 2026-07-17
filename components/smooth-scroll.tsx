"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import "lenis/dist/lenis.css";
import { useEffect, useRef, type ReactNode } from "react";

// Smooth scroll runs on ALL devices (including touch, via syncTouch) and is
// never disabled — by request. The Lenis instance is exposed on window so
// helpers like "back to top" can drive it.
export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    const instance = lenisRef.current?.lenis ?? null;
    const w = window as unknown as { __lenis?: unknown };
    w.__lenis = instance;
    return () => {
      if (w.__lenis === instance) w.__lenis = null;
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.09,
        wheelMultiplier: 1,
        smoothWheel: true,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
