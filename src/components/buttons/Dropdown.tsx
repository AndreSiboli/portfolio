"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "@/styles/buttons/Dropdown.module.scss";

import { FaAngleDown } from "react-icons/fa6";
import { closeWhenClickedOutsideTheElement } from "@/utils/closeManager";

interface PropsType {
  data: {
    icon: ReactNode;
    group: string;
    skills: { name: string; percent: number }[];
  };
}

export default function Dropdown(props: PropsType) {
  const { data } = props;
  const [isActive, setIsActive] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  function defineIsActive() {
    setIsActive((prevState) => !prevState);
  }

  useEffect(() => {
    closeWhenClickedOutsideTheElement(dropRef, setIsActive);
  }, []);

  return (
    <div
      className={`${styles.dropdown} ${isActive && styles.active}`}
      ref={dropRef}
    >
      <button
        className={styles.dropdown_button}
        onClick={() => defineIsActive()}
        aria-expanded={isActive}
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
        aria-hidden={!isActive}
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
