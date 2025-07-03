"use client";

import { ReactNode, useRef } from "react";
import useToggle from "@/hooks/useToggle";
import styles from "@/styles/buttons/Dropdown.module.scss";

import { FaAngleDown } from "react-icons/fa6";

interface PropsType {
  data: {
    icon: ReactNode;
    group: string;
    skills: { name: string; percent: number }[];
  };
}

export default function Dropdown(props: PropsType) {
  const { data } = props;
  const dropRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useToggle({ elements: [dropRef] });

  function toggleDropdown() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div
      className={`${styles.dropdown} ${isOpen && styles.active}`}
      ref={dropRef}
    >
      <button
        className={styles.dropdown_button}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-controls={`dropdown-${data.group}`}
      >
        <div className={styles.button_wrapper}>
          <div className={styles.icon}>{data.icon}</div>
          <p>{data.group}</p>
        </div>

        <div className={styles.button_arrow}>
          <FaAngleDown />
        </div>
      </button>

      <section
        className={styles.dropdown_skills}
        id={`dropdown-${data.group}`}
        aria-hidden={!isOpen}
        aria-label="Skill progress"
      >
        <div className={styles.dropdown_skills_wrapper}>
          {data.skills.map((skill) => (
            <div className={styles.skill} key={skill.name}>
              <p className={styles.skill_info}>
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </p>
              <div className={styles.skill_bar}>
                <div className={styles.bar}>
                  <div
                    className={styles.bar_percent}
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
