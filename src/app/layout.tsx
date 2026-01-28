import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.inboxfiles.com"),
    title: "Download All Attachments in Gmail Thread | InboxFiles",
    description: "Instantly extract and download all attachments from any Gmail conversation. The free Chrome extension to bulk save photos, PDFs, and docs from threads.",
    alternates: {
        canonical: "https://www.inboxfiles.com/",
    },
    icons: {
        icon: [
            { url: "/images/logo.png", type: "image/png" },
        ],
        apple: "/images/logo.png",
    },
    openGraph: {
        title: "Download All Attachments in Gmail Thread | InboxFiles",
        description: "Instantly extract and download all attachments from any Gmail conversation. The free Chrome extension to bulk save photos, PDFs, and docs from threads.",
        url: "https://www.inboxfiles.com/",
        siteName: "InboxFiles",
        images: ["/images/logo.png"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Download All Attachments in Gmail Thread | InboxFiles",
        description: "Instantly extract and download all attachments from any Gmail conversation. The free Chrome extension to bulk save photos, PDFs, and docs from threads.",
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
