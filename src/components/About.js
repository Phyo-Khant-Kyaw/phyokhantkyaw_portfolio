import React from "react";
import { DiJqueryLogo } from "react-icons/di";
import {
  FaJsSquare,
  FaPython,
  FaJava,
  FaPhp,
  FaReact,
  FaLaravel,
  FaAws,
} from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaDatabase,
  FaVuejs,
} from "react-icons/fa";

import { FaGamepad, FaBasketballBall, FaPlane } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { SiSpringboot, SiTypescript } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="h-auto w-full bg-gray-100 text-gray-800 p-8 lg:flex lg:p-16 lg:px-24 tracking-widest"
    >
      <div className="w-full lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
        <h2 className="text-2xl lg:text-5xl font-bold mb-20 w-full text-center tracking-widest">
          Know Who <span className="text-purple-400 font-bold">I'm</span>
        </h2>
        <p className="text-xl mb-10">
          Hi Everyone, I am{" "}
          <span className="text-purple-400 font-bold">Phyo Khant Kyaw</span>{" "}
          from{" "}
          <span className="text-purple-400 font-bold">Yangon, Myanmar</span>.But
          now, I am currently live in
          <span className="text-purple-400 font-bold"> Bangkok, Thailand</span>.
          I am currently employed as a software developer at{" "}
          <a href="https://mpss.com.mm/" className="text-blue-600 font-medium">
            Myanmar Payment Solution Services
          </a>
          . I have completed Integrated BSc in Computer Science (Third Year) at
          Yangon University.
        </p>
        <p className="text-xl mb-10">
          Apart from coding, some other activities that I love to do!
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
            <FaGamepad className="text-blue-500 mr-2 text-2xl" />
            Playing Games
          </li>
          <li className="flex items-center p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
            <FaBasketballBall className="text-orange-500 mr-2 text-2xl" />
            Playing Basketball
          </li>
          <li className="flex items-center p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
            <FaPlane className="text-green-500 mr-2 text-2xl" />
            Travelling
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 lg:pl-10">
        <h2 className="text-2xl lg:text-5xl font-bold mb-20 w-full text-center tracking-widest">
          Professional <span className="text-purple-400">Skillset</span>
        </h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <FaJsSquare className="text-yellow-500 text-4xl" />
            <span className="ml-2">JavaScript</span>
          </div>
          <div className="flex items-center">
            <FaPython className="text-blue-500 text-4xl" />
            <span className="ml-2">Python</span>
          </div>
          <div className="flex items-center">
            <FaJava className="text-red-600 text-4xl" />
            <span className="ml-2">Java</span>
          </div>
          <div className="flex items-center">
            <FaPhp className="text-purple-600 text-4xl" />
            <span className="ml-2">PHP</span>
          </div>
          <div className="flex items-center">
            <FaReact className="text-cyan-500 text-4xl" />
            <span className="ml-2">React</span>
          </div>
          <div className="flex items-center">
            <FaHtml5 className="text-orange-600 text-4xl" />
            <span className="ml-2">HTML</span>
          </div>
          <div className="flex items-center">
            <FaCss3Alt className="text-blue-500 text-4xl" />
            <span className="ml-2">CSS</span>
          </div>
          <div className="flex items-center">
            <FaVuejs className="text-green-600 text-4xl" />
            <span className="ml-2">Vue</span>
          </div>
          <div className="flex items-center">
            <DiJqueryLogo className="text-blue-600 text-3xl" />
            <span className="ml-2">jQuery</span>
          </div>
          <div className="flex items-center">
            <SiTypescript className="text-blue-600 text-3xl" />
            <span className="ml-2">TypeScript</span>
          </div>
          <div className="flex items-center">
            <FaDatabase className="text-yellow-600 text-4xl" />
            <span className="ml-2">MySQL</span>
          </div>
          <div className="flex items-center">
            <FaDatabase className="text-yellow-600 text-4xl" />
            <span className="ml-2">PostgreSQL</span>
          </div>
          <div className="flex items-center">
            <FaDatabase className="text-yellow-600 text-4xl" />
            <span className="ml-2">NoSQL</span>
          </div>
          <div className="flex items-center">
            <SiSpringboot className="text-green-400 text-4xl" />
            <span className="ml-2">Spring</span>
          </div>
          <div className="flex items-center">
            <FaLaravel className="text-red-400 text-4xl" />
            <span className="ml-2">Laravel</span>
          </div>
          <div className="flex items-center">
            <RiFirebaseFill className="text-orange-300 text-5xl" />
            <span className="ml-2">Firebase</span>
          </div>
          <div className="flex items-center">
            <FaAws className="text-orange-400 text-4xl" />
            <span className="ml-2">AWS</span>
          </div>
          <div className="flex items-center">
            <FaDocker className="text-blue-400 text-4xl" />
            <span className="ml-2">Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
