import type { Metadata } from 'next';

type Props = {
    params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { productId } = await params;

    return {
        title: `Product ${productId} - My Store`,
        description: `Details and information about product ${productId} in My Store.`,
    };
}

export default async function ProductDetailPage({ params }: Props ) {
    const { productId } = await params;

    return (
        <>
            <h1>Product Detail Page</h1>
            <p>Details for product with ID: {productId}</p>
        </>
    )
}