"use client";

import styles from "@/styles/buttons/ThemeButton.module.scss";
import { useEffect, useState } from "react";

import { PiSun, PiMoon } from "react-icons/pi";

export default function ThemeButton() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toogleTheme() {
    setTheme((state) => (state === "light" ? "dark" : "light"));
  }

  return (
    <div className={styles.mode}>
      <button
        className={styles.mode_wrapper}
        onClick={toogleTheme}
        aria-label="Toogle style mode"
      >
        <span
          className={`${styles.light} ${theme === "light" && styles.active}`}
        >
          <PiMoon />
        </span>
        <span className={`${styles.dark} ${theme === "dark" && styles.active}`}>
          <PiSun />
        </span>
      </button>
    </div>
  );
}
