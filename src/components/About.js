import React from "react";
import { DiJqueryLogo } from "react-icons/di";
import {
  FaAws,
  FaBasketballBall,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGamepad,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaLaravel,
  FaPhp,
  FaPlane,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { SiSpringboot, SiTypescript } from "react-icons/si";

const About = () => {
  const skills = [
    ["JavaScript", FaJsSquare, "text-yellow-500"],
    ["TypeScript", SiTypescript, "text-blue-600"],
    ["React", FaReact, "text-cyan-500"],
    ["Vue", FaVuejs, "text-green-600"],
    ["Laravel", FaLaravel, "text-red-500"],
    ["Spring Boot", SiSpringboot, "text-green-500"],
    ["PHP", FaPhp, "text-indigo-500"],
    ["Java", FaJava, "text-red-600"],
    ["Python", FaPython, "text-blue-500"],
    ["MySQL", FaDatabase, "text-amber-600"],
    ["PostgreSQL", FaDatabase, "text-sky-700"],
    ["NoSQL", FaDatabase, "text-emerald-700"],
    ["Firebase", RiFirebaseFill, "text-orange-400"],
    ["AWS", FaAws, "text-orange-500"],
    ["Docker", FaDocker, "text-blue-500"],
    ["jQuery", DiJqueryLogo, "text-blue-600"],
    ["HTML", FaHtml5, "text-orange-600"],
    ["CSS", FaCss3Alt, "text-blue-500"],
  ];

  const interests = [
    [FaGamepad, "Games"],
    [FaBasketballBall, "Basketball"],
    [FaPlane, "Travel"],
  ];

  return (
    <section
      id="about"
      className="w-full bg-white px-5 py-20 text-[#18211f] md:px-10 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase text-[#e75d3c]">
            About me
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
            FullStack Web Developer with backend depth and front-end taste.
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-[#48504c]">
            <p>
              I am Phyo Khant Kyaw, a FullStack Web Developer from Yangon currently
              based in Bangkok. I work at{" "}
              <a
                href="https://mpss.com.mm/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0f766e] underline decoration-[#0f766e]/30 underline-offset-4"
              >
                Myanmar Payment Solution Services
              </a>
              , building practical systems that need to be dependable,
              maintainable, and easy to use.
            </p>
            <p>
              My background spans web development, testing, UI implementation,
              and API integration. I studied Integrated BSc in Computer Science
              at Yangon University and keep sharpening my craft through real
              products.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {interests.map(([Icon, label]) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-black/10 bg-[#f7f4ee] p-4 font-bold text-[#18211f]"
              >
                <Icon className="text-xl text-[#e75d3c]" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase text-[#0f766e]">
            Professional skillset
          </p>
          <h3 className="mt-3 text-3xl font-black md:text-5xl">
            Tools I use to ship.
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {skills.map(([name, Icon, color]) => (
              <div
                key={name}
                className="flex min-h-20 items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon className={`${color} shrink-0 text-3xl`} />
                <span className="font-bold text-[#18211f]">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
