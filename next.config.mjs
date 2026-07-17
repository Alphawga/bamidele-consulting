/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/consulting", destination: "/offers", permanent: true }];
  },
};

export default nextConfig;
