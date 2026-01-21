import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/gincomici",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
