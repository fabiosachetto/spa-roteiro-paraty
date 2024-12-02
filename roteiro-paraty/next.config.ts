import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'media-gru1-1.cdn.whatsapp.net',
      },
    ],
  },
};

export default nextConfig;
