import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log("middleware");
    return NextResponse.next()
    // return NextResponse.redirect(new URL('/home', request.url))
  }
//   