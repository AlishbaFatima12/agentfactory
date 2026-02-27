import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // CORS headers for API routes (middleware removed due to Turbopack bug)
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization, X-Requested-With" },
        ],
      },
    ];
  },

  // Turbopack configuration (Next.js 16+)
  turbopack: {
    resolveAlias: {
      "@/auth-schema": path.resolve(__dirname, "auth-schema.ts"),
    },
  },

  // Webpack configuration (kept for production builds)
  webpack: (config) => {
    // Add alias for auth-schema.ts at project root
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/auth-schema": path.resolve(__dirname, "auth-schema.ts"),
    };
    return config;
  },
};

export default nextConfig;
