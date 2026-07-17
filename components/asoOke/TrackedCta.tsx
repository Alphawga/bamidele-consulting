"use client";

import { track } from "@vercel/analytics";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
  event: string;
  data?: Record<string, string>;
};

export default function TrackedCta({ href, className, children, event, data }: Props) {
  return (
    <a href={href} className={className} onClick={() => track(event, data)}>
      {children}
    </a>
  );
}
