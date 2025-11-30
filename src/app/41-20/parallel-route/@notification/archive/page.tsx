import Link from "next/link";

export default function ArchiveNotificationPage() {
    console.log("Archive Notification Page rendered");
    return (
        <>
            <h1>Archive Notification Page</h1>
            <p>This is the archive notification page under the (21-40)/parallel-route/@notification segment.</p>
            <Link href={"/parallel-route"}>Default</Link>
        </>
    );
}