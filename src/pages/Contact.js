import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-center md:space-x-10 md:space-y-0">
          {/* Phone Number */}
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-blue-600 text-2xl" />
            <p className="text-lg text-gray-800 font-semibold">+91 9027942982</p>
          </div>
          {/* Email Address */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <p className="text-lg text-gray-800 font-semibold">farhan000ahamad@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
