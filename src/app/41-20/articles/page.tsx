import Link from "next/link";

export default function ArticlesPage() {
    return (
        <>
            <h1>Articles Page</h1>
            <p>This is the articles page.</p>

            <Link href="/articles/123?lang=en">123</Link>
            <Link href="/articles/234?lang=en">234</Link>
            <Link href="/articles/444?lang=en">444</Link>
        </>
    );
}