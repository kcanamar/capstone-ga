/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.socialistmodernism.com"],
  }
}

module.exports = nextConfig
