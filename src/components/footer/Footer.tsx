"use client";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const FooterSection = () => {
  const quickLinks = [
    { name: "Home", url: "#hero" },
    { name: "About", url: "#about" },
    { name: "What I Do", url: "#services" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/singhnikhil01",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/nikhilkumarsingh",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/NikhilSing45602",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/singh__sansar",
    },
  ];

  return (
    <footer className="bg-[#0f172a] text-slate-300 border-t border-slate-800 relative overflow-hidden pt-16 pb-8">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-slate-100">Nikhil Singh</h3>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Building intelligent digital solutions with a focus on AI, scalability, and user experience.
              </p>
            </motion.div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: "#38bdf8" }}
                  className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all text-slate-400"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-100">Navigation</h3>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.url}
                    className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-100">Contact</h3>
            <address className="not-italic space-y-4 text-sm">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-start space-x-3"
              >
                <FaPhone className="w-4 h-4 text-sky-500 mt-1 flex-shrink-0" />
                <a href="tel:+917481030330" className="text-slate-400 hover:text-sky-400 transition-colors">
                  +91 7481030330
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-start space-x-3"
              >
                <FaEnvelope className="w-4 h-4 text-sky-500 mt-1 flex-shrink-0" />
                <a href="mailto:singhnikhil03@outlook.com" className="text-slate-400 hover:text-sky-400 transition-colors">
                  singhnikhil03@outlook.com
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-start space-x-3"
              >
                <FaMapMarkerAlt className="w-4 h-4 text-sky-500 mt-1 flex-shrink-0" />
                <span className="text-slate-400">Kerala, India</span>
              </motion.div>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} Nikhil Singh. All rights reserved.
          </p>
          
          <div className="text-slate-500 flex items-center gap-1">
            Made with <span className="text-red-500 animate-pulse">❤</span> using Next.js & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

