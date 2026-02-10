import { Briefcase, Gamepad2, Cloud } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'TRACKER',
      subtitle: 'A full-stack job tracking system for recruiters and candidates',
      icon: <Briefcase size={28} />,
      description: [
        'Developed a candidate tracking application using Spring Boot (backend), React.js (frontend), and MySQL (database)',
        'Implemented features for recruiter login, candidate status updates, and dashboard analytics',
      ],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Snake Game',
      subtitle: 'Classic arcade-style game developed in Python',
      icon: <Gamepad2 size={28} />,
      description: [
        'Developed the classic Snake Game using Python and Pygame with smooth movement and collision detection',
        'Implemented scoring system and dynamic difficulty as the snake grows',
        'Enhanced gameplay with responsive controls and real-time game-over display',
      ],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Weather App',
      subtitle: 'Real-time weather information using external API',
      icon: <Cloud size={28} />,
      description: [
        'Built a weather application using HTML, CSS, and JavaScript with OpenWeatherMap API integration',
        'Users can search for cities and view temperature, humidity, and weather status',
      ],
      gradient: 'from-blue-500 to-sky-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm opacity-90">{project.subtitle}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {project.description.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
