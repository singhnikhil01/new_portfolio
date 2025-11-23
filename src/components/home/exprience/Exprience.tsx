"use client";
import { motion } from "framer-motion";
import {  FiCalendar } from "react-icons/fi";
import { experienceData } from "@/constants/expritence";

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#0f172a] border-t border-slate-800">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sky-400 font-medium tracking-wide uppercase text-sm mb-3">
            Career Path
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-50">
            Professional Experience
          </h3>
        </motion.div>

        <div className="relative border-l border-slate-700 ml-4 md:ml-6 space-y-12">
          {experienceData.timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-sky-500 ring-4 ring-slate-900" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-xl font-bold text-slate-100">{item.role}</h4>
                <div className="flex items-center gap-2 text-sm text-slate-400 mt-1 sm:mt-0">
                  <FiCalendar className="text-sky-400" />
                  <span>{item.duration}</span>
                </div>
              </div>
              
              <div className="text-sky-400 font-medium mb-4">{item.company}</div>
              
              <ul className="space-y-2 mb-4">
                {item.contributions.map((contribution, i) => (
                  <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                    {contribution}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;