"use client";

import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

export function FinalCTA() {
    return (
        <section className="py-24 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-google-blue rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden shadow-2xl shadow-google-blue/40"
                >
                    {/* Decorative circles */}
                    <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-google-yellow/20 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
                            Stop digging, start downloading.
                        </h2>
                        <p className="text-xl text-blue-50 mb-12 max-w-2xl mx-auto">
                            Ready to clear the clutter? Install Gmail Attachments Downloader for free today and save hours of frustration.
                        </p>
                        <motion.a
                            href="https://chromewebstore.google.com/detail/gmail-thread-attachment-m/diadbgkjjgaficnklbhakleimefococg?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-google-blue px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-3"
                        >
                            <HiDownload className="w-6 h-6" />
                            Add to Chrome - It&apos;s Free
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-google-blue flex items-center justify-center text-white text-[10px] font-bold">
                        G
                    </div>
                    <span className="font-bold text-slate-900 dark:text-white">GmailAttachments</span>
                </div>

                <div className="flex gap-8 text-sm font-medium text-slate-500">
                    <a href="#" className="hover:text-google-blue transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-google-blue transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-google-blue transition-colors">Contact</a>
                </div>

                <div className="text-sm text-slate-400">
                    © {new Date().getFullYear()} Gmail Attachments Downloader. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
