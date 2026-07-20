import { createHmac, timingSafeEqual } from "crypto";

const PAYSTACK_API = "https://api.paystack.co";

export function auditAmountKobo(): number {
  const raw = process.env.NEXT_PUBLIC_AUDIT_PRICE_NGN ?? "0";
  const naira = Number(raw.replace(/,/g, ""));
  return Math.round(naira * 100);
}

export type PaystackVerifyResponse = {
  status: boolean;
  data: {
    status: "success" | "failed" | "abandoned";
    reference: string;
    amount: number;
    currency: string;
    customer: { email: string };
  };
};

export async function verifyPaystackTransaction(reference: string): Promise<PaystackVerifyResponse> {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) throw new Error("PAYSTACK_SECRET_KEY not configured");

  const res = await fetch(`${PAYSTACK_API}/transaction/verify/${encodeURIComponent(reference)}`, {
    headers: { Authorization: `Bearer ${secretKey}` },
  });
  if (!res.ok) throw new Error(`Paystack verify failed with status ${res.status}`);
  return res.json();
}

export function isValidPaystackSignature(rawBody: string, signature: string | null): boolean {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey || !signature) return false;

  const expected = createHmac("sha512", secretKey).update(rawBody).digest("hex");
  const expectedBuf = Buffer.from(expected, "hex");
  const signatureBuf = Buffer.from(signature, "hex");
  if (expectedBuf.length !== signatureBuf.length) return false;
  return timingSafeEqual(expectedBuf, signatureBuf);
}
