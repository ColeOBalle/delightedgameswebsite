import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/delightedgameswebsite",
  assetPrefix: "/delightedgameswebsite/",
  images: {unoptimized:true},
  reactStrictMode: true,
};

export default nextConfig;
