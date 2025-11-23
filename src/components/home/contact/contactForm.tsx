import ContactCard from '../../card/contactCard';
import { FaWhatsapp, FaSlack } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-[#0f172a] border-t border-slate-800">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sky-400 font-medium tracking-wide uppercase text-sm mb-3">
            Get in Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Let&apos;s Discuss Your Project
          </h3>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Interested in collaborating? Feel free to reach out for consulting, development, or just to say hello.
          </p>
        </div>

        <ContactCard/>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <a 
            href="https://wa.me/qr/YKXIZZ2SEKFQP1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-green-900/20 hover:border-green-500/50 transition-all group"
          >
            <FaWhatsapp className="text-2xl text-green-500 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300 font-medium">Chat on WhatsApp</span>
          </a>
          
          <a 
            href="#contact-card" 
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-purple-900/20 hover:border-purple-500/50 transition-all group"
          >
            <FaSlack className="text-2xl text-purple-500 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300 font-medium">Join Slack Community</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;