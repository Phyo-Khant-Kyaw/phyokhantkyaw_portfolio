import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Code2, FolderKanban } from "lucide-react";
import projectsData from "../data/projects";

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-white px-5 py-20 md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-[#0f766e]">
              Projects
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
              Real project work from my CV.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#48504c]">
              These are the product areas and project types I have worked on
              across payment solutions, client applications, training projects,
              and my own portfolio.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-[#f7f4ee] px-5 py-3 text-sm font-bold text-[#18211f] transition hover:-translate-y-0.5 hover:bg-[#ddebc2]"
          >
            Discuss a project <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group min-h-[360px] rounded-3xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`${project.accent} flex h-36 items-center justify-between rounded-2xl p-6`}
              >
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-[#18211f] shadow-sm">
                  <FolderKanban size={30} />
                </div>
                <Code2
                  size={64}
                  className="text-[#18211f]/20 transition group-hover:rotate-6 group-hover:scale-105"
                />
              </div>

              <div className="p-2 pt-6">
                <p className="text-sm font-black uppercase text-[#0f766e]">
                  {project.company}
                </p>
                <h3 className="mt-2 text-2xl font-black text-[#18211f]">
                  {project.title}
                </h3>
                <p className="mt-3 min-h-24 text-base leading-7 text-[#48504c]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f7f4ee] px-3 py-1 text-xs font-black uppercase text-[#18211f]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-[#e75d3c]"
                >
                  View reference <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
