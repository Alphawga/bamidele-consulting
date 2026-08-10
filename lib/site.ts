export const site = {
  name: "Bamidele Ajibola",
  role: "Full-stack developer, Lagos",
  tagline: "I consolidate scattered business operations into one intelligent system.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bamidele.example.com",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "",
  email: "hello@example.com", // set to your real contact address before launch
};

export const nav = [
  { href: "/okoh", label: "Okoh" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/mentorship", label: "Mentorship" },
];
