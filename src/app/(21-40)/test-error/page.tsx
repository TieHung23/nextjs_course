'use client';

import {useEffect, useState} from 'react';

export default function TestErrorPage() {
    const [shouldError, setShouldError] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldError(true);
        }, 100);

        return () => clearTimeout(timer); // Cleanup
    }, []);

    if (shouldError) {
        throw new Error("Lỗi test (Tự động kích hoạt sau khi mount)");
    }

    return (
        <div className="p-4">
            <h1>Test Error Page</h1>
            <p>Trang này sẽ lỗi trong giây lát...</p>
        </div>
    );
}