import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Download All Attachments in Gmail Thread | InboxFiles",
    description: "Instantly extract and download all attachments from any Gmail conversation. The free Chrome extension to bulk save photos, PDFs, and docs from threads.",
    icons: {
        icon: [
            { url: "/images/logo.png", type: "image/png" },
        ],
        apple: "/images/logo.png",
    },
    openGraph: {
        title: "Download All Attachments in Gmail Thread | InboxFiles",
        description: "Instantly extract and download all attachments from any Gmail conversation. The free Chrome extension to bulk save photos, PDFs, and docs from threads.",
        images: ["/images/logo.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/images/logo.png" type="image/png" />
                <link rel="apple-touch-icon" href="/images/logo.png" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
