export default function ProductDetailLayout({
    children,
} : {children: React.ReactNode}) {
    return (
        <>
            <div className="p-6 bg-white shadow-md rounded-md">
                {children}
            </div>
            <h2>Test</h2>
        </>
    )
}