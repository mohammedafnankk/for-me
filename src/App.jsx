import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { BrowserRouter as Route,Routes,Router } from "react-router-dom";

import Aos from "aos";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import "./App.css";
import "aos/dist/aos.css";
import Certificats from "./Components/Certificats";
import Foooter from "./Components/Foooter";
import useDarkMode from "./Components/useDarkmode";
import ResponsiveNavbar from "./Components/ResponsiveNavbar";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

Aos.init({
  duration: 1000, // Animation duration (ms)
  once: true, // Run only once on scroll
});

function App() {

//  const isDarkMode = useDarkMode();

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", isDarkMode);
//   }, [isDarkMode]);


// console.log(isDarkMode);






  const themes = useSelector((state) => state.theme);
  const theme = themes.theme;
  // console.log("ttt",theme);
  

  const wrapper = useRef();
  const content = useRef();

  useEffect(() => {
    ScrollSmoother.create({
      wrapper: wrapper.current,
      content: content.current,
      smooth: 1.2, // seconds it takes to "catch up"
      effects: true,
    });
  }, []);

  return (
    <div >
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "6px",
          },
        }}
      />
      
      <Navbar />
      <main ref={wrapper}>
        <div ref={content}>
          <HeroSection />
          <About />
          <Skills />
          <Projects />
          {/* <Blog /> */}
          <Contact />
          <Certificats />
          <Foooter/>
          <ResponsiveNavbar/>
        </div>
      </main>
    </div>
  );
}

export default App;
