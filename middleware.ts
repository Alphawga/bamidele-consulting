import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_SESSION_COOKIE, verifySessionToken } from "@/lib/adminAuth";

export const config = {
  matcher: ["/admin/:path*", "/api/crm/:path*"],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isApi = pathname.startsWith("/api/crm");
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    return isApi
      ? NextResponse.json({ error: "Admin is not configured." }, { status: 503 })
      : new NextResponse("CRM is not configured. Set ADMIN_PASSWORD in env.", { status: 503 });
  }

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const authed = await verifySessionToken(token, password);
  if (authed) {
    return NextResponse.next();
  }

  if (isApi) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}
