import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const requestHeader = new Headers(request.headers);
    const customHeaderValue = requestHeader.get('X-Custom-Header') || 'No Custom Header';
    const authorization = requestHeader.get('Authorization') || 'No Authorization Header';

    const responseBody = {
        message: 'Headers received successfully',
        customHeader: customHeaderValue,
        authorizationHeader: authorization,
    };

    return new Response(JSON.stringify(responseBody), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}