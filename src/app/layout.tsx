import {Metadata} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
            <body className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}