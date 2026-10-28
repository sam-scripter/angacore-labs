import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",   // the Docker image runs Next's self-contained server (.next/standalone)
};

export default nextConfig;
