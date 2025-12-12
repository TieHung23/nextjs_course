export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { comments } = await import('../data');
    const resolvedParams = await params;
    const commentId = parseInt(resolvedParams.id, 10);
    const comment = comments.find((c) => c.id === commentId);
    if (!comment) {
        return new Response('Comment not found', { status: 404 });
    }
    return new Response(JSON.stringify(comment), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}