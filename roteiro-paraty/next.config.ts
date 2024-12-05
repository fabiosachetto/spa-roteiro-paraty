import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'scontent-gru1-2.cdninstagram.com',
      },
    ],
  },
};

export default nextConfig;
