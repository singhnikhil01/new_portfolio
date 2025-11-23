"use client";
import { motion } from "framer-motion";
import { FiMonitor, FiServer, FiCpu, FiLayout, FiSmartphone, FiDatabase } from "react-icons/fi";

const ServicesSection = () => {
  const services = [
    {
      title: "AI & LLM Solutions",
      description: "Developing custom Large Language Model applications and Agentic AI systems. I specialize in fine-tuning, RAG pipelines, and integrating AI to automate complex workflows.",
      icon: <FiCpu className="w-8 h-8" />,
      tags: ["LLMs", "LangChain", "OpenAI", "Vector DBs"]
    },
    {
      title: "Computer Vision",
      description: "Building advanced vision systems for object detection, recognition, and analysis. Leveraging state-of-the-art models to extract meaningful insights from visual data.",
      icon: <FiMonitor className="w-8 h-8" />,
      tags: ["OpenCV", "YOLO", "PyTorch", "Image Processing"]
    },
    {
      title: "Microservices Architecture",
      description: "Designing scalable, distributed systems using microservices patterns. Ensuring high availability, fault tolerance, and seamless communication between services.",
      icon: <FiServer className="w-8 h-8" />,
      tags: ["Kubernetes", "Docker", "gRPC", "Message Queues"]
    },
    {
      title: "Full-Stack Engineering",
      description: "End-to-end web application development using modern frameworks. Creating responsive, performant, and secure applications with a focus on user experience.",
      icon: <FiLayout className="w-8 h-8" />,
      tags: ["Next.js", "React", "Node.js", "TypeScript"]
    },
    {
      title: "NLP & Text Analysis",
      description: "Implementing Natural Language Processing solutions for sentiment analysis, text classification, and information extraction to derive value from unstructured text.",
      icon: <FiDatabase className="w-8 h-8" />,
      tags: ["NLTK", "Spacy", "Transformers", "BERT"]
    },
    {
      title: "Mobile AI Integration",
      description: "Bringing AI capabilities to mobile devices. Developing cross-platform apps that leverage on-device ML for real-time intelligence and enhanced user interactions.",
      icon: <FiSmartphone className="w-8 h-8" />,
      tags: ["React Native", "TensorFlow Lite", "CoreML", "Expo"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-16 bg-[#0f172a] border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sky-400 font-medium tracking-wide uppercase text-sm mb-3">
            Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-50">
            What I Do
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-800/30 border border-slate-700 hover:bg-slate-800 hover:border-sky-500/30 transition-all duration-300"
            >
              <div className="mb-6 p-4 rounded-xl bg-slate-900 w-fit text-sky-400 group-hover:text-sky-300 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-sky-900/10">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">
                {service.title}
              </h4>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/50">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;