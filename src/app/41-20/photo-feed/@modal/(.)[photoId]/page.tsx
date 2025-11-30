import {listOfPhotos, PhotoDetail} from "@/app/41-20/photo-feed/data";
import Image from "next/image";
import Modal from "@/components/Modal";

export default async function PhotoModal({params}: { params: Promise<{ photoId: string }> }) {

    const {photoId} = await params;
    console.log(photoId);
    const photoDetail: PhotoDetail | undefined = listOfPhotos.find(x => x.id === photoId);

    if (!photoDetail) {
        return (
            <Modal>
                <div className="bg-white p-10 rounded">
                    <h1 className="text-red-500 font-bold">Heheheh (Không tìm thấy ảnh)</h1>
                </div>
            </Modal>
        );
    }

    return (
        <Modal>
            <div className="bg-white p-4 rounded-lg shadow-xl max-w-2xl w-full mx-4">
                <h2 className="text-xl font-bold mb-4">{photoDetail.alt}</h2>
                <div className="relative w-full h-96 bg-gray-200 rounded overflow-hidden">
                    <Image
                        src={photoDetail.src}
                        alt={photoDetail.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="mt-4 text-sm text-gray-500">
                    ID: {photoDetail.id}
                </div>
            </div>
        </Modal>
    );
}