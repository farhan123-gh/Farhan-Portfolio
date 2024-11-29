import React from "react";

const projects = [
  {
    title: "Project 1",
    description: "YouTube Subscriber App",
    link: "https://youtube-subscriber-app-new.onrender.com",
  },
  {
    title: "Project 2",
    description: "Farhan Store",
    link: "https://e-commerce-app-rho-nine.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
