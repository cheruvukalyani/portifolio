import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500 rounded-lg shadow-lg">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href="mailto:cheruvukalyani@gmail.com" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  cheruvukalyani@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500 rounded-lg shadow-lg">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a href="tel:7569586172" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  7569586172
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500 rounded-lg shadow-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-300">Vijayawada, India</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500 rounded-lg shadow-lg">
                <Send size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://linkedin.com/in/kalyani-cheruvu-401158254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/cheruvukalyani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-white/20 pt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Kalyani Cheruvu. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
