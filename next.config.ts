import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removido "output: export" para permitir SSR e melhor SEO
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
