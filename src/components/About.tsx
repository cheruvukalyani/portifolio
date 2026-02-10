import { Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white rounded-lg shadow-md">
                <Target className="text-cyan-600" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Career Objective</h3>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Motivated IT graduate with hands-on experience in frontend development and database management.
              Skilled in React.js, JavaScript, HTML, CSS, and MySQL, with strong problem-solving abilities.
              Eager to contribute to user-friendly applications while growing in a collaborative, innovative environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
