export default async function ReviewProductPage({
    params
}: {
    params: Promise<{ productId: string; reviewId: string }>
}){
    const { productId, reviewId } = await params;

    return (
        <>
            <h1>Review Page</h1>
            <p>Review ID: {reviewId} for Product ID: {productId}</p>
        </>
    )
}