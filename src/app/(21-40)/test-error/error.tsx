"use client"
import {useRouter} from "next/navigation";

export default function ErrorPage(
    {
        error,
        reset
    }: { error: Error; reset: () => void }
) {

    const router = useRouter();
    const reload = () => {
        router.refresh();
        reset()
    }
    return (
        <>
            <div>
                Error occurred: {error.message}
            </div>
            <button onClick={reload}>Reset error</button>
        </>
    );
}