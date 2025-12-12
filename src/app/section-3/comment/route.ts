import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const { comments } = await import('./data');
    const searchParams = request.nextUrl.searchParams;
    const key = searchParams.get('key');

    let filteredComments = comments;
    if (key) {
        filteredComments = comments.filter(comments =>
            comments.text.toLowerCase().includes(key.toLowerCase())
        );
    }

    return new Response(JSON.stringify(filteredComments), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}