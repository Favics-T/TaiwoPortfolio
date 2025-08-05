import React from 'react';

const About = () => {
  return (
    <section className="bg-[#06010a] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Placeholder */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg">
            <img
              src="/profile.jpg" 
              alt="Kolapo Faith Taiwo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="md:flex-1 text-center md:text-left">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-300">
              Hi, I’m <span className="font-semibold text-white">Kolapo Faith Taiwo</span>, a passionate 
              <span className="text-indigo-400"> frontend developer</span> and 
              <span className="text-indigo-400"> software engineering student</span> focused on building responsive, 
              accessible, and performance-driven web applications using 
              <span className="text-indigo-400"> React, Tailwind CSS,</span> and 
              <span className="text-indigo-400"> JavaScript (ES6+)</span>.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-300">
              I’m constantly improving my skills and exploring new technologies like 
              <span className="text-indigo-400"> TypeScript</span> and 
              <span className="text-indigo-400"> Next.js</span> to create scalable, modern solutions. Beyond coding, 
              I love fashion design and sewing, which fuels my creativity and attention to detail.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              When I’m not developing, I’m learning, contributing to projects, or sharing my journey online.
            </p>

            {/* Call-to-Action Button */}
            <div className="mt-6">
              <a
                href="#projects"
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition"
              >
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
