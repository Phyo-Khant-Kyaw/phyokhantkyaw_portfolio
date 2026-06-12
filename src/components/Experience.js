import React from "react";

const experiences = [
  {
    id: 1,
    position: "FullStack Developer",
    company: "Myanmar Payment Solution Services Co., Ltd.",
    date: "May 2024 - Present",
    type: "On-site / Remote / Full time",
    description:
      "Developing payment-related web systems, backend services, API integrations, and responsive business tools with a focus on reliability and maintainable delivery.",
  },
  {
    id: 2,
    position: "FullStack Developer",
    company: "TechHive Innovation Co.,Ltd",
    date: "July 2025 - February 2026",
    type: "Remote / Part time",
    description:
      "Contributed remotely on full-stack product work, combining front-end implementation, backend logic, and API-driven features for client-facing software.",
  },
  {
    id: 3,
    position: "Junior Web Developer",
    company: "METATEAM MYANMAR Co.,Ltd",
    date: "January 2023 - May 2024",
    type: "On-site / Full time",
    description:
      "Built and maintained web features across front-end and backend stacks, implemented reusable UI, and integrated business data through APIs.",
  },
  {
    id: 4,
    position: "On Job Training",
    company: "BIB Training Center",
    date: "August 2022 - December 2022",
    type: "Remote",
    description:
      "Practiced production workflows through guided projects, UI implementation, database work, and collaborative code delivery.",
  },
  {
    id: 5,
    position: "Web Tester",
    company: "Devdrogen Co., Ltd",
    date: "September 2019 - December 2019",
    type: "On-site",
    description:
      "Tested web interfaces, reported defects clearly, and learned how product quality depends on both user behavior and technical detail.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#f7f4ee] px-5 py-20 md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase text-[#e75d3c]">
            Experience
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
            Work history shaped by real product delivery.
          </h2>
        </div>
        <div className="mt-12 grid gap-5">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group grid gap-5 rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:grid-cols-[260px_1fr]"
            >
              <div>
                <p className="text-sm font-black uppercase text-[#0f766e]">
                  {exp.date}
                </p>
                <h3 className="mt-2 text-2xl font-black text-[#18211f] transition group-hover:text-[#e75d3c]">
                  {exp.position}
                </h3>
              </div>
              <div>
                <p className="text-lg font-bold text-[#18211f]">
                  {exp.company}
                </p>
                <p className="mt-1 text-sm font-black uppercase text-[#e75d3c]">
                  {exp.type}
                </p>
                <p className="mt-3 max-w-3xl text-lg leading-8 text-[#48504c]">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
