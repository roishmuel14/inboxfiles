"use client";

import { motion } from "framer-motion";
import { HiPaperClip, HiOutlineDocumentText, HiOutlinePhotograph, HiOutlineArchive, HiDownload } from "react-icons/hi";
import { cn } from "@/lib/utils";

export default function HeroVisualization() {
    return (
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-4 p-2 md:p-4">
            {/* Before Section */}
            <div className="w-full md:flex-1 aspect-[4/3] md:h-full border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-6 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/50">
                <div className="absolute top-4 left-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Without Extension</div>

                <div className="mt-8 space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="w-full h-10 md:h-12 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex items-center px-4 gap-3 relative"
                            style={{ marginLeft: i * 4 }}
                        >
                            <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 flex-shrink-0" />
                            <div className="flex-1 space-y-2">
                                <div className="h-2 w-2/3 bg-slate-100 dark:bg-slate-700 rounded-full" />
                                <div className="h-1.5 w-1/2 bg-slate-50 dark:bg-slate-800 rounded-full" />
                            </div>
                            {i === 4 && (
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="absolute -right-1 -top-1"
                                >
                                    <HiPaperClip className="w-4 h-4 text-slate-400" />
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                    <div className="flex justify-center pt-2">
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 2.5 }}
                            className="text-3xl md:text-4xl"
                        >
                            😫
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Arrow */}
            <div className="flex md:flex-col items-center justify-center transform rotate-90 md:rotate-0 my-2">
                <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-8 h-8 rounded-full bg-google-blue/10 flex items-center justify-center"
                >
                    <div className="w-4 h-4 border-t-2 border-r-2 border-google-blue rotate-45 ml-[-4px]" />
                </motion.div>
            </div>

            {/* After Section */}
            <div className="w-full md:flex-1 aspect-[4/3] md:h-full border-2 border-google-blue/20 rounded-3xl p-6 relative bg-white dark:bg-slate-900 shadow-2xl shadow-google-blue/5 overflow-hidden">
                <div className="absolute top-4 left-6 text-xs font-bold text-google-blue uppercase tracking-widest">With Extension</div>

                <div className="mt-8 space-y-3">
                    {[
                        { name: "invoice_2023.pdf", icon: HiOutlineDocumentText, color: "text-red-500", bg: "bg-red-50" },
                        { name: "design_mockup.png", icon: HiOutlinePhotograph, color: "text-google-blue", bg: "bg-blue-50" },
                        { name: "assets_bundle.zip", icon: HiOutlineArchive, color: "text-google-yellow", bg: "bg-yellow-50" },
                    ].map((file, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 + (i * 0.15) }}
                            className="flex items-center gap-3 p-2 md:p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
                        >
                            <div className={cn("w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center", file.bg)}>
                                <file.icon className={cn("w-5 h-5 md:w-6 md:h-6", file.color)} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-xs md:text-sm font-semibold truncate">{file.name}</div>
                                <div className="text-[10px] text-slate-400">Received 2 hours ago</div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-google-blue text-white flex items-center justify-center flex-shrink-0"
                            >
                                <HiDownload className="w-3 md:w-4 h-3 md:h-4" />
                            </motion.button>
                        </motion.div>
                    ))}
                    <div className="flex justify-center pt-2">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-3xl md:text-4xl"
                        >
                            🤩
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
