import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Cybersecurity-portfolio",
  assetPrefix: "/Cybersecurity-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;