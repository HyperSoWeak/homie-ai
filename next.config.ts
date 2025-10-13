import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const repo = "homie-ai";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: isProd ? `/${repo}/` : "",
  basePath: isProd ? `/${repo}` : "",
};

export default nextConfig;
