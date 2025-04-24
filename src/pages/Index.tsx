
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Scene from '@/components/Scene';
import About from '@/components/About';
import Role from '@/components/Role';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import { ArrowDown, Linkedin, Mail, Github, ChevronRight } from 'lucide-react';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-tech-darkBlue z-50">
        <div className="text-4xl font-bold text-tech-purple mb-8 font-poppins">IMPACTSURE</div>
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-tech-purple rounded-full animate-pulse" style={{ width: '60%' }}></div>
        </div>
        <div className="text-white mt-4">Loading experience...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tech-darkBlue text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-20 relative gradientBg overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <div className="inline-block px-4 py-2 bg-tech-purple/20 rounded-full text-tech-purple font-semibold mb-6 animate-fade-in">
                Internship Showcase
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Software Developer Intern at <span className="text-tech-purple">Impactsure</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
                Exploring the intersection of AI, data, and digital transformation through real-world projects and challenges.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
                <a href="#about" className="button-primary flex items-center gap-2">
                  Explore Journey <ChevronRight size={18} />
                </a>
                <a href="#projects" className="button-secondary">
                  View Projects
                </a>
              </div>
            </div>
            <div className="order-first md:order-last">
              <Scene />
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <ArrowDown size={32} className="text-tech-purple" />
          </div>
        </div>
      </section>
      
      <About />
      <Role />
      <Skills />
      <Projects />
      
      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
            <div className="flex justify-center gap-6 mb-10">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-tech-purple/20 flex items-center justify-center hover:bg-tech-purple hover:text-white transition-colors"
              >
                <Linkedin size={24} className="text-tech-purple hover:text-white" />
              </a>
              <a 
                href="mailto:internship@example.com" 
                className="w-12 h-12 rounded-full bg-tech-purple/20 flex items-center justify-center hover:bg-tech-purple hover:text-white transition-colors"
              >
                <Mail size={24} className="text-tech-purple hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-tech-purple/20 flex items-center justify-center hover:bg-tech-purple hover:text-white transition-colors"
              >
                <Github size={24} className="text-tech-purple hover:text-white" />
              </a>
            </div>
            <p className="text-gray-400">
              Built with React, Three.js, and Tailwind CSS | &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
