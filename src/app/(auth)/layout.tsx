'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";


const navLinks = [
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
];

export default function AuthLayout({
    children,
} : {children: React.ReactNode}) {

    const pathName = usePathname();
    const path = pathName ? pathName.toLowerCase() : '';
    console.log(path);
    return (
        <>
            <h1>Auth Layout</h1>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                {
                    navLinks.map((link) => {

                        const isActive = (path === link.href.toLowerCase());
                        console.log(isActive);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={isActive ? "text-blue-500 font-bold mr-4" : "text-gray-500 mr-4"}>
                                {link.name}
                            </Link>
                        );
                    })
                }
                <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
                    {children}
                </div>
            </div>
        </>
    )
}