import { Briefcase, Calendar, Shield } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Intern',
      company: 'Soarswell Consulting Pvt Ltd.',
      period: 'Mar 2025 – Sept 2025',
      icon: <Briefcase size={24} />,
      responsibilities: [
        'Assisted in developing and maintaining web application features using React.js and MySQL, enhancing functionality and user experience',
        'Collaborated with senior developers to troubleshoot bugs, optimize code, and reduce average page load times',
      ],
    },
    {
      title: 'Cyber Security Virtual Internship',
      company: 'Eduskills Palo Alto Networks',
      period: 'May 2023 – July 2023',
      icon: <Shield size={24} />,
      responsibilities: [
        'Gained foundational knowledge in network security, threat prevention, and endpoint protection using Palo Alto tools',
        'Worked with cybersecurity labs to identify and mitigate simulated threats through firewall configuration and policy management',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg text-white shadow-md">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-lg text-cyan-600 font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, respIdx) => (
                  <li key={respIdx} className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
