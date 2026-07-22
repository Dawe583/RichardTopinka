"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

// Line-mask reveal that fires when the element scrolls into view: the text
// slides up from behind a clipped edge. Use for section headings.
export function Rise({
  children,
  className = "",
  delay = 0,
  as,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const Tag: ElementType = as ?? "h2";
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`rise-mask ${shown ? "is-visible" : ""} ${className}`}>
      <span style={{ transitionDelay: `${delay}ms` }}>{children}</span>
    </Tag>
  );
}
