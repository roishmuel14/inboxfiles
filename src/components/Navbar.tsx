"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled ? "glass border-b" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image
                        src="/images/logo.png"
                        alt="InboxFiles Logo"
                        width={36}
                        height={36}
                        className="w-9 h-9"
                    />
                    <span className="font-bold text-xl tracking-tight hidden sm:block">
                        InboxFiles
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm font-medium hover:text-google-blue transition-colors">
                        Features
                    </a>
                    <a href="#how-it-works" className="text-sm font-medium hover:text-google-blue transition-colors">
                        How it Works
                    </a>
                    <Link href="/blog" className="text-sm font-medium hover:text-google-blue transition-colors">
                        Blog
                    </Link>
                    <motion.a
                        href="https://chromewebstore.google.com/detail/gmail-thread-attachment-m/diadbgkjjgaficnklbhakleimefococg?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-google-blue text-white px-5 py-2.5 rounded-full font-semibold shadow-lg shadow-google-blue/20 hover:bg-primary-hover transition-colors"
                    >
                        <HiDownload className="w-5 h-5" />
                        Add to Chrome
                    </motion.a>
                </div>

                {/* Mobile menu could be added here, but following the core requirements first */}
                <div className="md:hidden">
                    <motion.a
                        href="https://chromewebstore.google.com/detail/gmail-thread-attachment-m/diadbgkjjgaficnklbhakleimefococg?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.95 }}
                        className="bg-google-blue text-white p-2 rounded-full"
                    >
                        <HiDownload className="w-5 h-5" />
                    </motion.a>
                </div>
            </div>
        </motion.nav>
    );
}
