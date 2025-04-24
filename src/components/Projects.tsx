
import { useState } from 'react';
import { ExternalLink, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

type ProjectTab = 'api' | 'workflow' | 'ai' | 'ui';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectTab>('api');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = {
    api: [
      {
        title: "Document Processing API",
        description: "Developed a RESTful API using Spring Boot to handle document processing, validation, and storage with integration to multiple systems.",
        technologies: ["Spring Boot", "Java", "PostgreSQL", "Docker"],
        achievements: [
          "Reduced document processing time by 40%",
          "Implemented secure authentication and access controls",
          "Designed extensible architecture for future integrations"
        ]
      },
      {
        title: "Data Analytics Service",
        description: "Built a Django-based analytics service that processes and visualizes data from multiple sources for business insights.",
        technologies: ["Django", "Python", "Redis", "Pandas"],
        achievements: [
          "Created interactive dashboards for real-time monitoring",
          "Implemented data caching for improved performance",
          "Developed automated reporting mechanisms"
        ]
      }
    ],
    workflow: [
      {
        title: "Business Process Automation",
        description: "Implemented workflow automation solutions using Flowable to streamline document approval and processing workflows.",
        technologies: ["Flowable", "Java", "Spring Boot", "PostgreSQL"],
        achievements: [
          "Automated manual processes reducing processing time by 60%",
          "Implemented dynamic routing based on document content",
          "Created visual process monitoring interfaces"
        ]
      },
      {
        title: "FileNet Integration",
        description: "Developed integration between custom applications and IBM FileNet for document management and workflow processes.",
        technologies: ["IBM FileNet", "Java", "Spring Boot", "REST APIs"],
        achievements: [
          "Seamless integration with existing systems",
          "Improved document retrieval speed by 35%",
          "Implemented comprehensive audit logging"
        ]
      }
    ],
    ai: [
      {
        title: "Document Classification System",
        description: "Created an AI-powered system to automatically classify and route incoming documents based on content analysis.",
        technologies: ["Python", "TensorFlow", "NLP", "Spring Boot"],
        achievements: [
          "95% classification accuracy on diverse document types",
          "Reduced manual document sorting by 80%",
          "Implemented continuous learning for improved accuracy"
        ]
      },
      {
        title: "Predictive Analytics Tool",
        description: "Developed a predictive analytics tool to forecast processing bottlenecks and resource requirements.",
        technologies: ["Python", "Scikit-learn", "Django", "PostgreSQL"],
        achievements: [
          "Predicted resource needs with 85% accuracy",
          "Reduced system downtime by proactive scaling",
          "Created interactive visualization of predictions"
        ]
      }
    ],
    ui: [
      {
        title: "Process Management Dashboard",
        description: "Created a responsive Angular dashboard for monitoring and managing workflow processes across the organization.",
        technologies: ["Angular", "TypeScript", "RxJS", "Chart.js"],
        achievements: [
          "Intuitive UI resulting in 50% faster process management",
          "Real-time updates using WebSocket connections",
          "Cross-browser and mobile-responsive interface"
        ]
      },
      {
        title: "Document Viewer Application",
        description: "Built an advanced document viewer with annotation and collaboration features integrated with backend systems.",
        technologies: ["Angular", "TypeScript", "Canvas API", "Socket.io"],
        achievements: [
          "Supported multiple document formats with seamless rendering",
          "Implemented real-time collaborative editing features",
          "Integrated secure document handling and access controls"
        ]
      }
    ]
  };

  const projectTabs = [
    { id: 'api', label: 'Backend APIs' },
    { id: 'workflow', label: 'Workflows' },
    { id: 'ai', label: 'AI Projects' },
    { id: 'ui', label: 'UI Applications' },
  ];

  const currentProjects = projects[activeTab];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <section id="projects" className="section bg-tech-darkBlue">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-16">Projects & Achievements</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {projectTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as ProjectTab);
                setCurrentSlide(0);
              }}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-tech-purple text-white'
                  : 'bg-black/30 text-gray-300 hover:bg-tech-purple/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="relative bg-black/30 rounded-lg p-6 md:p-8 border border-tech-purple/30">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {currentProjects.map((project, idx) => (
                <div key={idx} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 order-2 md:order-1">
                      <h3 className="text-2xl text-white font-bold mb-4">{project.title}</h3>
                      <p className="text-gray-300 mb-6">{project.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-tech-purple font-bold mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <ArrowRight size={18} className="text-tech-purple mr-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-tech-purple font-bold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="bg-tech-purple/20 text-tech-purple px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-1 order-1 md:order-2">
                      <div className="bg-tech-darkBlue h-full rounded-lg p-5 border border-tech-purple/30">
                        <div className="flex items-center justify-center h-48 mb-4 bg-black/30 rounded-lg">
                          <div className="w-16 h-16 rounded-full bg-tech-purple/20 flex items-center justify-center">
                            <ExternalLink size={24} className="text-tech-purple" />
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-tech-purple font-bold mb-1">Project Timeline</div>
                          <div className="text-white">Feb 2023 - May 2023</div>
                          <div className="mt-4 text-sm text-gray-400">
                            {idx === 0 ? 'Led development as primary engineer' : 'Contributed as part of a collaborative team'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {currentProjects.length > 1 && (
            <div className="flex justify-center mt-8 gap-3">
              <button 
                onClick={prevSlide} 
                className="p-2 rounded-full bg-tech-darkBlue border border-tech-purple/30 hover:bg-tech-purple/20 transition-colors"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              <div className="flex gap-2 items-center">
                <div className={`w-2 h-2 rounded-full ${currentSlide === 0 ? 'bg-tech-purple' : 'bg-gray-600'}`}></div>
                <div className={`w-2 h-2 rounded-full ${currentSlide === 1 ? 'bg-tech-purple' : 'bg-gray-600'}`}></div>
              </div>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-tech-darkBlue border border-tech-purple/30 hover:bg-tech-purple/20 transition-colors"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
