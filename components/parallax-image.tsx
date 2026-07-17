"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Frame with an oversized inner layer that shifts vertically as it scrolls
// through the viewport, for a subtle depth effect. Disabled under reduced motion.
export function ParallaxImage({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
  speed = 10,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  speed?: number;
}) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const inner = innerRef.current;
    if (!frame || !inner) return;
    // Runs on every device / regardless of motion preference, by request.

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = frame.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -200 || r.top > vh + 200) return;
      // -1 (below viewport) → 0 (centered) → 1 (above viewport)
      const progress = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
      inner.style.transform = `translate3d(0, ${(-progress * speed).toFixed(2)}%, 0)`;
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
  }, [speed]);

  return (
    <div ref={frameRef} className={`photo relative overflow-hidden ${className}`}>
      <div ref={innerRef} className="absolute -inset-y-[20%] inset-x-0 will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  );
}
