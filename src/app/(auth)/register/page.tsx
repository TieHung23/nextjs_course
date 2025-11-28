export default function RegisterPage() {
    return (
        <>
            <h1>Register Page</h1>
            <form className="flex flex-col gap-4 mt-4">
                <input
                    type="text"
                    placeholder="Username"
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Register
                </button>
            </form>
        </>
    )
}