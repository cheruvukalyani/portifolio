import { Code2, Database, GitBranch, Globe } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code2 size={24} />,
      title: 'Frontend',
      skills: ['React Js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      icon: <Database size={24} />,
      title: 'Backend & Database',
      skills: ['Node.js', 'MySQL', 'MongoDB', 'Python'],
    },
    {
      icon: <GitBranch size={24} />,
      title: 'Version Control',
      skills: ['Git', 'GitHub'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg text-cyan-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 rounded-full text-sm font-medium border border-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
              <p className="text-gray-700">Fundamentals of ReactJS, JavaScript – Infosys Springboard</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
              <p className="text-gray-700">Completed C, C++ and Java training from Spoken Tutorials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
