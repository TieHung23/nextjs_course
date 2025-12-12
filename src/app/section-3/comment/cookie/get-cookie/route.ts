import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const cookie = request.cookies.get("myCookie");
    const cookieValue = cookie ? cookie.value : "No cookie found";
    return new Response(`Cookie Value: ${cookieValue}`);
}