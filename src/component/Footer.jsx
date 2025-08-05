import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[06010a] text-gray-400 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left - Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Kolapo Faith Taiwo. All rights reserved.
        </p>
        
        {/* Right - Social Icons */}
        <div className="flex gap-6 text-lg">
          <a href="https://github.com/Favics-T" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/FaithKolapo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/Taiwo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
