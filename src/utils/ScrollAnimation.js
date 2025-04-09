import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const sections = useRef([]);

  useEffect(() => {
    sections.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { backgroundColor: "#2b2929" },
        {
          backgroundColor: index % 2 === 0 ? "#ffffff" : "#cceeff",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: false,
          },
        }
      );
    });

    sections.current.forEach((section, index) => {
      gsap.fromTo(
        section.querySelector(".section-text"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <section
        className="h-screen flex items-center justify-center"
        ref={(el) => (sections.current[0] = el)}
      >
        <h1 className="section-text text-4xl font-bold">
          Welcome to My Portfolio
        </h1>
      </section>
      <section
        className="h-screen flex items-center justify-center"
        ref={(el) => (sections.current[1] = el)}
      >
        <h1 className="section-text text-4xl font-bold">Explore My Projects</h1>
      </section>
    </div>
  );
};

export default ScrollAnimation;
