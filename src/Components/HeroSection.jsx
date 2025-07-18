import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import "../Hero.css";

gsap.registerPlugin(SplitText);

const HeroSection = () => {
  const textRef = useRef(null);
  useEffect(() => {
    document.fonts.ready.then(() => {
      gsap.set(textRef.current, { opacity: 1 });
      const split = new SplitText(textRef.current, {
        type: "wordss",
        wordsClass: "words++",
        wordDelimiter: String.fromCharCode(8205),
      });
      gsap.from(split.words, {
        y: -100,
        opacity: 0,
        rotation: () => gsap.utils.random(-80, 80),
        stagger: 0.1,
        duration: 1,
        ease: "back",
      });
    });
  }, []);
  return (
    <section
      id="home"
      className="dark:bg-bc bg-white h-screen flex flex-col justify-center items-center"
    >
      <div data-aos="fade-up" className="text-center py-20 ">
        <div className="">
          <h1 ref={textRef} className="text-4xl font-bold mb-6 sm:text-6xl">
            <span className="dark:text-white text-black">Hi, I'am</span>{" "}
            <span>
              Muhammed <span>Afnan</span>
            </span>{" "}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#9a9a9a] dark:text-[#71717a]">
            MERN Stack Developer & QA Enthusiast
          </h2>
          <p className="text-lg sm:text-xl text-[#9a9a9a] dark:text-[#71717a] mb-8">
            Building web apps & mastering testing – one project at a time.
          </p>
          <div className="flex justify-center items-center gap-4">
            <button className="cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-orange-400 bg-orange-600 text-white inline-flex justify-center items-center px-8 text-lg py-2 rounded-md">
              View My Work <i class="fa-solid fa-arrow-right pl-2"></i>
            </button>
            <button className="text-orange-600 dark:text-white dark:border-gray-300  cursor-pointer text-lg group transition-all duration-300 hover:scale-105 hover:shadow-lg border px-8 py-2 rounded-md border-orange-600">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
