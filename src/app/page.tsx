// app/page.tsx
import Hero from '@/components/home/hero/Hero';
import About from '@/components/home/about/about';
import SkillSection from "@/components/home/skills/skills";
import ServicesSection from '@/components/home/service/services';
import ExperienceSection from '@/components/home/exprience/Exprience';
import EducationTimeline from "@/components/home/education/educationSection";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/home/project/ProjectSection";
import ContactSection from '@/components/home/contact/contactForm';
import FooterSection from '@/components/footer/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-[#0f172a] text-slate-200">
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="services" className="scroll-mt-20">
        <ServicesSection />
      </section>

      <section id="skills" className="scroll-mt-20">
        <SkillSection />
      </section>

      <section id="experience" className="scroll-mt-20">
        <ExperienceSection />
      </section>

      <section id="education" className="scroll-mt-20">
        <EducationTimeline />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-20">
        <ContactSection />
      </section>

      <FooterSection />
    </main>
  );
}