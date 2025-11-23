import type { NextConfig } from "next";

const nextConfig: NextConfig = {   
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ajuo8pgnwp.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "nikhilsingh.com.np",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
