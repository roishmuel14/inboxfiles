"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        step: 1,
        title: "View and Download Gmail Attachments",
        desc: "Click the 'Attachments' button that appears next to any email with files. It integrates seamlessly into your Gmail inbox.",
        image: "/images/step1-attachments-button.png",
    },
    {
        step: 2,
        title: "Attachments View",
        desc: "Instantly see all files in the thread organized by sender and date. Download any file with a single click.",
        image: "/images/step2-attachments-view.png",
    }
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                            How it works
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Two simple steps to organize all your email attachments. No configuration needed.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-20">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 text-center lg:text-left">
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <span className="w-12 h-12 rounded-full bg-google-blue text-white font-bold text-xl flex items-center justify-center shadow-lg shadow-google-blue/30">
                                        {step.step}
                                    </span>
                                    <span className="text-sm font-semibold text-google-blue uppercase tracking-wider">
                                        Step {step.step}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="flex-[1.5] w-full">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white"
                                >
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={1200}
                                        height={750}
                                        className="w-full h-auto"
                                        priority={i === 0}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
