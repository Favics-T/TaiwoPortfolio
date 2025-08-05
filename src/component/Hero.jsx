import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[6010a] text-white h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-2xl md:text-4xl mb-2">Hi There, 👋</h1>

      <h1 className="text-4xl md:text-6xl font-bold mb-2">
        I'm <span className="text-indigo-500">Taiwo Kolapo</span>
      </h1>

      <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
        Frontend Developer
      </h2>

      <p className="text-gray-400 mt-4 max-w-xl text-lg">
        I build responsive, accessible, and performance-driven web applications with React, Tailwind, and modern technologies.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-indigo-600 text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
