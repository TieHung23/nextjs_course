export default function AuthLayout({
    children,
} : {children: React.ReactNode}) {
    return (
        <>
            <h1>Auth Layout</h1>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
                    {children}
                </div>
            </div>
        </>
    )
}