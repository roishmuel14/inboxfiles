"use client";

import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import HeroVisualization from "./HeroVisualization";

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-google-blue/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-google-red/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                            The "View All Attachments" {" "}
                            <span className="text-google-blue underline decoration-google-blue/20 underline-offset-8">
                                Button
                            </span>{" "}
                            Gmail Forgot.
                        </h1>
                        <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
                            Instantly see and download every attachment buried in long email conversations.
                            No more clicking &quot;expand&quot; twenty times just to find one PDF.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <motion.a
                                href="https://chromewebstore.google.com/detail/gmail-thread-attachment-m/diadbgkjjgaficnklbhakleimefococg?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-google-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-google-blue/30 hover:bg-primary-hover transition-all"
                            >
                                <HiDownload className="w-6 h-6" />
                                Add to Chrome - It&apos;s Free
                            </motion.a>
                            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px]">
                                            👤
                                        </div>
                                    ))}
                                </div>
                                <span>Trusted by 5,000+ users</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex-1 w-full max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <HeroVisualization />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
