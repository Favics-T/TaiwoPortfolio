import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 text-3xl" /> },
    { name: 'React', icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white text-3xl" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 text-3xl" /> },
  ];

  const softSkills = ['Problem Solving', 'Communication', 'Time Management', 'Team Collaboration', 'Adaptability', 'Creativity'];

  return (
    <section className="bg-[#06010a] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-400">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {technicalSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center bg-[#0d0a14] p-6 rounded-lg shadow hover:shadow-lg transition"
                >
                  {skill.icon}
                  <p className="mt-3 text-lg">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-400">Soft Skills</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((softSkill, idx) => (
                <li
                  key={idx}
                  className="bg-[#0d0a14] p-4 rounded-lg text-center hover:bg-indigo-600 hover:text-white transition"
                >
                  {softSkill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
