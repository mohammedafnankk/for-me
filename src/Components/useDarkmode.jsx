// useDarkMode.js
import { useEffect, useState } from "react";

export default function useDarkMode() {
  const getInitialMode = () => {
    const userPref = localStorage.getItem("theme");
    if (userPref === "dark") return true;
    if (userPref === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}
