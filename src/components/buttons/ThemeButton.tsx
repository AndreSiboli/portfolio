"use client";

import styles from "@/styles/buttons/ThemeButton.module.scss";
import { useEffect, useState } from "react";

import { PiSun, PiMoon } from "react-icons/pi";
import { WiMoonAltWaningGibbous6 } from "react-icons/wi";

export default function ThemeButton() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    removingAnimations();
  }, [theme]);

  function toogleTheme() {
    setTheme((state) => (state === "light" ? "dark" : "light"));
  }

  function removingAnimations() {
    document.body.classList.add("no-transition");
    window.requestAnimationFrame(() => {
      setTimeout(() => {
        document.body.classList.remove("no-transition");
      }, 10);
    });
  }

  return (
    <div className={styles.mode}>
      <button
        className={styles.mode_wrapper}
        onClick={theme ? toogleTheme : () => {}}
        aria-label="Toogle style mode"
      >
        <span className={`${styles.none} ${theme === "" && styles.active}`}>
          <WiMoonAltWaningGibbous6 />
        </span>
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
