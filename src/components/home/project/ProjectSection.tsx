"use client";
import { motion } from 'framer-motion';
import ProjectCard from '../../card/projectcard';
import { FiExternalLink } from 'react-icons/fi';
import { projectsData as projects } from '@/constants/education';

const ProjectShowcase = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#0f172a] border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sky-400 font-medium tracking-wide uppercase text-sm mb-3">
            Engineering Showcase
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-50">
            Featured Projects
          </h3>
        </motion.div>

        <ProjectCard projects={projects}/>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* <a
            href="/projects"
            className="flex items-center gap-2 px-8 py-3 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-500 transition-all hover:gap-3 shadow-lg shadow-sky-900/20"
          >
            Explore More Projects
            <FiExternalLink className="text-lg" />
          </a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;