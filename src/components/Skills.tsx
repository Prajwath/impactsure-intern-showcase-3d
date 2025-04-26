
import { useState } from 'react';
import { Layers, Code, Landmark, BrainCircuit } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

type SkillCategory = 'backend' | 'frontend' | 'workflow' | 'ai';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('backend');
  
  const categories = [
    { id: 'backend', name: 'Backend Development', icon: <Layers size={24} /> },
    { id: 'frontend', name: 'Frontend Development', icon: <Code size={24} /> },
    { id: 'workflow', name: 'Workflow Automation', icon: <Landmark size={24} /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <BrainCircuit size={24} /> },
  ];
  
  const skillsByCategory = {
    backend: [
      { name: 'Spring Boot', level: 90, description: 'Developed RESTful APIs and microservices using Spring Boot.' },
      { name: 'Django', level: 85, description: 'Built backend systems and integrated with databases using Django.' },
      { name: 'Java', level: 85, description: 'Primary language for Spring Boot development and enterprise applications.' },
      { name: 'Python', level: 80, description: 'Used for Django development, data processing, and AI integration.' },
      { name: 'SQL & Databases', level: 75, description: 'Experience with relational databases, query optimization, and data modeling.' }
    ],
    frontend: [
      { name: 'Angular', level: 80, description: 'Developed responsive user interfaces and single-page applications.' },
      { name: 'TypeScript', level: 75, description: 'Used for type-safe web application development.' },
      { name: 'HTML/CSS', level: 85, description: 'Created responsive layouts and styled components.' },
      { name: 'UI/UX Design', level: 70, description: 'Collaborated with designers to implement user-friendly interfaces.' }
    ],
    workflow: [
      { name: 'Flowable', level: 85, description: 'Implemented business process automation using Flowable BPM.' },
      { name: 'FileNet', level: 75, description: 'Content management and workflow automation using IBM FileNet.' },
      { name: 'Process Modeling', level: 80, description: 'Designed and optimized business processes for automation.' }
    ],
    ai: [
      { name: 'Machine Learning', level: 70, description: 'Implemented ML models for document processing and data analytics.' },
      { name: 'Ollama', level: 75, description: 'Utilized local AI models for various applications.' },
      { name: 'Data Analysis', level: 80, description: 'Analyzed and processed data for AI model training and insights.' }
    ]
  };

  return (
    <section id="skills" className="section gradientBg">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Technical Skills</h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          During my internship at Impactsure, I had the opportunity to work with various technologies
          and develop a diverse set of technical skills across different domains.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as SkillCategory)}
                  className={`flex items-center w-full p-4 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-tech-purple text-white'
                      : 'bg-tech-darkBlue/50 text-gray-300 hover:bg-tech-purple/20'
                  }`}
                >
                  <div className={`mr-3 ${activeCategory === category.id ? 'text-white' : 'text-tech-purple'}`}>
                    {category.icon}
                  </div>
                  <span className="text-left font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-tech-darkBlue/50 backdrop-blur-sm p-6 rounded-lg border border-tech-purple/30">
              <h3 className="text-2xl text-white font-bold mb-6">
                {categories.find(c => c.id === activeCategory)?.name} Skills
              </h3>
              
              <div className="space-y-8">
                {skillsByCategory[activeCategory].map((skill, index) => (
                  <div key={index} className="animate-fade-in">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg text-white font-medium">{skill.name}</h4>
                      <span className="text-tech-purple font-bold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 mb-2" />
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 bg-black/30 p-6 rounded-lg border border-tech-purple/30">
              <h4 className="text-xl text-tech-purple font-bold mb-4">Tools & Environments</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-tech-darkBlue/80 p-3 rounded-lg text-center">
                  <span className="text-white">PyCharm</span>
                </div>
                <div className="bg-tech-darkBlue/80 p-3 rounded-lg text-center">
                  <span className="text-white">STS</span>
                </div>
                <div className="bg-tech-darkBlue/80 p-3 rounded-lg text-center">
                  <span className="text-white">VS Code</span>
                </div>
                <div className="bg-tech-darkBlue/80 p-3 rounded-lg text-center">
                  <span className="text-white">Git</span>
                </div>
                <div className="bg-tech-darkBlue/80 p-3 rounded-lg text-center">
                  <span className="text-white">SFTP</span>
                </div>
                <div className="bg-tech-darkBlue/80 p-3 rounded-lg text-center">
                  <span className="text-white">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
