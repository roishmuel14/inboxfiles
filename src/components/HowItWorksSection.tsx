"use client";

import { motion } from "framer-motion";
import { HiUserCircle, HiDatabase, HiCollection } from "react-icons/hi";

const steps = [
    {
        title: "Connect Securely",
        desc: "Sign in with Google OAuth. We never see your password.",
        icon: HiUserCircle,
    },
    {
        title: "Instant Sync",
        desc: "We fetch file metadata via official Google APIs.",
        icon: HiDatabase,
    },
    {
        title: "Extract & Save",
        desc: "Files appear in your sidebar ready for one-click download.",
        icon: HiCollection,
    }
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
                    <p className="text-slate-600 dark:text-slate-400">Zero configuration. Pure efficiency.</p>
                </div>

                <div className="relative grid md:grid-cols-3 gap-12">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.75rem] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-google-blue/20 -z-10">
                        <motion.div
                            animate={{ x: ["0%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="h-full w-20 bg-gradient-to-r from-transparent via-google-blue to-transparent"
                        />
                    </div>

                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.3 }}
                                className="w-20 h-20 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-50 dark:border-slate-900 shadow-xl flex items-center justify-center text-google-blue mb-8 relative z-10"
                            >
                                <step.icon className="w-10 h-10" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-google-blue text-white text-xs font-bold flex items-center justify-center">
                                    {i + 1}
                                </div>
                            </motion.div>
                            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 max-w-xs transition-colors">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
