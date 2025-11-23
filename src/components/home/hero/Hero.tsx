"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a] pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-300">Available for freelance & full-time</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-medium text-slate-400">Hello, I&apos;m</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight">
                Nikhil Singh
              </h1>
              <div className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 h-[60px]">
                <TypeAnimation
                  sequence={[
                    "Full-Stack Engineer",
                    1000,
                    "AI Specialist",
                    1000,
                    "System Architect",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </div>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              I build pixel-perfect, engaging, and accessible digital experiences. With a strong foundation in both frontend aesthetics and backend logic, I create scalable solutions that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contact"
                className="px-8 py-4 rounded-full bg-sky-600 text-white font-semibold hover:bg-sky-500 transition-all shadow-lg shadow-sky-900/20"
              >
                Hire Me
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="px-8 py-4 rounded-full bg-slate-800 text-slate-200 font-semibold border border-slate-700 hover:bg-slate-700 transition-all flex items-center gap-2"
              >
                <FiDownload /> Download CV
              </a>
            </div>

            <div className="pt-8 flex items-center gap-6 text-slate-400">
              <span className="text-sm font-medium uppercase tracking-wider">Find me on</span>
              <div className="h-px w-12 bg-slate-700" />
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors text-xl"><FiGithub /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors text-xl"><FiLinkedin /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors text-xl"><FiTwitter /></a>
                <a href="mailto:contact@nikhil.com" className="hover:text-sky-400 transition-colors text-xl"><FiMail /></a>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-[300px] h-[360px] md:w-[400px] md:h-[480px] lg:w-[500px] lg:h-[600px]">
              {/* Geometric Frame */}
              <div className="absolute inset-0 border-2 border-slate-700 rounded-2xl transform rotate-6 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 border-2 border-slate-700/50 rounded-2xl transform -rotate-6 -translate-x-4 -translate-y-4" />
              
              {/* Main Image Container */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-slate-800 shadow-2xl">
                <Image
                  src="/images/nikhil.png"
                  alt="Nikhil Singh"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-[-10px] lg:right-[-20px] p-4 bg-slate-800/90 backdrop-blur-md border border-slate-600 rounded-xl shadow-xl max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs font-bold text-slate-200">Current Focus</span>
                </div>
                <p className="text-xs text-slate-400">Building AI-driven SaaS platforms for enterprise scalability.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

