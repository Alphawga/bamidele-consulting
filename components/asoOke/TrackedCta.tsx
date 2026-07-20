"use client";

import { trackEvent } from "@/lib/track";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
  event: string;
  data?: Record<string, string>;
};

export default function TrackedCta({ href, className, children, event, data }: Props) {
  return (
    <a href={href} className={className} onClick={() => trackEvent(event, data)}>
      {children}
    </a>
  );
}
