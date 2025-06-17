"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/Navbar/Index.module.scss";

import Container from "@/components/layout/Container";
import Logo from "@/components/layout/Logo";
import Link from "next/link";
import ThemeButton from "../buttons/ThemeButton";

import { PiGithubLogo } from "react-icons/pi";

export default function Navbar() {
  const domains = [
    { to: "/#home", text: "Home" },
    { to: "/#about", text: "About" },
    { to: "/#skills", text: "Skills" },
    { to: "/#projects", text: "Projects" },
    { to: "/#contact", text: "Contact" },
  ];
  const [isOnTop, setIsOnTop] = useState(true);

  function scrolling() {
    setIsOnTop(window.scrollY === 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrolling);
    scrolling();

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isOnTop && styles.onTop}`}>
      <Container>
        <div className={styles.header_container}>
          <div className={styles.header_wrapper}>
            <div className={styles.header_logo}>
              <Logo />
            </div>
          </div>

          <nav className={styles.header_navigation}>
            <div className={styles.navigation_links}>
              {domains.map((domain) => (
                <Link href={domain.to} key={domain.to}>
                  {domain.text}
                </Link>
              ))}
            </div>
            <div className={styles.navigation_action}>
              <div className={styles.action_git}>
                <Link
                  href="https://www.github.com/AndreSiboli"
                  target="_blank"
                  aria-label="Github"
                >
                  <PiGithubLogo />
                </Link>
              </div>
              <div className={styles.action_button}>
                <ThemeButton />
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
