import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <h1>Welcome to my HomePage</h1>
            <Link href="/counter">Counter</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
        </>
    );
}
