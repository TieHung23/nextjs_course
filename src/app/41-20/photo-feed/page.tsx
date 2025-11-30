import Image from "next/image";
import Link from "next/link";
import {listOfPhotos} from "@/app/41-20/photo-feed/data";

export default function PhotoFeedPage() {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold text-center mb-10">Photo Feed</h1>

            {/* Layout Grid: Mobile 1 cột, Tablet 2 cột, PC 4 cột */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {listOfPhotos.map((photo, i) => (
                    <div key={i}
                         className="flex flex-col items-center border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">

                        {/* Wrapper cho ảnh để tránh vỡ layout */}
                        <div className="relative w-full h-48 mb-4">
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill // Dùng fill để ảnh tự co giãn theo khung
                                className="object-cover rounded-md" // object-cover giúp ảnh không bị méo
                            />
                        </div>

                        {/* Link chuyển trang */}
                        {/* Lưu ý cú pháp href={} */}
                        <Link
                            href={`/41-20/photo-feed/${photo.id}`}
                            className="text-blue-600 hover:underline font-medium"
                        >
                            View Photo {photo.id}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}