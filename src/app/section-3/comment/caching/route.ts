export const dynamic = 'force-dynamic';

export async function GET() {
    return Response.json({
        message: "This is a dynamic response",
        timestamp: new Date().toISOString()
    });
}