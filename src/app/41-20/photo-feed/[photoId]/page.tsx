import Image from "next/image";
import Link from "next/link";
import {listOfPhotos} from "../data"; // Import dữ liệu chung

// 1. (Optional) Dùng cái này để Next.js tạo sẵn file HTML tĩnh lúc Build -> Load siêu nhanh
export async function generateStaticParams() {
    return listOfPhotos.map((photo) => ({
        photoId: photo.id,
    }));
}

export default async function PhotoPage({
                                            params,
                                        }: {
    params: Promise<{ photoId: string }>;
}) {
    const {photoId} = await params;

    // Tìm ảnh trong data
    const photo = listOfPhotos.find((p) => p.id === photoId);

    // Xử lý nếu ID không tồn tại
    if (!photo) {
        return (
            <div className="text-center mt-20">
                <h1 className="text-3xl font-bold text-red-500">404 - Không tìm thấy ảnh</h1>
                <Link href="/photo-feed" className="text-blue-500 hover:underline mt-4 block">
                    Quay về trang chủ
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10 px-4">
            {/* Nút quay lại */}
            <div className="mb-6">
                <Link
                    href="/41-20/photo-feed"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                    ← Quay lại danh sách
                </Link>
            </div>

            {/* Card hiển thị chi tiết ảnh */}
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">

                {/* Khung ảnh lớn */}
                <div className="relative w-full h-[500px] md:h-[600px] bg-gray-100">
                    <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-contain" // Dùng object-contain để thấy toàn bộ ảnh mà không bị cắt
                        priority // Ưu tiên load ảnh này vì nó là nội dung chính
                    />
                </div>

                {/* Phần thông tin chi tiết bên dưới */}
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{photo.alt}</h1>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="bg-gray-100 px-3 py-1 rounded-full">ID: {photo.id}</span>
                        <span>Kích thước gốc: 200x300</span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        Đây là trang chi tiết (Standalone Page) của bức ảnh.
                        Trang này hiển thị khi bạn truy cập trực tiếp URL hoặc reload lại trang.
                        Nó khác với Modal (Intercepting Route) chỉ hiện đè lên khi bạn bấm từ danh sách.
                    </p>
                </div>
            </div>
        </div>
    );
}