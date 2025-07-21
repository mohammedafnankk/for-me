import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useDispatch } from "react-redux";
import { themes } from "../features/ThemeSlice";
import { useSelector } from "react-redux";
import useDarkMode from "./useDarkmode";
import "../Nav.css";

gsap.registerPlugin(SplitText);

const Navbar = () => {
  const dispatch = useDispatch();
  const [isDark, setIsDark] = useDarkMode();
  const themess = useSelector((state) => state.theme);
  const isTheme = themess.theme;
  // console.log(isDark,"====");

  const textRef = useRef(null);
  useEffect(() => {
    document.fonts.ready.then(() => {
      gsap.set(textRef.current, { opacity: 1 });
      const split = new SplitText(textRef.current, {
        type: "words",
        wordsClass: "word++",
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

  // const handeChangeTheme = () => {
  //   // console.log("hello1");
  //   onClick={() => setIsDark(!isDark)}

  //   dispatch(themes(isTheme==="light"?"dark":"light"));
  //   // console.log("hello2");

  // };

  return (
    <div>
      <div className="px-4 fixed w-full border backdrop-blur-md z-50 dark:border-0 border-b-gray-300">
        <div className="flex justify-between items-center h-16">
          <div>
            <h1 ref={textRef} className="font-bold text-xl text-orange-600">
              <span>M</span>
              <span className="">o</span>
              <span>h</span>
              <span>a</span>
              <span>m</span>
              <span>m</span>
              <span>e</span>
              <span>d</span> <span>A</span>
              <span>f</span>
              <span>n</span>
              <span>a</span>
              <span>n</span>
            </h1>
          </div>
          <div className="text-[#71717a]  space-x-8 flex ">
            <Link
              className="hover:text-orange-600 cursor-pointer group relative flex flex-col"
              to="home"
              smooth={true}
              duration={500}
            >
              Home{" "}
              <div className="absolute bottom-1  w-0 h-0.5 bg-orange-600 group-hover:w-full top-7 transition-all duration-300"></div>
            </Link>

            <Link
              className="hover:text-orange-600 cursor-pointer group relative flex flex-col"
              to="about"
              smooth={true}
              duration={500}
            >
              About{" "}
              <div className="absolute bottom-1  w-0 h-0.5 bg-orange-600 group-hover:w-full top-7 transition-all duration-300"></div>
            </Link>

            <Link
              className="hover:text-orange-600 cursor-pointer group relative flex flex-col"
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills{" "}
              <div className="absolute bottom-1  w-0 h-0.5 bg-orange-600 group-hover:w-full top-7 transition-all duration-300"></div>
            </Link>

            <Link
              className="hover:text-orange-600 cursor-pointer group relative flex flex-col"
              to="projects"
              smooth={true}
              duration={500}
            >
              Project{" "}
              <div className="absolute bottom-1  w-0 h-0.5 bg-orange-600 group-hover:w-full top-7 transition-all duration-300"></div>
            </Link>
            <Link
              className="hover:text-orange-600 cursor-pointer group relative flex flex-col"
              to="blog"
              smooth={true}
              duration={500}
            >
              Blog{" "}
              <div className="absolute bottom-1  w-0 h-0.5 bg-orange-600 group-hover:w-full top-7 transition-all duration-300"></div>
            </Link>
            <Link
              className="hover:text-orange-600 cursor-pointer group relative flex-col flex"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact{" "}
              <div className="absolute bottom-1  w-0 h-0.5 bg-orange-600 group-hover:w-full top-7 transition-all duration-300"></div>
            </Link>

            <div onClick={() => setIsDark(!isDark)} className="cursor-pointer">
              {isDark ? (
                <i class="fa-solid fa-sun text-2xl text-orange-700 hover:text-orange-600 transition-transform duration-500 hover:rotate-360"></i>
              ) : (
                <i class="fa-solid fa-moon text-2xl text-orange-600 hover:text-orange-700 transition-transform duration-500 hover:rotate-360"></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
