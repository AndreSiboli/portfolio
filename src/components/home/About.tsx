import styles from "@/styles/home/About.module.scss";

import Container from "@/components/layout/Container";
import LinkButton from "@/components/links/LinkButton";
import Dataset from "@/components/layout/Dataset";

import { PiDownloadSimple } from "react-icons/pi";
import { projects } from "@/datas/projects";
import Link from "next/link";

export default function About() {
  const dataset = [
    { name: "Projects completed", num: projects.length },
    { name: "Certifications Earned", num: 17 },
    { name: "Language spoken", num: 2 },
  ];

  return (
    <section className={styles.about} id="about">
      <Container>
        <div className={styles.about_container}>
          <div className={styles.about_title}>
            <h1>About me</h1>
          </div>

          <div className={styles.about_info}>
            <div className={styles.about_description}>
              <p>
                What&apos;s up? My name is André Siboli. I was born and live in
                Brazil. I{" "}
                <Link href="./diploma.pdf" target="_blank" download>
                  graduated
                </Link>{" "}
                in Information Technology from Universidade Cruzeiro do Sul.
                I&apos;ve always been interested in programming since I was a
                child. I love this world and how a simple line of code can
                change lives. For me, web development is a blend of art and
                technology, where every line of code is a stroke on the canvas
                of the digital world.
              </p>
            </div>

            <div className={styles.about_dataset}>
              {dataset.map((data) => (
                <Dataset data={data} key={data.name} timer={1000 / data.num} />
              ))}
            </div>

            <div className={styles.about_button}>
              <LinkButton href="./siboli-cv.pdf" target="_blank" hasSvg download>
                Download CV <PiDownloadSimple />
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
