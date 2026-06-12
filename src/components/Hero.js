import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, MapPin, MessageCircle, Sparkles } from "lucide-react";

const Hero = () => {
  const titles = [
    "FullStack Developer",
    "Backend Developer",
    "React & Laravel Builder",
    "Payment Systems Developer",
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
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.03, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [currentTitle]);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: 60, opacity: 0, scale: 0.94 },
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden px-5 py-14 md:px-10 lg:px-20"
    >
      <div className="absolute inset-x-0 top-0 h-48 bg-[#ddebc2]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm font-bold text-[#48504c] shadow-sm backdrop-blur">
            <Sparkles size={16} className="text-[#e75d3c]" />
            Available for software projects
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-[#18211f] md:text-7xl lg:text-8xl">
            Phyo Khant Kyaw
          </h1>
          <p
            ref={titleRef}
            className="mt-6 min-h-10 text-2xl font-black text-[#0f766e] md:text-4xl"
          >
            {titles[currentTitle].split("").map((char, index) => (
              <span key={index} className="letter inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#48504c] md:text-xl">
            I build practical web products with clean APIs, reliable backend
            flows, and polished front-end experiences for teams in Myanmar,
            Thailand, and beyond.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18211f] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-black/15 transition hover:-translate-y-0.5"
            >
              View work <ArrowUpRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-bold text-[#18211f] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact me <MessageCircle size={18} />
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ["3+", "Years experience"],
              ["5", "Companies"],
              ["18", "Core skills"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-black/10 bg-white/75 p-4 backdrop-blur"
              >
                <div className="text-3xl font-black text-[#18211f]">
                  {value}
                </div>
                <div className="mt-1 text-xs font-bold uppercase text-[#6b746f]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={imageRef} className="relative">
          <div className="absolute -right-4 top-8 hidden h-56 w-56 rounded-full bg-[#f6c85f] md:block" />
          <div className="absolute -bottom-6 -left-6 hidden h-40 w-40 rounded-full bg-[#0f766e] md:block" />
          <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl shadow-black/20">
            <img
              src="/profile(1).jpg"
              alt="Phyo Khant Kyaw"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-bold text-[#18211f]">
              <MapPin size={17} className="text-[#e75d3c]" />
              Bangkok, Thailand
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
