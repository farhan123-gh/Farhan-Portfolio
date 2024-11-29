import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Text */}
        <p className="text-sm lg:text-base text-left">
          &copy; {new Date().getFullYear()} Farhan Ahamad. All rights reserved.
        </p>

        {/* Right Side: Social Media Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/farhan123-gh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/farhan-ahamad-a65b272a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
