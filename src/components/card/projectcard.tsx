"use client"
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FiStar, FiCode, FiLayout, FiGithub, FiExternalLink, FiX, FiLayers, FiCpu } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  type: string;
  image: string;
  highlights?: string[];
  github?: string;
  demo?: string;
  details?: {
    overview: string;
    challenges: string[];
    architecture: string;
    stack: string[];
    images: string[];
  };
}

interface Props {
  projects: Project[];
}

const ProjectCard: React.FC<Props> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-sky-500/50 transition-all duration-300 shadow-lg hover:shadow-sky-900/20"
            whileHover={{ y: -5 }}
          >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
              
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700 text-xs font-medium text-sky-400">
                {project.type}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 relative">
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>

              {project.highlights && (
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-sky-500 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-500 transition-colors text-sm"
                >
                  <FiLayout /> View Details
                </button>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white transition-colors"
                  >
                    <FiGithub className="text-lg" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900">
                <div>
                  <h2 className="text-2xl font-bold text-slate-100">{selectedProject.title}</h2>
                  <p className="text-sky-400 text-sm mt-1">{selectedProject.type}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-8">
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden border border-slate-700">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-8">
                    <section>
                      <h3 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                        <FiLayout className="text-sky-500" /> Project Overview
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {selectedProject.details?.overview}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                        <FiCpu className="text-sky-500" /> Technical Challenges
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.details?.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-400">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  <div className="space-y-6">
                    <section className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
                      <h3 className="text-sm font-semibold text-slate-200 mb-4 flex items-center gap-2">
                        <FiLayers className="text-indigo-400" /> Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.details?.stack.map((tech, i) => (
                          <span key={i} className="px-2.5 py-1 text-xs font-medium bg-slate-700 text-sky-300 rounded-full border border-slate-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
                      <h3 className="text-sm font-semibold text-slate-200 mb-4">Links</h3>
                      <div className="space-y-3">
                        {selectedProject.demo && (
                          <a
                            href={selectedProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-500 transition-colors text-sm"
                          >
                            <FiExternalLink /> Live Demo
                          </a>
                        )}
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-700 text-slate-200 font-medium hover:bg-slate-600 hover:text-white transition-colors text-sm"
                          >
                            <FiGithub /> Source Code
                          </a>
                        )}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
