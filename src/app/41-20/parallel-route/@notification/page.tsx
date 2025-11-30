import Link from "next/link";

export default function NotificationPage() {
    console.log("NotificationPage rendered");
    return (
        <>
            <h1>Notification Page</h1>
            <p>This is the notification page inside the parallel route.</p>
            <Link href={"/parallel-route/archive"}>Archive</Link>
        </>
    );
}