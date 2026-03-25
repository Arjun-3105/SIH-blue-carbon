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

// Add global styles to change the color of the landing page
import "./styles/globals.css";

// In globals.css, you can set the background color and text color:
// body {
//   background-color: #f0f0f0;
//   color: #333;
// }