
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just chatting about technology and anime!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-4 bg-slate-900/50 rounded-lg border border-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <a
                  href="mailto:markdaluson30@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  markdaluson30@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-slate-900/50 rounded-lg border border-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
                <Github className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">GitHub</h3>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  github.com/markdaluson
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-slate-900/50 rounded-lg border border-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center">
                <Linkedin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">LinkedIn</h3>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  linkedin.com/in/markdaluson
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © 2024 Mark Carevin Daluson. Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
