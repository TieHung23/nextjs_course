export default async function TestLoadingPage() {
    // Simulate a delay to demonstrate the loading state
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <>
            <h1>Test Loading Page</h1>
            <p>This page demonstrates the loading state in Next.js.</p>
        </>
    );
}