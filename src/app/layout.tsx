import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Gmail Attachments Downloader | Organize and Download Threads Efficiently",
    description: "Instantly see and download every attachment buried in long Gmail conversations. No more clicking 'expand' twenty times.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
