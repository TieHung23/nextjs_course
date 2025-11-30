"use client";

import {useRouter} from "next/navigation";

export default function OrderProductPage() {
    const router = useRouter();
    const handleCLick = () => {
        alert('Order placed successfully!');
        router.replace('/');
    }

    return (
        <>
            <h1>Order Product Page</h1>
            <p>This is the order product page of My App.</p>
            <button onClick={handleCLick}>Place Order</button>
        </>
    );
}