/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  // Serve large video files
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          { key: "Accept-Ranges", value: "bytes" },
          { key: "Cache-Control",  value: "public, max-age=31536000" },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
