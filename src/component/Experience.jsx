import React from 'react';
import { FaBriefcase, FaHackerrank } from 'react-icons/fa';

const Experience = () => {
  const experienceData = [
    {
      role: 'Frontend Developer',
      company: 'Enoverlab',
      duration: 'July 2025 – Present',
      type: 'Job',
    },
    {
      role: 'Frontend Intern',
      company: 'Enoverlab',
      duration: 'May 2025 – July 2025',
      type: 'Internship',
    },
    {
      role: 'Frontend Intern',
      company: 'InternPulse',
      duration: 'May 2025 – July 2025',
      type: 'Internship',
    },
    {
      role: 'Frontend Intern',
      company: 'HNG Tech',
      duration: 'Jan 2025 – Feb 2025',
      type: 'Internship',
    },
    {
      role: 'Hackathon Participant',
      company: 'Tech Expo Hackathon',
      duration: 'July 24 – 28, 2025',
      type: 'Hackathon',
    },
  ];

  return (
    <section className="bg-[#06010a] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Experience</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-700">
          {experienceData.map((item, index) => (
            <div key={index} className="mb-10 ml-6">
              {/* Icon */}
              <div className="absolute w-6 h-6 bg-indigo-600 rounded-full -left-3 flex items-center justify-center">
                {item.type === 'Hackathon' ? (
                  <FaHackerrank className="text-white text-sm" />
                ) : (
                  <FaBriefcase className="text-white text-sm" />
                )}
              </div>

              {/* Content */}
              <div className="bg-[#0d0a14] p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <p className="text-indigo-400 text-sm font-medium">{item.company}</p>
                <p className="text-gray-400 text-sm">{item.duration}</p>
                <span className="inline-block mt-3 text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
