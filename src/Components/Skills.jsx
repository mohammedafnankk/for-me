import React from "react";

const Skills = () => {
  return (
    <section className="py-20 dark:bg-bc bg-white" id="skills">
      <div className="px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-3 text-center dark:text-white text-black">
            Skills
          </h1>
          <div
            data-aos="zoom-in"
            className="w-19 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto"
          ></div>
        </div>
        <div className="grid grid-cols-4 gap-6 ">
          <div data-aos="fade-up" data-aos-duration="800" className="">
            <div className=" rounded-lg border bg-white border-gray-300 shadow-2xs hover:shadow-xl  transition delay-150 duration-600 ease-in-out hover:-translate-y-1 hover:scale-105">
              <div className="p-6 flex flex-col text-center">
                <div className="transition-transform duration-500 hover:rotate-360">
                  <i class="fa-solid fa-code text-orange-600 mb-4 text-4xl "></i>
                </div>
                <h1 className="text-xl font-semibold text-black">Frontend</h1>
              </div>
              <div className="flex flex-wrap gap-2 p-6 pt-0">
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  HTML
                </div>
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  CSS
                </div>
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  JavaScript
                </div>
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  React
                </div>
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  Tailwind CSS
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000">
            <div className=" rounded-lg border bg-white border-gray-300 shadow-2xs hover:shadow-xl  transition delay-150 duration-600 ease-in-out hover:-translate-y-1 hover:scale-105">
              <div className="p-6 flex flex-col text-center">
                <di className="transition-transform duration-500 hover:rotate-360">
                  <i class="fa-solid fa-server text-orange-600 mb-4 text-4xl"></i>
                </di>
                <h1 className="text-xl font-semibold text-black">Backend</h1>
              </div>
              <div className="flex flex-wrap gap-2 p-6 pt-0">
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  Node.js
                </div>
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  Express.js
                </div>
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  MongoDB
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000">
            <div className=" rounded-lg border bg-white border-gray-300 shadow-2xs hover:shadow-xl  transition delay-150 duration-600 ease-in-out hover:-translate-y-1 hover:scale-105">
              <div className="p-6 flex flex-col text-center">
                <div className="transition-transform duration-500 hover:rotate-360">
                  {" "}
                  <i class="text-orange-600 mb-4 text-4xl fa-solid fa-vial"></i>
                </div>
                <h1 className="text-xl font-semibold text-black">Testing</h1>
              </div>
              <div className="flex flex-wrap gap-2 p-6 pt-0">
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  Manual Testing
                </div>
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  Selenium WebDriver
                </div>
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  XPath
                </div>
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  CSS Selectors
                </div>
                {/* <div data-aos="zoom-in" className='bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent'></div> */}
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000">
            <div className=" rounded-lg border bg-white border-gray-300 shadow-2xs hover:shadow-xl  transition delay-150 duration-600 ease-in-out hover:-translate-y-1 hover:scale-105">
              <div className="p-6 flex flex-col text-center">
                <div className="transition-transform duration-500 hover:rotate-360">
                  {" "}
                  <i class="text-orange-600 mb-4 text-4xl fa-solid fa-wrench"></i>
                </div>
                <h1 className="text-xl font-semibold text-black">
                  Tools & Platforms
                </h1>
              </div>
              <div className="flex flex-wrap gap-2 p-6 pt-0">
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  Git & GitHub
                </div>
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  Postman
                </div>
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  Render
                </div>
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  Netlify
                </div>
                <div
                  data-aos="zoom-in"
                  className="bg-[#EEEEEE] rounded-full border px-2.5 font-semibold text-sm hover:bg-orange-100 inline-flex items-center py-0.5 border-transparent"
                >
                  VS Code
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
