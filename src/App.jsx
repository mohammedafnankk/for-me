import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

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

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

Aos.init({
  duration: 1000, // Animation duration (ms)
  once: true, // Run only once on scroll
});

function App() {
  const themes = useSelector((state) => state.theme);
  const theme = themes.theme;

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
    <div className={`${theme}`}>
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
          <Blog />
          <Contact />
          <Certificats />
          <Foooter/>
        </div>
      </main>
    </div>
  );
}

export default App;
