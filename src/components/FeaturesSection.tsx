"use client";

import { motion } from "framer-motion";
import { HiLightningBolt, HiViewList, HiShieldCheck } from "react-icons/hi";

const features = [
    {
        title: "Inbox Peek",
        description: "Hover over any email thread in your inbox to see a quick summary of contained files without even opening it.",
        icon: HiLightningBolt,
        color: "bg-google-blue",
    },
    {
        title: "Thread Sidebar",
        description: "A dedicated panel alongside your emails that organizes all thread files chronologically. Clear icons, sizes, and instant downloads.",
        icon: HiViewList,
        color: "bg-google-green",
    },
    {
        title: "Secure by Design",
        description: "We use official Google APIs. Your email body text remains private—we only fetch file metadata to build your organization dashboard.",
        icon: HiShieldCheck,
        color: "bg-google-yellow",
    }
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Built for productivity.
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Everything you need to regain control over your email attachments.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-google-blue/30 transition-all"
                        >
                            <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-${feature.color.split('-')[1]}/20`}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
