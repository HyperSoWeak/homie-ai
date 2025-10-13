import type { NextConfig } from "next";
const isGH = process.env.GITHUB_ACTIONS === "true";
const repo = "homepage";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGH ? `/${repo}` : "",
  assetPrefix: isGH ? `/${repo}/` : "",
};

export default nextConfig;
