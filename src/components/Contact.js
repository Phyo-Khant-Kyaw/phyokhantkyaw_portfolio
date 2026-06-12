import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      className="bg-[#18211f] px-5 py-20 text-white md:px-10 lg:px-20"
      id="contact"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-black uppercase text-[#f6c85f]">
            Contact
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Let&apos;s build something that feels sharp and works reliably.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            I am open to software developer roles, freelance web projects, and
            collaborations around backend systems, dashboards, and polished web
            applications.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:www.pkkcobra01@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e75d3c] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#cf4c2f]"
            >
              <Send size={18} /> Send email
            </a>
            <a
              href="https://www.linkedin.com/in/phyo-khant-kyaw-1408ba1a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              LinkedIn <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
          <div className="space-y-5">
            <div className="flex items-start gap-4 rounded-2xl bg-white p-5 text-[#18211f]">
              <Mail className="mt-1 shrink-0 text-[#e75d3c]" />
              <div>
                <p className="text-sm font-black uppercase text-[#6b746f]">
                  Email
                </p>
                <a
                  href="mailto:www.pkkcobra01@gmail.com"
                  className="break-all font-black"
                >
                  www.pkkcobra01@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-white p-5 text-[#18211f]">
              <MapPin className="mt-1 shrink-0 text-[#0f766e]" />
              <div>
                <p className="text-sm font-black uppercase text-[#6b746f]">
                  Based in
                </p>
                <p className="font-black">Bangkok, Thailand</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-5 text-[#18211f]">
              <p className="text-sm font-black uppercase text-[#6b746f]">
                Find me on
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/Phyo-Khant-Kyaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-12 w-12 place-items-center rounded-full bg-[#f7f4ee] text-[#18211f] transition hover:-translate-y-1 hover:bg-[#ddebc2]"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/phyo-khant-kyaw-1408ba1a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-12 w-12 place-items-center rounded-full bg-[#f7f4ee] text-[#0a66c2] transition hover:-translate-y-1 hover:bg-[#ddebc2]"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://web.facebook.com/phyokhant.kyaw.790/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-12 w-12 place-items-center rounded-full bg-[#f7f4ee] text-[#1877f2] transition hover:-translate-y-1 hover:bg-[#ddebc2]"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
