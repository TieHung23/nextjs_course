export default async function DocsPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;

    if(slug?.length === 0) {
        return (
            <>
                <h1>Docs Home Page</h1>
                <p>Welcome to the documentation home page.</p>
            </>
        )
    }
    else if(slug?.length === 1) {
        return (
            <>
                <h1>Docs Home Page</h1>
                <p>Welcome to the documentation home page.</p>
                <p>Document : {slug[0]}</p>
            </>
        )
    }
    else if(slug?.length === 2) {
        return (
            <>
                <h1>Docs Home Page</h1>
                <p>Welcome to the documentation home page.</p>
                <p>Document : {slug[0]}</p>
                <p>Concept : {slug[1]}</p>
            </>
        )
    }

    return (
        <>
            <h1>Document Page</h1>
        </>
    )
}