import { GraduationCap, BookOpen, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech - Information Technology',
      institution: 'Prasad V Potluri Siddhartha Institute of Technology',
      period: 'Nov 2021 – Mar 2025',
      grade: 'CGPA: 7.78',
      icon: <GraduationCap size={28} />,
    },
    {
      degree: 'Intermediate - MPC',
      institution: 'Sri Chaitanya Junior College',
      period: 'June 2019 – March 2021',
      grade: 'Marks: 947',
      icon: <BookOpen size={28} />,
    },
    {
      degree: 'Class X - SSC',
      institution: 'Sri Vijan Vihara English Medium High School',
      period: 'March 2019',
      grade: 'CGPA: 9.8',
      icon: <Award size={28} />,
    },
  ];

  const activities = [
    'Attended Full Stack Development workshop-PVPSIT',
    'Attended a Two day Workshop on Sales force Management conducted by PVPSIT',
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-cyan-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg text-white shadow-md flex-shrink-0">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-cyan-600 font-medium">{edu.institution}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg shadow-md">
              <Award className="text-cyan-600" size={24} />
            </div>
            Activities & Workshops
          </h3>
          <ul className="space-y-3">
            {activities.map((activity, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
