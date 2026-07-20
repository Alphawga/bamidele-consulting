import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, createSessionToken } from "@/lib/adminAuth";

type Payload = {
  password?: string;
};

export async function POST(req: Request) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return NextResponse.json({ error: "Admin is not configured." }, { status: 503 });
  }

  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (data.password !== adminPassword) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const token = await createSessionToken(adminPassword);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
