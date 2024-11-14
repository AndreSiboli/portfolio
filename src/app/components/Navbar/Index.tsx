"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/Navbar/Index.module.scss";

import Container from "@/app/components/layout/Container";
import Logo from "@/app/components/layout/Logo";
import Link from "next/link";

import { PiGithubLogo } from "react-icons/pi";

export default function Navbar() {
  const domains = [
    { to: "/#home", text: "Home" },
    { to: "/#about", text: "About" },
    { to: "/#skills", text: "Skills" },
    { to: "/#projects", text: "Projects" },
    { to: "/#contact", text: "Contact" },
  ];
  const [isOnTop, setIsOnTop] = useState(false);

  function scrolling() {
    const scroll = window.scrollY;

    if (scroll === 0) setIsOnTop(true);
    else setIsOnTop(false);
  }

  useEffect(() => {
    scrolling();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrolling);

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, [isOnTop]);

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
                <Link href={domain.to} key={domain.to}>{domain.text}</Link>
              ))}
            </div>
            <div className={styles.navigation_action}>
              <Link
                href="https://www.github.com/AndreSiboli"
                target="_blank"
                aria-label="Github"
              >
                <PiGithubLogo />
              </Link>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
