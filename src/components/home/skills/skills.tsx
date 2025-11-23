"use client";
import { motion } from "framer-motion";
import { SiReact,  SiDocker, SiAwslambda, SiTensorflow, SiTypescript, SiNextdotjs, SiPostgresql, SiKubernetes, SiGit, SiNodedotjs, SiLinux, SiTerraform, SiOpencv, SiPandas, SiPytorch, SiOpenai } from "react-icons/si";
import { FiCpu, FiServer } from "react-icons/fi";

const SkillSection = () => {
  const categories = [
    {
      name: "AI & Machine Learning",
      icon: <SiTensorflow className="w-6 h-6" />,
      skills: [
        { name: "Computer Vision", icon: <SiOpencv /> },
        { name: "LLMs", icon: <SiOpenai /> },
        { name: "Agentic AI", icon: <FiCpu /> },
        { name: "NLP", icon: <SiPytorch /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Pandas", icon: <SiPandas /> },
      ]
    },
    {
      name: "Full Stack & Microservices",
      icon: <FiServer className="w-6 h-6" />,
      skills: [
        { name: "Microservices", icon: <SiKubernetes /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ]
    },
    {
      name: "DevOps & Cloud",
      icon: <SiDocker className="w-6 h-6" />,
      skills: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "AWS", icon: <SiAwslambda /> },
        { name: "Terraform", icon: <SiTerraform /> },
        { name: "Linux", icon: <SiLinux /> },
        { name: "Git", icon: <SiGit /> },
      ]
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-16 bg-[#0f172a] border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sky-400 font-medium tracking-wide uppercase text-sm mb-3">
            Technical Proficiency
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-50">
            Technology Stack
          </h3>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-800 text-sky-400 group-hover:text-sky-300 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-sky-900/10">
                  {category.icon}
                </div>
                <h4 className="font-bold text-slate-200">{category.name}</h4>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50 border border-slate-700/50 hover:border-sky-500/30 transition-colors"
                  >
                    <span className="text-sky-500 text-lg">{skill.icon}</span>
                    <span className="text-xs font-medium text-slate-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;