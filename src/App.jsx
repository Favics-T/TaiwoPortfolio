import React from 'react';
import Nav from './component/Nav';
import Hero from './component/Hero';
import About from './component/About';
import Experience from './component/Experience';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => {
  return (
    <div
      className="bg-[#06010a text-white font-[Inter] gap-10 flex flex-col"
      style={{
        backgroundImage: `url('/assets/svg.svg')`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}
    >
      {/* Navigation */}
      <Nav />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 flex flex-col gap-20  mt-20">
        
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Project /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
