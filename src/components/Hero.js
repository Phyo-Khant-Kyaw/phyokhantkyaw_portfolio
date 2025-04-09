import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const titles = [
    "Web Developer .",
    "Freelancer .",
    "UI | UX Designer .",
    "Full Stack Developer .",
  ];
  const [currentTitle, setCurrentTitle] = useState(0);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    const letters = titleRef.current?.querySelectorAll(".letter");
    if (letters) {
      gsap.fromTo(
        letters,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [currentTitle]);

  // Animate image on mount
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: 100, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section id="hero" className="h-[90vh] relative flex items-center justify-between px-4 lg:px-24">
      {/* Left Text Section */}
      <div>
        <h1 className="text-5xl font-bold tracking-widest">Hi There!!</h1>
        <h2 className="text-5xl font-bold tracking-widest mt-3">
          I'm <span className="text-purple-400">Phyo Khant Kyaw</span>
        </h2>
        <p
          ref={titleRef}
          className="mt-7 text-3xl font-bold tracking-widest text-purple-400"
        >
          {titles[currentTitle].split("").map((char, index) => (
            <span key={index} className="letter inline-block">
              {char}
            </span>
          ))}
        </p>
      </div>

      {/* Right Image Section */}
      <div ref={imageRef} className="hidden md:block">
        <img
          src="/profile(1).jpg"
          alt="Phyo Khant Kyaw"
          className="w-[400px] h-auto rounded-2xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
