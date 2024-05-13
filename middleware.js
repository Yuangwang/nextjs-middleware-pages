// middleware.js

import { NextResponse } from "next/server";

export async function middleware(req) {
  console.log("test");
  if (req.nextUrl.pathname === "/middleware-redirect") {
    console.log("tes12t");
    return NextResponse.redirect(
      new URL("/middleware-redirect-destination", req.url)
    );
  }
}
