export const ADMIN_SESSION_COOKIE = "admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7;

const encoder = new TextEncoder();

async function getKey(secret: string) {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function createSessionToken(secret: string): Promise<string> {
  const expires = Date.now() + SESSION_TTL_MS;
  const key = await getKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(String(expires)));
  return `${expires}.${toHex(sig)}`;
}

export async function verifySessionToken(
  token: string | undefined,
  secret: string
): Promise<boolean> {
  if (!token) return false;
  const [expiresStr, sig] = token.split(".");
  if (!expiresStr || !sig) return false;
  const expires = Number(expiresStr);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;

  const key = await getKey(secret);
  const expectedSig = await crypto.subtle.sign("HMAC", key, encoder.encode(expiresStr));
  return timingSafeEqual(toHex(expectedSig), sig);
}
