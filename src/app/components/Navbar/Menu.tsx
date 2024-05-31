"use client";

import { MouseEvent, useState } from "react";
import styles from "@/styles/Navbar/Menu.module.scss";
import Link from "next/link";

import { PiSquaresFour, PiGithubLogo } from "react-icons/pi";
import Logo from "../layout/Logo";
import Container from "../layout/Container";
import MenuActive from "./MenuActive";

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  function toogleMenu() {
    setIsActive((prevState) => !prevState);
  }

  function checkClose(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    if (target.id === "menu") setIsActive(false);
  }

  return (
    <div className={styles.menu}>
      <div className={styles.menu_wrapper}>
        <Container>
          <div className={styles.wrapper_container}>
            <Logo />
            <div className={styles.menu_end}>
              <div className={styles.menu_action}>
                <Link href="https://www.github.com/AndreSiboli" aria-label="Github">
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

      <MenuActive
        handleClose={toogleMenu}
        isActive={isActive}
        handleOutClick={checkClose}
      />
    </div>
  );
}
