
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Mark Carevin Daluson, an IT student with a passion for technology and anime culture. 
              I'm currently pursuing my degree while building my skills in web development, programming, and digital innovation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in technology is inspired by the creativity and attention to detail found in anime. 
              I believe that good code, like good storytelling, should be both functional and beautiful.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring the latest anime series, learning new technologies, 
              or working on personal projects that combine my love for both worlds.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20">
                <h4 className="text-purple-400 font-semibold mb-2">Education</h4>
                <p className="text-gray-300">IT Student</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20">
                <h4 className="text-purple-400 font-semibold mb-2">Focus</h4>
                <p className="text-gray-300">Web Development</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-purple-500/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">MD</span>
                </div>
                <p className="text-gray-300">Profile Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
