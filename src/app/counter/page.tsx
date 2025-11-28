import {Metadata} from "next";
import Counter from "@/app/counter/counter";

export const generateMetadata = async () : Promise<Metadata> => {
    return {
        title: 'Counter - My App',
        description: 'A simple counter page in My App',
    };
}

export default function CounterPage() {
    return (
        <>
            <h1>Counter Page</h1>
            <p>This is the counter page of My App.</p>
            <Counter/>
        </>
    );
}