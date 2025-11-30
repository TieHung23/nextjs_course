type Prop = {
    params: Promise<{ articlesId: string }>;
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ArticlesDetailPage({ params, searchParams }: Prop) {
    const { articlesId } = await params;
    const lang = searchParams.lang ?? "en";
    return (
        <>
            <h1>Articles Detail Page</h1>
            <p>Details for article with ID: {articlesId}</p>
            <p>Search Params: {searchParams.toString()}</p>
            <p>Language: {lang}</p>
        </>
    )
}


