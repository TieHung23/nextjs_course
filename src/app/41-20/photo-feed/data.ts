export type PhotoDetail = {
    id: string;
    src: string;
    alt: string;
};

export const listOfPhotos: PhotoDetail[] = [
    {id: '1011', src: 'https://picsum.photos/id/1011/200/300', alt: 'Photo 1011'},
    {id: '1012', src: 'https://picsum.photos/id/1012/200/300', alt: 'Photo 1012'},
    {id: '1013', src: 'https://picsum.photos/id/1013/200/300', alt: 'Photo 1013'},
    {id: '1015', src: 'https://picsum.photos/id/1015/200/300', alt: 'Photo 1015'},
    {id: '1016', src: 'https://picsum.photos/id/1016/200/300', alt: 'Photo 1016'},
];