/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/consulting", destination: "/offers", permanent: true },
      // Held, not retired. /products sold the Okoh ERP as an AlphaWGA product line
      // with a waitlist and founding pricing, and the ERP's cap table is unsigned.
      // The offer playbook is explicit that it is a separate asset. The page and its
      // form are left in the tree; delete this entry to bring them back.
      { source: "/products", destination: "/okoh", permanent: false },
      // The Aso-Oke /writing route is the one index now.
      { source: "/blog", destination: "/writing", permanent: true },
    ];
  },
};

export default nextConfig;
