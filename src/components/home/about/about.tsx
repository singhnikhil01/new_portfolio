"use client";

import { motion } from "framer-motion";
import { FiCpu, FiCode, FiGlobe, FiCamera, FiBook, FiCoffee } from "react-icons/fi";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#0f172a] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-800/20 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sky-400 font-medium tracking-wide uppercase text-sm">
                About Me
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-50 leading-tight">
                Architecting the Future of <br />
                <span className="text-slate-400">Digital Innovation</span>
              </h3>
              <div className="w-20 h-1 bg-sky-500 rounded-full" />
            </div>

            <p className="text-lg text-slate-400 leading-relaxed">
              I am a Full-Stack Engineer and AI Specialist dedicated to building scalable, high-performance applications. With a deep understanding of modern architectures and cloud ecosystems, I bridge the gap between complex technical requirements and intuitive user experiences.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <FiCode className="text-2xl text-sky-400 mb-3" />
                <h4 className="font-semibold text-slate-200 mb-1">Clean Code</h4>
                <p className="text-sm text-slate-500">Maintainable & Scalable</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <FiCpu className="text-2xl text-indigo-400 mb-3" />
                <h4 className="font-semibold text-slate-200 mb-1">AI Integration</h4>
                <p className="text-sm text-slate-500">Smart Solutions</p>
              </div>
            </div>
          </motion.div>

          {/* Stats / Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 shadow-xl">
              <h4 className="text-xl font-semibold text-slate-50 mb-6 flex items-center gap-2">
                <FiGlobe className="text-sky-400" /> Core Competencies
              </h4>
              <ul className="space-y-4">
                {[
                  { label: "Full-Stack Development", val: "95%" },
                  { label: "Cloud Architecture (AWS)", val: "85%" },
                  { label: "Machine Learning Integration", val: "90%" },
                  { label: "System Design", val: "88%" }
                ].map((skill, i) => (
                  <li key={i} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-slate-400">
                      <span>{skill.label}</span>
                      <span className="text-slate-200">{skill.val}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.val }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-sky-500 to-indigo-500" 
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700"
        >
          <h3 className="text-2xl font-bold text-slate-50 mb-6">Development Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Clarity over Cleverness", desc: "Maintainable code beats fancy shortcuts." },
              { title: "User-Centric Execution", desc: "Technology should serve people, not the reverse." },
              { title: "Ethical Innovation", desc: "Build solutions that make the web better for everyone." }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <h4 className="font-semibold text-sky-400">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interests Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <FiCamera />, title: "Photography", desc: "Capturing urban narratives & film photography." },
            { icon: <FiBook />, title: "Continuous Learning", desc: "Exploring Rust, Generative AI Ethics & Sustainability." },
            { icon: <FiCoffee />, title: "Coffee & Music", desc: "Specialty pour-overs & synthwave playlists." }
          ].map((interest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:bg-slate-800 transition-colors"
            >
              <div className="text-2xl text-sky-500 mb-4">{interest.icon}</div>
              <h4 className="font-semibold text-slate-200 mb-2">{interest.title}</h4>
              <p className="text-sm text-slate-400">{interest.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
