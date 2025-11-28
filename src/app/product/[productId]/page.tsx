export default async function ProductDetailPage({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;

    return (
        <>
            <h1>Product Detail Page</h1>
            <p>Details for product with ID: {productId}</p>
        </>
    )
}