import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const navLinksRef = useRef([]);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { x: 100, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (navLinksRef.current.length) {
      gsap.fromTo(
        navLinksRef.current,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  return (
    <nav
      className="w-full px-6 md:px-40 h-[10vh] flex items-center justify-between font-semibold relative z-50"
      ref={navbarRef}
    >
      <div className="text-3xl font-bold tracking-widest">PK</div>
      <ul className="hidden md:flex space-x-10 lg:space-x-16">
        {["hero", "about", "projects", "contact"].map((section, index) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="text-xl tracking-widest"
              ref={(el) => (navLinksRef.current[index] = el)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <ul
          className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden"
          ref={mobileMenuRef}
        >
          {["hero", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="text-xl tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
