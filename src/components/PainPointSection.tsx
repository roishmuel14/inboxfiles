"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PainPointSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const rotate = useTransform(scrollYProgress, [0, 0.5], [0, -10]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.3]);

    return (
        <section ref={containerRef} className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                    Your important documents are trapped here.
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400">
                    The deeper the thread, the harder it is to find what you need.
                </p>
            </div>

            <div className="relative h-[600px] flex items-center justify-center perspective-[1000px]">
                {/* Animated Stack */}
                <div className="relative w-full max-w-lg h-96">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            style={{
                                zIndex: 20 - i,
                                translateY: i * 20,
                                scale: 1 - (i * 0.02),
                                rotateX: i * 2,
                                y: useTransform(scrollYProgress, [0, 0.5], [0, i * 40]),
                                opacity: useTransform(scrollYProgress, [0, 0.3 + (i * 0.05)], [1, 0.5 - (i * 0.04)]),
                            }}
                            className="absolute top-0 left-0 w-full h-24 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700" />
                                <div className="space-y-2">
                                    <div className="h-2 w-32 bg-slate-100 dark:bg-slate-700 rounded-full" />
                                    <div className="h-1.5 w-24 bg-slate-50 dark:bg-slate-800 rounded-full" />
                                </div>
                            </div>
                            {i % 4 === 0 && (
                                <div className="w-6 h-6 rounded-full bg-google-blue/10 flex items-center justify-center">
                                    📎
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Floating text indicators */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.1, 0.3], [0, 1]) }}
                    className="absolute top-1/2 left-[10%] -translate-y-1/2 hidden lg:block"
                >
                    <div className="p-4 glass rounded-2xl border-google-red/20 text-google-red font-bold text-sm">
                        &quot;Where is that invoice?&quot;
                    </div>
                </motion.div>

                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]) }}
                    className="absolute top-[20%] right-[10%] hidden lg:block"
                >
                    <div className="p-4 glass rounded-2xl border-google-yellow/20 text-google-yellow font-bold text-sm">
                        *Clicks Expand All*
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
