import React from "react";

const experiences = [
  {
    id: 1,
    position: "Backend Developer",
    company: "Myanmar Payment Solution Services",
    date: "May 2024 - Present",
    description:
      "Developed responsive web apps using React, Tailwind CSS, and integrated RESTful APIs for dynamic data handling.",
  },
  {
    id: 2,
    position: "Junior Web Developer",
    company: "MetaTeam Myanmar Co,Ltd",
    date: "Jan 2023 - May 2024",
    description:
      "Assisted in developing landing pages and optimized web performance for faster loading and better UX.",
  },
  {
    id: 3,
    position: "On Job Training",
    company: "BIB Training Center",
    date: "Aug 2022 - Nov 2022",
    description:
      "Designed modern UI/UX for client projects, working closely with developers to ensure pixel-perfect implementations.",
  },
  {
    id: 4,
    position: "Web Tester",
    company: "Devdrogen Co,Ltd",
    date: "Oct 2019 - Dev 2019",
    description:
      "Assisted in developing landing pages and optimized web performance for faster loading and better UX.",
  },
];

const Experience = () => {
  return (
    <section className="pb-12 px-4 md:px-12 lg:px-24 bg-gray-100">
      <h2 className="text-2xl lg:text-5xl font-bold mb-20 w-full text-center tracking-widest">
        Work <span className="text-purple-400 font-bold">Experience</span>
      </h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="relative bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div className="absolute -left-3 top-6 w-1 h-24 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full hidden md:block"></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {exp.position}
                </h3>
                <p className="text-gray-500 text-lg">{exp.company}</p>
                <p className="text-gray-400 text-sm mt-1">{exp.date}</p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <p className="text-gray-600 max-w-xl">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
