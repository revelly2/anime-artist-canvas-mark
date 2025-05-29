
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Student Todo List",
      description: "A comprehensive task management application for students with smart organization features, priority levels, and due date tracking.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
      image: "/lovable-uploads/f6ac1d98-05a6-41cf-8eb4-e1a107b4f320.png",
      github: "#",
      live: "https://study-streak-todo.vercel.app/"
    },
    {
      title: "Calculator App",
      description: "A sleek and functional calculator application with basic arithmetic operations, memory functions, and a responsive design for all devices.",
      tech: ["React", "JavaScript", "CSS3", "Math.js"],
      image: "/lovable-uploads/4b865728-b6d0-429b-9f15-fb7a8b653063.png",
      github: "https://github.com/markdaluson/calculator-app",
      live: "https://fluffy-pink-math-magic.vercel.app/"
    },
    {
      title: "Currency Converter",
      description: "A real-time currency converter supporting PHP to multiple currencies (USD, CNY, EUR, JPY) with live exchange rates and intuitive interface.",
      tech: ["React", "TypeScript", "API Integration", "Tailwind CSS"],
      image: "/lovable-uploads/27a1477d-9bf6-47f4-a51d-31cc38a0102e.png",
      github: "https://github.com/markdaluson/currency-converter",
      live: "https://phpconverter-sigma.vercel.app/"
    },
    {
      title: "Employee Manager",
      description: "A comprehensive employee management system for efficiently managing team data, departments, and organizational structure with intuitive interface.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Employee Management"],
      image: "/lovable-uploads/a56d8080-c764-41b3-bad2-5871f9dbbb1b.png",
      github: "#",
      live: "https://vercel.com/carevin-dalusons-projects/emanager"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
                {project.image === "placeholder" ? (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-xl font-bold text-white">P{index + 1}</span>
                    </div>
                    <p className="text-gray-400 text-sm">Project Preview</p>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-xs border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
