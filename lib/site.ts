export const site = {
  name: "Bamidele Ajibola",
  role: "Technical architect, Lagos",
  tagline: "I consolidate scattered business operations into one intelligent system.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bamidele.example.com",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "",
  email: "hello@example.com", // [TO FILL]
};

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];
