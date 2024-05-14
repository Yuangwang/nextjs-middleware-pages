// middleware.js

import { NextResponse } from "next/server";

export async function middleware(req) {
  if (req.nextUrl.pathname === "/middleware-redirect") {
    console.log("redirecting");
    const response = NextResponse.redirect(
      new URL("/middleware-redirect-destination", req.url)
    );
    response.headers.set(`x-middleware-cache`, `no-cache`);
    return response;
  }
}
