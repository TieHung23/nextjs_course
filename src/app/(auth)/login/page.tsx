export default function LoginPage() {
    return (
        <>
            <h1>Login Page</h1>
            <form className="flex flex-col gap-4 mt-4">
                <input
                    type="text"
                    placeholder="Username"
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded"
                >
                    Login
                </button>
            </form>
        </>
    );
}