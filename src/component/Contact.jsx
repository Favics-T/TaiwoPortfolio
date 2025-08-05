import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-[#06010a] text-white py-16 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-400 text-lg">
            Got a project or an idea? Let’s connect and build something amazing together.
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-[#0d0a14] p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500 mb-6"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8 text-2xl">
          <a
            href="https://github.com/Favics-T"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/FaithKolapo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/FaithKolapo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
