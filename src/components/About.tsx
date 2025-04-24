
import { Monitor, Code, BrainCircuit } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section gradientBg">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-16">About Impactsure</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="section-subheading">Company Overview</h3>
            <p className="text-gray-300 mb-6">
              Impactsure Technologies Private Limited is a leading innovative technology company 
              specializing in Data, AI, and Digital Transformation solutions. With a focus on
              cutting-edge technologies, Impactsure delivers impactful solutions that help
              businesses transform their digital presence and operational efficiency.
            </p>
            <p className="text-gray-300">
              Based in Goa, India, the company maintains a global presence, serving clients across
              multiple industries and regions with customized technology solutions designed to
              address specific business challenges.
            </p>
          </div>
          <div className="bg-tech-darkBlue/50 backdrop-blur-sm p-6 rounded-lg border border-tech-purple/30">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-tech-purple/20 flex items-center justify-center mr-4">
                <div className="w-8 h-8 rounded-full bg-tech-purple flex items-center justify-center">
                  <span className="text-white font-bold">I</span>
                </div>
              </div>
              <div>
                <h4 className="text-xl text-white font-bold">Impactsure Technologies</h4>
                <p className="text-gray-400">Goa, India</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="text-center">
                <p className="text-tech-purple text-xl font-bold">2023</p>
                <p className="text-gray-400 text-sm">Established</p>
              </div>
              <div className="text-center">
                <p className="text-tech-purple text-xl font-bold">50+</p>
                <p className="text-gray-400 text-sm">Team Members</p>
              </div>
              <div className="text-center">
                <p className="text-tech-purple text-xl font-bold">Global</p>
                <p className="text-gray-400 text-sm">Presence</p>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="section-subheading text-center mb-10">Services & Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-tech-darkBlue/50 backdrop-blur-sm p-6 rounded-lg border border-tech-purple/30 hover:border-tech-purple transition-all duration-300">
            <div className="w-16 h-16 bg-tech-purple/20 rounded-lg flex items-center justify-center mb-4">
              <Monitor size={32} className="text-tech-purple" />
            </div>
            <h4 className="text-xl text-white font-bold mb-2">Digital Transformation</h4>
            <p className="text-gray-300">
              Comprehensive digital solutions to streamline operations and enhance digital presence
              through modern technologies and efficient processes.
            </p>
          </div>
          
          <div className="bg-tech-darkBlue/50 backdrop-blur-sm p-6 rounded-lg border border-tech-purple/30 hover:border-tech-purple transition-all duration-300">
            <div className="w-16 h-16 bg-tech-purple/20 rounded-lg flex items-center justify-center mb-4">
              <Code size={32} className="text-tech-purple" />
            </div>
            <h4 className="text-xl text-white font-bold mb-2">Data Services</h4>
            <p className="text-gray-300">
              Advanced data management, analytics, and visualization solutions to help businesses
              make informed decisions based on accurate and timely data insights.
            </p>
          </div>
          
          <div className="bg-tech-darkBlue/50 backdrop-blur-sm p-6 rounded-lg border border-tech-purple/30 hover:border-tech-purple transition-all duration-300">
            <div className="w-16 h-16 bg-tech-purple/20 rounded-lg flex items-center justify-center mb-4">
              <BrainCircuit size={32} className="text-tech-purple" />
            </div>
            <h4 className="text-xl text-white font-bold mb-2">AI Solutions</h4>
            <p className="text-gray-300">
              Cutting-edge artificial intelligence solutions including machine learning models,
              natural language processing, and AI-driven automation for enhanced efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
