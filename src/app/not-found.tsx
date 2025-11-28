import Link from "next/link";

export default function NotFound() {
    return (
        <div
            style={{
                textAlign: "center",
                padding: "80px 20px",
            }}
        >
            <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>404 - Page Not Found</h1>
            <p style={{ fontSize: "18px", color: "#555" }}>
                Trang bạn đang tìm không tồn tại hoặc đã bị xóa.
            </p>

            <Link
                href="/"
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
