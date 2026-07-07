/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // produces a static /out folder GitHub Pages can serve
  images: { unoptimized: true }, // required for static export (no image server)
  basePath: "/b-g", // your repo name — this is a project page, not a root domain
  assetPrefix: "/b-g/",
  trailingSlash: true, // avoids 404s on GitHub Pages for nested routes
};
module.exports = nextConfig;
