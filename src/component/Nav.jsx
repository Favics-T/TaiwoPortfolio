import React from 'react';

const Nav = () => {
  const list = [
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" }
  ];

  return (
    <nav className="w-full flex justify-center fixed top-2 z-50 scroll-smooth">
      <ul className="flex items-center gap-6 md:gap-10 bg-[#0c011a] shadow-xl rounded-lg px-6 py-3">
        {list.map(({ name, path }) => (
          <li key={name} className="list-none">
            <a
              href={path}
              className="text-lg text-white hover:text-[#f04a7c] transition-colors duration-300"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
