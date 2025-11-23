"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { educationData } from "@/constants/education";

export default function EducationSection() {
    return (
        <section className="py-24 px-6 md:px-16 bg-[#0f172a]">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sky-400 font-medium tracking-wide uppercase text-sm mb-3">
                        Academic Background
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-50">
                        Education
                    </h3>
                </motion.div>

                <div className="grid gap-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 hover:border-sky-500/30 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-slate-800 text-sky-400">
                                        <FaGraduationCap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-100">{edu.title}</h3>
                                        <p className="text-sky-400">{edu.institution}</p>
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full self-start">
                                    {edu.year}
                                </span>
                            </div>

                            <ul className="space-y-2">
                                {edu.highlights.map((highlight, i) => (
                                    <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}