import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-xl">
              KC
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4 animate-slide-up">
            Kalyani Cheruvu
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Frontend Developer & IT Graduate
          </p>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Prasad V Potluri Siddhartha Institute of Technology, Vijayawada
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a href="mailto:cheruvukalyani@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors">
              <Mail size={20} />
              <span>cheruvukalyani@gmail.com</span>
            </a>
            <a href="tel:7569586172" className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors">
              <Phone size={20} />
              <span>7569586172</span>
            </a>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} />
              <span>Vijayawada</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://linkedin.com/in/kalyani-cheruvu-401158254"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-cyan-50 transition-all duration-300 text-gray-700 hover:text-cyan-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/cheruvukalyani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-cyan-50 transition-all duration-300 text-gray-700 hover:text-cyan-600"
            >
              <Github size={24} />
            </a>
          </div>

          <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
