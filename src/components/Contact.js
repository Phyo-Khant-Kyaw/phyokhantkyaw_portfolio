import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-white" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        <div className="bg-gray-100 shadow-lg rounded-2xl p-8 md:p-10">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows="5"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300 resize-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Let's Connect!
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Feel free to reach out for collaborations, freelance projects, or
              just a friendly chat. I'm always open to new opportunities and
              exciting ideas.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              Find me on
            </h4>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Phyo-Khant-Kyaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-transform transform hover:scale-110"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/phyo-khant-kyaw-1408ba1a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://web.facebook.com/phyokhant.kyaw.790/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-110"
              >
                <FaFacebook size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
