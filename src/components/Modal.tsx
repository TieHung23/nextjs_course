"use client"; // Bắt buộc phải là Client Component để bắt sự kiện click

import {useRouter} from "next/navigation";
import {MouseEventHandler, useRef} from "react";

export default function Modal({children}: { children: React.ReactNode }) {
    const overlay = useRef(null);
    const router = useRouter();

    // Hàm xử lý khi bấm vào nút tắt hoặc bấm ra ngoài nền đen
    const onDismiss = () => {
        router.back(); // Quay lại trang trước (đóng modal)
    };

    const onClick: MouseEventHandler = (e) => {
        // Chỉ đóng nếu bấm đúng vào lớp phủ (overlay), không đóng khi bấm vào nội dung bên trong
        if (e.target === overlay.current) {
            onDismiss();
        }
    };

    return (
        <div
            ref={overlay}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={onClick}
        >
            {/* fixed inset-0: Phủ kín màn hình
          z-50: Nổi lên trên cùng
          bg-black/60: Nền đen trong suốt
          backdrop-blur-sm: Làm mờ nội dung phía sau
      */}

            {/* Đây là nơi nội dung ảnh (children) sẽ hiện ra */}
            <div className="relative bg-white rounded-lg shadow-xl w-auto max-w-3xl overflow-hidden">
                {children}

                {/* Nút X để tắt (Optional - cho user dễ biết) */}
                <button
                    onClick={onDismiss}
                    className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}