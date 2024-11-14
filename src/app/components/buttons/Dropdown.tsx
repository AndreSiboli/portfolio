"use client";

import { ReactNode, useState } from "react";
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
  const [isActive, setIsActive] = useState(false);

  function defineIsActive() {
    setIsActive((prevState) => !prevState);
  }

  return (
    <div className={`${styles.dropdown} ${isActive && styles.active}`}>
      <div className={styles.dropdown_info} onClick={() => defineIsActive()}>
        <div className={styles.info_wrapper}>
          <div className={styles.info_icon}>{data.icon}</div>
          <span>{data.group}</span>
        </div>
        
        <div className={styles.info_button}>
          <FaAngleDown />
        </div>
      </div>

      <div className={styles.dropdown_skills}>
        <div className={styles.dropdown_skills_wrapper}>
          {data.skills.map((skill) => (
            <div className={styles.skill} key={skill.name}>
              <div className={styles.skill_info}>
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
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
      </div>
    </div>
  );
}
