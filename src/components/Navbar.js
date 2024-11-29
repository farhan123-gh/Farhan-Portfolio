import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 md:px-8">
        {/* Navbar Title */}
        <h1 className="text-lg md:text-xl font-bold">Farhan Ahamad</h1>

        {/* Navigation Links */}
        <ul className="flex flex-wrap space-x-4 md:space-x-8">
          <li>
            <a href="#home" className="hover:underline text-sm md:text-base">
              Home
            </a>
          </li>
          <li>
            <a href="#education" className="hover:underline text-sm md:text-base">
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline text-sm md:text-base">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline text-sm md:text-base">
              Skills
            </a>
          </li>
          <li>
            <a href="#resume" className="hover:underline text-sm md:text-base">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline text-sm md:text-base">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
