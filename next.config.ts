import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  // Хоёр дахь dev server-ийг өөр порт дээр асаахад: NEXT_DIST_DIR=.next-dev2
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
