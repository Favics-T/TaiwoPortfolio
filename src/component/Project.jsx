import React from 'react';
import Agric from '../assets/agriconland.png';
import Findash from '../assets/Findash.png';
import Ticket from '../assets/Ticket.png'
import Geeks from '../assets/Geeks.png'
import Admin from '../assets/Admin.png'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ image, title, subTitle, liveSite, github }) => {
  return (
    <div className="bg-[#0a0115] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between w-[300px] h-[380px] p-5">
      {/* Image Section */}
      <div className="w-full h-[180px] overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Section */}
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold text-white">{title}</h1>
        <p className="text-gray-400 text-sm">{subTitle}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-auto">
        {liveSite && (
          <a
            href={liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition"
          >
            <FaGithub /> Code
          </a>
        )}
      </div>
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      name: 'Finsight',
      description: 'Crypto Dashboard',
      liveSite: 'https://finsight.vercel.app',
      github: 'https://github.com/Favics-T/finsight',
      image: Findash,
    },
    {
      name: 'AgriConLand',
      description: 'Agricultural Investment Platform',
      liveSite: 'https://agricon.com.ng',
      github: 'https://agricon.com.ng',
      image: Agric,
    },
    {
      name:"Ticket Generator",
      description:"Ticket Generator App",
      liveSite:"https://ticket-generator-hng-two.vercel.app/",
      github:"https://github.com/Favics-T/TicketGenerator-HNG",
      image:Ticket
    },
    {
      name:"Geeks Store",
      description:"E-commerce Store",
      liveSite:"https://favics-t.github.io/Geeks-Store/",
      github:"https://github.com/Favics-T/Geeks-Store",
      image:Geeks
    },
    {
      name:"Admin Dashboard",
      description:"Admin Dashboard",
      liveSite:"https://admin-dashboard-topaz-ten-40.vercel.app/",
      github:"https://github.com/Favics-T/Admin-Dashboard",
      image:Admin
    }
  ];

  return (
    <section className="py-16 bg-[#06010a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.name}
              subTitle={project.description}
              image={project.image}
              liveSite={project.liveSite}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
