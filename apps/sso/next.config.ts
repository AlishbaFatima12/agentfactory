import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // CORS is now handled by middleware.ts for dynamic origin checking
  // This allows multiple origins to be configured via ALLOWED_ORIGINS env var

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
