/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removido "output: export" para permitir SSR e melhor SEO
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
