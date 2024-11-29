import React from "react";

const skills = [
  { category: "Frontend", items: ["HTML","CSS", "JavaScript", "React.js", "Bootstrap", "TailwindCSS", "MeteriaUI"] },
  { category: "Backend", items: ["Node.js", "Express.js", "MySQL", "MongoDB"] },
  { category: "Tools", items: ["Git & GitHub", "Postman"] },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <ul className="list-disc list-inside text-left text-gray-700">
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
