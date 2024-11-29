import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Resume / CV</h2>
        <p className="text-lg text-gray-700 mb-4">
          You can download my Resume by clicking the button below.
        </p>
        <a
          href="/FarhanResume.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
