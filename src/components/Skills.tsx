
import { Code, Database, Globe, Smartphone, Palette, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      skills: ["Node.js", "Express", "MongoDB", "SQL", "API Development"],
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Tools & Technologies",
      icon: <Zap className="w-8 h-8" />,
      skills: ["Git", "GitHub", "VS Code", "Docker", "Linux"],
      color: "from-orange-400 to-red-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-purple-400/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
