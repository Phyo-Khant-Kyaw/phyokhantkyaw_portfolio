import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const navLinksRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const sections = ["hero", "about", "experience", "projects", "contact"];

  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (navLinksRef.current.length) {
      gsap.fromTo(
        navLinksRef.current,
        { y: -12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f4ee]/85 px-5 py-4 backdrop-blur-xl md:px-10 lg:px-20"
      ref={navbarRef}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[#18211f] text-sm font-black text-white">
            PK
          </span>
          <span className="hidden text-sm font-bold uppercase text-[#18211f] sm:block">
            Phyo Khant Kyaw
          </span>
        </a>

        <ul className="hidden items-center gap-2 md:flex">
          {sections.map((section, index) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="rounded-full px-4 py-2 text-sm font-semibold capitalize text-[#48504c] transition hover:bg-white hover:text-[#18211f] hover:shadow-sm"
                ref={(el) => (navLinksRef.current[index] = el)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#e75d3c] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(231,93,60,0.28)] transition hover:-translate-y-0.5 hover:bg-[#cf4c2f] lg:inline-flex"
        >
          Hire me
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-[#18211f]"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul
          className="absolute left-4 right-4 top-[72px] flex flex-col gap-2 rounded-2xl border border-black/10 bg-white p-3 shadow-2xl md:hidden"
          ref={mobileMenuRef}
        >
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="block rounded-xl px-4 py-3 text-sm font-bold capitalize text-[#18211f] hover:bg-[#f7f4ee]"
                onClick={() => setIsOpen(false)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
