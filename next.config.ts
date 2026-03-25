import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    return [
      { source: "/projects", destination: "/marketplace", permanent: false },
      { source: "/projects/:path*", destination: "/marketplace", permanent: false },
    ];
  },
};

export default nextConfig;

// Add global CSS to change the landing page color
import "./styles/global.css";

// In global.css
body {
  background-color: red;
}