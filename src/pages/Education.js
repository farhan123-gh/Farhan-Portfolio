import React from "react";
import { FaGraduationCap, FaLaptopCode, FaSchool } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      title: "Intermediate",
      institute: "UP Board",
      year: "2013",
      icon: <FaSchool className="text-blue-600 text-2xl" />,
    },
    {
      title: "B.Sc.",
      institute: "Dr. Bheem Rao Ambedkar University, Agra",
      year: "2016",
      icon: <FaGraduationCap className="text-blue-600 text-2xl" />,
    },
    {
      title: "Full Stack Web Development",
      institute: "AlmaBetter",
      year: "2023-2024",
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
    },
  ];

  return (
    <section
      id="education"
      className="bg-gray-100 py-16 px-8 lg:px-20 text-gray-800"
    >
      <h2 className="text-4xl font-bold text-center mb-6">Education</h2>
      <div className="flex flex-col gap-8">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center bg-white shadow-md rounded-lg p-6"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-gray-200 text-4xl rounded-full shadow-lg mb-4 lg:mb-0 lg:mr-6">
            {item.icon}
            </div>
            {/* Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.institute}</p>
              <p className="text-gray-500">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
