import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HiArrowLeft, HiCalendar, HiClock, HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
    title: "Blog | Gmail Attachments Downloader - Productivity Tips & Guides",
    description: "Learn how to find lost Gmail attachments, organize email files, and boost productivity with our Gmail attachment management guides.",
    keywords: "find lost Gmail attachments, organize email files, Gmail attachment search, bulk download Gmail attachments, Gmail productivity extension",
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100">
            <Navbar />
            
            {/* Blog Header */}
            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-google-blue/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-google-red/5 blur-[120px] rounded-full" />
                
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 text-google-blue hover:text-google-blue/80 transition-colors mb-8 group"
                    >
                        <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                        Blog
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
                        Productivity tips, guides, and insights to help you master Gmail attachment management.
                    </p>
                </div>
            </section>

            {/* Blog Cards Grid */}
            <section className="pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {blogPosts.map((post) => (
                            <Link 
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group block"
                            >
                                <article className="h-full liquid-glass rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-google-blue/30 relative overflow-hidden">
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-google-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative z-10">
                                        {/* Category Badge */}
                                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-google-blue/10 text-google-blue text-sm font-medium mb-4">
                                            {post.category}
                                        </span>
                                        
                                        {/* Title */}
                                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-google-blue transition-colors">
                                            {post.title}
                                        </h2>
                                        
                                        {/* Hook/Excerpt */}
                                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6 line-clamp-3">
                                            {post.hook}
                                        </p>
                                        
                                        {/* Meta Info */}
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                                            <span className="inline-flex items-center gap-1.5">
                                                <HiCalendar className="w-4 h-4" />
                                                {post.date}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <HiClock className="w-4 h-4" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        
                                        {/* Read More Link */}
                                        <div className="flex items-center gap-2 text-google-blue font-semibold group-hover:gap-3 transition-all">
                                            <span>Read Article</span>
                                            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
