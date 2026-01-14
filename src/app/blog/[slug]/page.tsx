import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HiDownload, HiCalendar, HiUser, HiArrowLeft, HiClock } from "react-icons/hi";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog-data";

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const post = getBlogPostBySlug(params.slug);
    
    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Gmail Attachments Downloader Blog`,
        description: post.metaDescription,
        keywords: post.focusKeywords,
    };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = getBlogPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100">
            <Navbar />
            
            {/* Blog Post Header */}
            <section className="pt-32 pb-12 px-6 relative overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-google-blue/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-google-red/5 blur-[120px] rounded-full" />
                
                <div className="max-w-3xl mx-auto relative z-10">
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center gap-2 text-google-blue hover:text-google-blue/80 transition-colors mb-8 group"
                    >
                        <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Blog</span>
                    </Link>
                    
                    {/* Category Badge */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-google-blue/10 text-google-blue font-medium mb-6">
                        {post.category}
                    </span>
                    
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                        {post.title}
                    </h1>
                    
                    {/* Post Meta */}
                    <div className="flex flex-wrap items-center gap-6 text-slate-500 dark:text-slate-400">
                        <span className="inline-flex items-center gap-2">
                            <HiUser className="w-5 h-5" />
                            {post.author}
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <HiCalendar className="w-5 h-5" />
                            {post.date}
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <HiClock className="w-5 h-5" />
                            {post.readTime}
                        </span>
                    </div>
                </div>
            </section>

            {/* Blog Post Content */}
            <section className="pb-16 px-6">
                <article className="max-w-3xl mx-auto">
                    <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/20 dark:border-white/10 shadow-xl">
                        {post.content.map((block, blockIndex) => {
                            if (block.type === "heading") {
                                return (
                                    <h2 
                                        key={blockIndex}
                                        className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-10 mb-5 first:mt-0"
                                    >
                                        {block.text}
                                    </h2>
                                );
                            }
                            if (block.type === "paragraph") {
                                return (
                                    <p 
                                        key={blockIndex}
                                        className="text-slate-700 dark:text-slate-300 leading-relaxed mb-5 text-lg"
                                    >
                                        {block.text}
                                    </p>
                                );
                            }
                            if (block.type === "list") {
                                return (
                                    <ul 
                                        key={blockIndex}
                                        className="space-y-3 mb-6 ml-2"
                                    >
                                        {block.items.map((item, itemIndex) => (
                                            <li 
                                                key={itemIndex} 
                                                className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-lg"
                                            >
                                                <span className="w-2 h-2 rounded-full bg-google-blue mt-2.5 flex-shrink-0" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                );
                            }
                            return null;
                        })}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 text-center">
                        <div className="liquid-glass rounded-3xl p-10 border border-white/20 dark:border-white/10 shadow-xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                Ready to try it yourself?
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-lg mx-auto">
                                Install Gmail Attachments Downloader and start organizing your email files today.
                            </p>
                            <a
                                href="https://chromewebstore.google.com/detail/gmail-thread-attachment-m/diadbgkjjgaficnklbhakleimefococg?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-google-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-google-blue/30 hover:bg-primary-hover transition-all hover:scale-105"
                            >
                                <HiDownload className="w-6 h-6" />
                                Add to Chrome - It&apos;s Free
                            </a>
                        </div>
                    </div>
                </article>
            </section>

            {/* Related Posts */}
            <section className="pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                        More Articles
                    </h3>
                    <div className="grid gap-6">
                        {blogPosts
                            .filter(p => p.slug !== post.slug)
                            .map((relatedPost) => (
                                <Link 
                                    key={relatedPost.id}
                                    href={`/blog/${relatedPost.slug}`}
                                    className="group block"
                                >
                                    <div className="liquid-glass rounded-2xl p-6 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-google-blue/30">
                                        <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-google-blue/10 text-google-blue text-xs font-medium mb-3">
                                            {relatedPost.category}
                                        </span>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-google-blue transition-colors">
                                            {relatedPost.title}
                                        </h4>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
