import styles from "@/styles/home/Skills.module.scss";

import Container from "@/app/components/layout/Container";
import Dropdown from "@/app/components/buttons/Dropdown";

import {
  PiCode,
  PiBracketsCurly,
  PiSealQuestion,
  PiGameController,
} from "react-icons/pi";

export default function Skills() {
  const frontendSkills = {
    icon: <PiCode />,
    group: "Front-end",
    skills: [
      { name: "HTML", percent: 90 },
      { name: "CSS/SASS", percent: 80 },
      { name: "Javascript", percent: 80 },
      { name: "NextJs/React", percent: 75 },
      { name: "Typescript", percent: 80 },
      { name: "Redux", percent: 60 },
    ],
  };

  const backendSkills = {
    icon: <PiBracketsCurly />,
    group: "Back-end",
    skills: [
      { name: "NodeJs", percent: 60 },
      { name: "MongoDB", percent: 70 },
      { name: "MySQL", percent: 70 },
      { name: "Typescript", percent: 80 },
    ],
  };

  const otherSkills = {
    icon: <PiSealQuestion />,
    group: "Others",
    skills: [
      { name: "Git/Github", percent: 70 },
      { name: "Jest", percent: 50 },
      { name: "English", percent: 70 },
    ],
  };

  const hobbies = {
    icon: <PiGameController />,
    group: "Hobbies",
    skills: [
      { name: "Games", percent: 100 },
      { name: "Guitar", percent: 50 },
      { name: "Drawing", percent: 60 },
      { name: "Gym", percent: 65 },
    ],
  };

  return (
    <section className={styles.skills} id="skills">
      <Container>
        <div className={styles.skills_container}>
          <div className={styles.skills_title}>
            <h1>Skills</h1>
          </div>

          <div className={styles.skills_dropdown}>
            <div className={styles.skills_wrapper}>
              <Dropdown data={frontendSkills} />
              <Dropdown data={backendSkills} />
            </div>
            <div className={styles.skills_wrapper}>
              <Dropdown data={otherSkills} />
              <Dropdown data={hobbies} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
