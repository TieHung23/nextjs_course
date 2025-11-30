export default function Layout({
                                   children,
                                   notification,
                                   user,
                                   order
                               }: {
    children: React.ReactNode,
    notification?: React.ReactNode,
    user?: React.ReactNode,
    order?: React.ReactNode
}) {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Parallel Route Layout (21-40)</h2>

            {/* Phần nội dung chính (Page) */}
            <div className="mb-8">{children}</div>

            {/* Phần bố cục 3 slot song song */}
            {/* grid-cols-2: Chia làm 2 cột */}
            <div className="grid grid-cols-2 gap-4">

                {/* Hàng 1 - Cột 1: User */}
                <div className="h-32 bg-blue-100 rounded p-2">
                    {user}
                </div>

                {/* Hàng 1 - Cột 2: Notification */}
                <div className="h-32 bg-green-100 rounded p-2">
                    {notification}
                </div>

                {/* Hàng 2 - Full 2 cột: Order */}
                {/* col-span-2: Chiếm trọn 2 cột */}
                <div className="col-span-2 h-32 bg-yellow-100 rounded p-2">
                    {order}
                </div>
            </div>
        </div>
    );
}