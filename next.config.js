/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "ecfysugstpmsmdbbmpiu.supabase.co",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "ukdqdyjvfnswkvzfwfpf.supabase.co",
      },
    ],
  },
};

export default nextConfig;
