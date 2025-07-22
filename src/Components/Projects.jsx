import React from "react";
import Navbar from "./Navbar";
const Projects = () => {
  return (
    <div>
      <section id="projects" className="py-20 dark:bg-bc bg-gray-100">
        <div className="px-8 max-sm:px-4">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h1 className="text-4xl font-bold mb-3 dark:text-white text-black">
              Projects
            </h1>
            <div
              data-aos="zoom-in"
              className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto delay-700"
            ></div>
          </div>
          <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-1">
            <div data-aos="fade-up" data-aos-duration="3000">
              <div className="rounded-lg border border-gray-300 group bg-white transition delay-150 duration-600 ease-in-out hover:translate-y-1 hover:scale-110 hover:shadow-xl">
                <div className="p-6 space-y-1.5">
                  <h3 className="font-semibold text-xl group-hover:text-orange-600">
                    Mentor Booking Platform
                  </h3>
                  <p className="text-base text-[#71717a]">
                    A multi-step mentor booking and payment form with session
                    selection and mentor profile integration.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="mb-6 flex flex-wrap gap-6">
                    <div className="rounded-full border-transparent bg-[#EEEEEE]  inline-flex items-center px-2.5 py-0.5 text-xs font-semibold hover:bg-orange-100">
                      React
                    </div>
                    <div className="rounded-full border-transparent bg-[#EEEEEE]  inline-flex items-center px-2.5 py-0.5 text-xs font-semibold hover:bg-orange-100">
                      Node.js
                    </div>
                    <div className="rounded-full border-transparent bg-[#EEEEEE]  inline-flex items-center px-2.5 py-0.5 text-xs font-semibold hover:bg-orange-100">
                      Express
                    </div>
                    <div className="rounded-full border-transparent bg-[#EEEEEE]  inline-flex items-center px-2.5 py-0.5 text-xs font-semibold hover:bg-orange-100">
                      Mongo DB
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="cursor-pointer py-2 bg-orange-600 px-3 rounded-md text-white hover:bg-orange-400 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 text-sm">
                      {" "}
                      <i class="fa-solid fa-arrow-up-right-from-square "></i>
                      Live Demo
                    </button>
                    <button className="cursor-pointer py-2 hover:text-white text-orange-600 px-3 rounded-md hover:bg-orange-400 group inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 text-sm border border-orange-600">
                      <i class="fa-brands fa-github group-rotate-6"></i>GitHub
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-lg border border-gray-300 group bg-white transition delay-150 duration-600 ease-in-out hover:translate-y-1 hover:scale-110 hover:shadow-xl">
                <div className="p-6 space-y-1.5">
                  <h3 className="font-semibold text-xl group-hover:text-orange-600">
                    ToDo App with JWT Auth
                  </h3>
                  <p className="text-base text-[#71717a]">
                    A secure full-stack ToDo app with user login using JWT,
                    session management, and task CRUD.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="mb-6 flex flex-wrap gap-6">
                    <div className="rounded-full border-transparent bg-[#EEEEEE]  inline-flex items-center px-2.5 py-0.5 text-xs font-semibold hover:bg-orange-100">
                      MERN
                    </div>
                    <div className="rounded-full border-transparent bg-[#EEEEEE]  inline-flex items-center px-2.5 py-0.5 text-xs font-semibold hover:bg-orange-100">
                      JWT
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="cursor-pointer py-2 bg-orange-600 px-3 rounded-md text-white hover:bg-orange-400 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 text-sm">
                      {" "}
                      <i class="fa-solid fa-arrow-up-right-from-square "></i>
                      Live Demo
                    </button>
                    <button className="cursor-pointer py-2 hover:text-white text-orange-600 px-3 rounded-md hover:bg-orange-400 group inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 text-sm border border-orange-600">
                      <i class="fa-brands fa-github group-rotate-6"></i>GitHub
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000">
              <div className="rounded-lg border border-gray-300 group  transition delay-150 duration-600 ease-in-out hover:translate-y-1 hover:scale-110 hover:shadow-xl bg-white">
                <div className="p-6 space-y-1.5">
                  <h3 className="font-semibold text-xl group-hover:text-orange-600">
                    Selenium Automation Sample
                  </h3>
                  <p className="text-base text-[#71717a]">
                    Automated login and dashboard navigation with XPath using
                    Selenium WebDriver (JavaScript).
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="mb-6 flex flex-wrap gap-6">
                    <div className="rounded-full border-transparent bg-[#EEEEEE]  inline-flex items-center px-2.5 py-0.5 text-xs font-semibold hover:bg-orange-100">
                      JavaScript
                    </div>
                    <div className="rounded-full border-transparent bg-[#EEEEEE]  inline-flex items-center px-2.5 py-0.5 text-xs font-semibold hover:bg-orange-100">
                      Selenium
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="cursor-pointer py-2 hover:text-white text-orange-600 px-3 rounded-md hover:bg-orange-400 group inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 text-sm border border-orange-600">
                      <i class="fa-brands fa-github group-rotate-6"></i>GitHub
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
