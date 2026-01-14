export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    hook: string;
    metaDescription: string;
    focusKeywords: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    content: ContentBlock[];
}

export type ContentBlock = 
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string }
    | { type: "list"; items: string[] };

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        slug: "find-download-lost-attachments-gmail",
        title: "How to Find and Download \"Lost\" Attachments in Gmail Instantly",
        hook: "We've all been there. You are 50 emails deep in a massive project thread. You know the client sent the updated contract somewhere between last Tuesday and today, but finding it is a nightmare.",
        metaDescription: "Stop scrolling through endless email threads. Learn how Attachments Downloader for Gmail helps you find, organize, and download every file in a conversation instantly.",
        focusKeywords: "Find lost Gmail attachments, organize email files, Gmail attachment search",
        date: "January 15, 2025",
        author: "Gmail Attachments Team",
        category: "Productivity",
        readTime: "4 min read",
        content: [
            {
                type: "paragraph",
                text: "We've all been there. You are 50 emails deep in a massive project thread. You know the client sent the updated contract somewhere between last Tuesday and today, but finding it is a nightmare."
            },
            {
                type: "paragraph",
                text: "You click \"Expand All.\" You scroll past endless \"Sounds good!\" replies. You hunt for the paperclip icon. You finally find the file, only to realize it was the old version from last week."
            },
            {
                type: "paragraph",
                text: "Gmail is the world's best email service, but it wasn't built to be a file manager. That is why we built Attachments Downloader for Gmail."
            },
            {
                type: "heading",
                text: "The Problem: Gmail Hides Your Files"
            },
            {
                type: "paragraph",
                text: "When a Gmail thread spans weeks or months, attachments get buried. Native Gmail search is powerful, but it pulls you out of your workflow and lists every attachment ever sent by that person, stripping away the context of the conversation."
            },
            {
                type: "heading",
                text: "The Solution: A Dedicated Attachments Downloader for Gmail"
            },
            {
                type: "paragraph",
                text: "Attachments Downloader for Gmail transforms your inbox by adding a dedicated file management layer directly inside your email threads."
            },
            {
                type: "paragraph",
                text: "Instead of expanding collapsed messages to hunt for files, our extension injects a simple, native-style button into your thread list. One click opens a dashboard that aggregates every single file in that conversation."
            },
            {
                type: "heading",
                text: "Why users are switching to our downloader:"
            },
            {
                type: "list",
                items: [
                    "See Everything at Once: No more clicking \"Show trimmed content.\"",
                    "Contextual Sorting: Files are automatically grouped by Sender and Date, so you always know which version is the latest.",
                    "Filter the Noise: Ignore the text signatures and focus purely on the PDFs, images, and documents."
                ]
            },
            {
                type: "paragraph",
                text: "Stop wasting time playing hide-and-seek with your data."
            }
        ]
    },
    {
        id: 2,
        slug: "5-reasons-attachments-downloader-productivity-hack",
        title: "5 Reasons \"Attachments Downloader for Gmail\" is the Ultimate Productivity Hack",
        hook: "If you live in your inbox, you know that seconds count. Searching for a mock-up or invoice adds up to hours of lost productivity every month.",
        metaDescription: "Boost your inbox productivity. Discover 5 reasons why Attachments Downloader for Gmail is the essential tool for project managers and power users who need to bulk download files.",
        focusKeywords: "Bulk download Gmail attachments, Gmail productivity extension, save all attachments at once",
        date: "January 20, 2025",
        author: "Gmail Attachments Team",
        category: "Power User",
        readTime: "5 min read",
        content: [
            {
                type: "paragraph",
                text: "If you live in your inbox, you know that seconds count. Searching for a mock-up or invoice adds up to hours of lost productivity every month."
            },
            {
                type: "paragraph",
                text: "Here is why Attachments Downloader for Gmail is becoming the go-to extension for professionals who need to manage bulk attachments efficiently."
            },
            {
                type: "heading",
                text: "1. Zero-Click Context Switching"
            },
            {
                type: "paragraph",
                text: "Most \"Gmail attachment extractor\" tools require you to leave your inbox or open a clumsy sidebar. We designed Attachments Downloader for Gmail to feel native. Our \"Attachments\" button sits right inside your email row, styled like a native Gmail chip. It feels like a feature Google forgot to build."
            },
            {
                type: "heading",
                text: "2. The \"Frosted Glass\" Dashboard"
            },
            {
                type: "paragraph",
                text: "We didn't just dump a list of links. We built a modern interface with a \"Light Frosted Glass\" design. This overlay allows you to view and download files without losing your place in the inbox, making it the most seamless Gmail attachment manager available."
            },
            {
                type: "heading",
                text: "3. Chronological Version Control"
            },
            {
                type: "paragraph",
                text: "Files aren't just listed alphabetically; they are grouped by Message Date and Sender. This is crucial for project management. You can visually see that \"Client A\" sent a file on Tuesday, and \"Manager B\" sent a revision on Wednesday, ensuring you never download the outdated version."
            },
            {
                type: "heading",
                text: "4. Smart File Type Recognition"
            },
            {
                type: "paragraph",
                text: "Don't guess what Document_Final_v2 actually is. Our extension acts as a smart file viewer, automatically detecting MIME types and assigning visual icons—PDFs, Images, Spreadsheets, and Google Drive links are instantly easy to distinguish."
            },
            {
                type: "heading",
                text: "5. It Handles the Heavy Lifting"
            },
            {
                type: "paragraph",
                text: "Behind the scenes, the extension parses complex email payloads and Base64 encoding so you don't have to. It grabs the file directly from the API and serves it to you instantly, making it the fastest way to bulk download Gmail attachments."
            }
        ]
    }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
    return blogPosts.map(post => post.slug);
}
