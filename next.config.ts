import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images are pre-sized static art bundled in /public/images, so we skip
    // on-the-fly optimization. Keeps the deploy fully self-contained and the
    // draft rendering identically everywhere (Vercel, local, offline).
    unoptimized: true,
  },
};

export default nextConfig;
