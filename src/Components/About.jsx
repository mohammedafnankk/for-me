import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <section id="about" className="py-20 dark:bg-bc bg-gray-100">
        <div className="">

         
          <div className="mb-16" data-aos="fade-up">
            <h1 className="text-4xl font-bold mb-3 dark:text-white text-black text-center">
              About Me
            </h1>
            <div
              data-aos="zoom-in"
              className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto delay-700"
            ></div>
          </div>
          <div data-aos="fade-up" className=" ">
            <div className="flex flex-col lg:flex-row gap-8 items-center dark:bg-[#EEEEEE] bg-white transition delay-150 duration-600 ease-in-out hover:-translate-y-1 hover:scale-110 p-8 max-w-4xl mx-auto text-lg space-y-4 text-[#71717a] rounded-lg  shadow-2xs hover:shadow-xl border border-gray-300 max-sm:mx-4">
             <div className="relative w-42 h-52 mx-auto lg:mx-0 max-sm:w-full">
            <img src="profile.jpg" alt="" className="w-full h-full rounded-2xl object-cover shadow-xl "/>
            <div className="absolute inset-0 rounded-2xl"></div>
          </div>
          <div className="flex-1">

              <p>
                I'm a passionate MERN stack developer and an aspiring QA
                Automation Engineer. I love building full-stack applications and
                exploring testing tools like Selenium.
              </p>

              <p>
                Currently, I'm diving deeper into automation testing using
                Selenium WebDriver, JavaScript, and frameworks like TestNG and
                PyTest. I'm committed to writing clean code and ensuring
                software quality.
              </p>
              <div className="flex  mt-8">
                <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer bg-orange-600 hover:bg-orange-400 text-white rounded-md px-8 text-sm gap-2 inline-flex justify-center items-center h-11">
                  {" "}
                  <i class="fa-solid fa-download"></i> Download Resume
                </button>
              </div>
          </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
