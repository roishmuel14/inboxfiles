"use client";

import { motion } from "framer-motion";

export default function HeroVisualization() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full"
        >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-slate-200/20 aspect-video">
                <iframe
                    src="https://www.youtube.com/embed/IidvTwqTN4Q?rel=0&modestbranding=1"
                    title="InboxFiles Chrome Extension Demo - View and download Gmail attachments"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                />
            </div>
            
            {/* Decorative glow effect */}
            <div className="absolute -inset-4 bg-google-blue/10 blur-3xl rounded-full -z-10 opacity-50" />
        </motion.div>
    );
}
