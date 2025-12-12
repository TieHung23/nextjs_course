import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log("Middleware triggered for:", request.url);

    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: "/section-3/middleware",
};