import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const cookieStore = await cookies();
    cookieStore.set("myCookie", "cookieValue123", {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24, // 1 day
    });

    cookieStore.set("anotherCookie", "anotherValue", {
        httpOnly: false,
        secure: false,
        maxAge: 60 * 60, // 1 hour
    });


    const response = new Response("Cookie has been set");


    return response;
}