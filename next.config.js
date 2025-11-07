/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "eoimages.gsfc.nasa.gov"],
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "eoimages.gsfc.nasa.gov",
      },
    ],
  },
  // Cloudflare Pages configuration
  output: "standalone",
  // Enable static exports if needed for Cloudflare Pages
  // output: 'export',
};

module.exports = nextConfig;
