export default function OrderLayout({
    children,
} : {children: React.ReactNode}) {
    return (
        <>
            <h1>Order Layout</h1>
            <div className="p-6 bg-white shadow-md rounded-md">
                {children}
            </div>
        </>
    )
}