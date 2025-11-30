/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pb.ntt-startupchallenge.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
