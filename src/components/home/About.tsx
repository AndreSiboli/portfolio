import styles from "@/styles/home/About.module.scss";

import { projects } from "@/datas/projects";
import Container from "@/components/layout/Container";
import LinkButton from "@/components/links/LinkButton";
import Link from "next/link";
import Dataset from "@/components/layout/Dataset";

import { PiDownloadSimple } from "react-icons/pi";

export default function About() {
  const dataset = [
    { name: "Projects Completed", num: projects.length },
    { name: "Certifications Earned", num: 17 },
    { name: "Language Spoken", num: 2 },
  ];

  return (
    <article className={styles.about} id="about">
      <Container>
        <div className={styles.about_container}>
          <header className={styles.about_title}>
            <h1>About me</h1>
          </header>

          <section className={styles.about_info}>
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
                <Dataset data={data} key={data.name} timer={1 / data.num} />
              ))}
            </div>

            <div className={styles.about_button}>
              <LinkButton
                href="./siboli-cv.pdf"
                target="_blank"
                hasSvg
                download
                style={{ fontSize: "0.95em" }}
              >
                Download CV <PiDownloadSimple />
              </LinkButton>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
