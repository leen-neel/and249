import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/content/blog",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/content/case-studies",
        destination: "/case-studies",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  allowedDevOrigins: ["*.lhr.life"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**", // This allows any path under the hostname
      },
    ],
  },
  output: "standalone",
  transpilePackages: ["motion"],
  turbopack: {},
};

export default nextConfig;
