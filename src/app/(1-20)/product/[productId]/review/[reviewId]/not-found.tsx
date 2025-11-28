"use client"
import Link from "next/link";
import { usePathname} from "next/navigation";

export default function NotFound() {
    const pathName = usePathname();
    const productId = pathName.split("/")[2];
    const reviewId = pathName.split("/")[4];


    return (
        <div
            style={{
                textAlign: "center",
                padding: "80px 20px",
            }}
        >
            <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>404 - Page Not Found</h1>
            <p style={{ fontSize: "18px", color: "#555" }}>
                The review with ID: {reviewId} for Product ID: {productId} was not found.
            </p>

            <Link
                href="/public"
                style={{
                    marginTop: "30px",
                    display: "inline-block",
                    padding: "10px 20px",
                    background: "black",
                    color: "white",
                    borderRadius: "8px",
                }}
            >
                Quay về trang chủ
            </Link>
        </div>
    );
}
