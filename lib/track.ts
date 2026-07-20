import { track as vercelTrack } from "@vercel/analytics";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

type Properties = Record<string, string | number | boolean | null | undefined>;

export function trackEvent(name: string, data?: Properties) {
  vercelTrack(name, data);
  window.clarity?.("event", name);
}
