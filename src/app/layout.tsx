import {Metadata} from "next";

export const metadata : Metadata = {
    title: 'My App',
    description: 'This is my app built with Next.js',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}