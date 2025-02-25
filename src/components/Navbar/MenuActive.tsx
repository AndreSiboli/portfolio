"use client";

import { MouseEvent } from "react";
import styles from "@/styles/Navbar/MenuActive.module.scss";

import Container from "../layout/Container";
import Link from "next/link";

import { PiX, PiHouseLine, PiUser, PiFileText, PiFiles } from "react-icons/pi";
import { VscSend } from "react-icons/vsc";

interface PropsType {
  isActive: boolean;
  handleClose: () => void;
  handleOutClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function MenuActive(props: PropsType) {
  const { isActive, handleClose, handleOutClick } = props;

  const domains = [
    { to: "/#home", text: "Home", icon: <PiHouseLine /> },
    { to: "/#about", text: "About", icon: <PiUser /> },
    { to: "/#skills", text: "Skills", icon: <PiFileText /> },
    { to: "/#projects", text: "Projects", icon: <PiFiles /> },
    { to: "/#contact", text: "Contact", icon: <VscSend /> },
  ];

  return (
    <div
      className={`${styles.menu_wrapper} ${isActive && styles.active}`}
      onClick={(e) => handleOutClick(e)}
      id="menu"
    >
      <div className={`${styles.menu} ${isActive && styles.active}`}>
        <Container>
          <div className={styles.menu_container}>
            <nav className={styles.menu_navigation}>
              {domains.map((domain) => (
                <div className={styles.navigation_link} key={domain.to}>
                  <Link href={domain.to} onClick={handleClose} key={domain.to}>
                    {domain.icon}
                    {domain.text}
                  </Link>
                </div>
              ))}
            </nav>
            <footer className={styles.menu_footer}>
              <button aria-label="close menu" onClick={handleClose}>
                <PiX />
              </button>
            </footer>
          </div>
        </Container>
      </div>
    </div>
  );
}
