"use client";

import { useRef } from "react";
import useToggle from "@/hooks/useToggle";
import styles from "@/styles/Navbar/Menu.module.scss";

import Link from "next/link";
import Logo from "../layout/Logo";
import Container from "../layout/Container";
import MenuActive from "./MenuActive";
import ThemeButton from "../buttons/ThemeButton";

import { PiSquaresFour, PiGithubLogo } from "react-icons/pi";

export default function Menu() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useToggle({ elements: [menuRef] });

  function toogleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className={styles.menu}>
      <div className={styles.menu_wrapper}>
        <Container>
          <div className={styles.wrapper_container}>
            <Logo />
            <div className={styles.menu_end}>
              <div className={styles.menu_theme}>
                <ThemeButton />
              </div>
              <div className={styles.menu_action}>
                <Link
                  href="https://www.github.com/AndreSiboli"
                  aria-label="Github"
                >
                  <PiGithubLogo />
                </Link>
              </div>
              <div className={styles.menu_toggle}>
                <button aria-label="toggle menu" onClick={toogleMenu}>
                  <PiSquaresFour />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <MenuActive menuRef={menuRef} isOpen={isOpen} handleClose={toogleMenu} />
    </div>
  );
}
