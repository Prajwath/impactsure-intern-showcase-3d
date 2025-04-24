
import { Calendar, Clock, Code2, Users } from 'lucide-react';

const Role = () => {
  return (
    <section id="role" className="section bg-tech-darkBlue">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-16">My Role & Responsibilities</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="bg-black/30 rounded-lg p-6 border border-tech-purple/30 h-full">
              <h3 className="text-2xl font-bold text-white mb-4">Software Developer Intern</h3>
              <div className="flex items-center mb-3">
                <Calendar className="text-tech-purple mr-2" size={20} />
                <span className="text-gray-300">January 2023 - June 2023</span>
              </div>
              <div className="flex items-center mb-3">
                <Clock className="text-tech-purple mr-2" size={20} />
                <span className="text-gray-300">Full-time (6 months)</span>
              </div>
              <div className="flex items-center">
                <Users className="text-tech-purple mr-2" size={20} />
                <span className="text-gray-300">Engineering Department</span>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-xl font-bold text-tech-purple mb-3">Primary Focus Areas</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Backend Development</li>
                  <li>Frontend Solutions</li>
                  <li>Machine Learning Integration</li>
                  <li>Process Automation</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-black/30 rounded-lg p-6 border border-tech-purple/30 h-full">
              <h3 className="text-2xl font-bold text-white mb-4">Key Responsibilities</h3>
              
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-tech-purple rounded-full"></div>
                  <div className="border-l-2 border-tech-purple/50 pl-6 pb-6">
                    <h4 className="text-xl text-tech-purple font-medium">Backend Development</h4>
                    <p className="text-gray-300 mt-2">Designed and implemented RESTful APIs using Spring Boot and Django, integrated with database systems, and ensured secure authentication mechanisms.</p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-tech-purple rounded-full"></div>
                  <div className="border-l-2 border-tech-purple/50 pl-6 pb-6">
                    <h4 className="text-xl text-tech-purple font-medium">Frontend Integration</h4>
                    <p className="text-gray-300 mt-2">Collaborated with UI/UX designers to implement responsive interfaces using Angular, ensuring smooth integration with backend services.</p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-tech-purple rounded-full"></div>
                  <div className="border-l-2 border-tech-purple/50 pl-6 pb-6">
                    <h4 className="text-xl text-tech-purple font-medium">AI Model Implementation</h4>
                    <p className="text-gray-300 mt-2">Assisted in developing and integrating AI models for data analysis, document processing, and predictive analytics.</p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-tech-purple rounded-full"></div>
                  <div className="pl-6">
                    <h4 className="text-xl text-tech-purple font-medium">Workflow Automation</h4>
                    <p className="text-gray-300 mt-2">Developed automated workflows using Flowable to streamline business processes and increase operational efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-black/30 rounded-lg p-8 border border-tech-purple/30">
          <h3 className="text-2xl font-bold text-white mb-6">Daily Activities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-tech-darkBlue p-4 rounded-lg border border-tech-purple/30">
              <div className="text-tech-purple font-bold mb-2">Morning</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Daily stand-up meetings</li>
                <li>• Code reviews</li>
                <li>• Sprint planning (Mondays)</li>
                <li>• Development tasks</li>
              </ul>
            </div>
            
            <div className="bg-tech-darkBlue p-4 rounded-lg border border-tech-purple/30">
              <div className="text-tech-purple font-bold mb-2">Midday</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Collaborative coding</li>
                <li>• Technical discussions</li>
                <li>• Debugging sessions</li>
                <li>• Documentation</li>
              </ul>
            </div>
            
            <div className="bg-tech-darkBlue p-4 rounded-lg border border-tech-purple/30">
              <div className="text-tech-purple font-bold mb-2">Afternoon</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Implementation & testing</li>
                <li>• Integration work</li>
                <li>• API development</li>
                <li>• Learning new technologies</li>
              </ul>
            </div>
            
            <div className="bg-tech-darkBlue p-4 rounded-lg border border-tech-purple/30">
              <div className="text-tech-purple font-bold mb-2">Weekly</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Progress reports</li>
                <li>• Technical presentations</li>
                <li>• Knowledge sharing</li>
                <li>• Retrospective meetings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Role;
