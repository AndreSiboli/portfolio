import styles from "@/styles/home/Hero.module.scss";

import Link from "next/link";
import Container from "@/app/components/layout/Container";
import LinkButton from "@/app/components/links/LinkButton";
import Img from "@/app/components/utils/Img";

import HeroImage from "@/assets/me.jpeg";
import {
  PiLinkedinLogo,
  PiGithubLogo,
  PiInstagramLogo,
  PiArrowDown,
} from "react-icons/pi";

export default function Hero() {
  const social = [
    {
      icon: <PiLinkedinLogo />,
      to: "https://www.linkedin.com/in/andr%C3%A9-siboli-81b969244/",
      label: "Linkedin",
    },
    {
      icon: <PiGithubLogo />,
      to: "https://www.github.com/AndreSiboli",
      label: "Github",
    },
    {
      icon: <PiInstagramLogo />,
      to: "https://www.instagram.com/andresiboli",
      label: "Instagram",
    },
  ];

  return (
    <main className={styles.hero} id="home">
      <Container>
        <div className={styles.hero_container}>
          <div className={styles.hero_wrapper}>
            <div className={styles.hero_social}>
              {social.map((s) => (
                <Link
                  href={s.to}
                  aria-label={s.label}
                  target="_blank"
                  key={s.to}
                >
                  {s.icon}
                </Link>
              ))}
            </div>

            <div className={styles.hero_information}>
              <div className={styles.hero_introduce}>
                <p>What&apos;s up?</p>
              </div>

              <div className={styles.hero_title}>
                <h1>
                  I&apos;m
                  <div className={styles.words}>
                    <span>Size</span>
                    <span>André Siboli</span>
                    <span>Web Developer</span>
                    <span>Focused</span>
                  </div>
                </h1>
              </div>

              <div className={styles.hero_about}>
                <p>
                  If you&apos;re looking for a web developer who&apos;s
                  passionate, skilled, and committed to making your online
                  vision a reality, you&apos;ve come to the right place.
                  Let&apos;s connect and turn your ideas into a web presence
                  that truly stands out.
                </p>
              </div>

              <div className={styles.hero_button}>
                <LinkButton
                  to="/#projects"
                  text={
                    <>
                      See my projects <PiArrowDown />
                    </>
                  }
                  style={{ fontSize: ".95em" }}
                />
              </div>
            </div>
          </div>

          <div className={styles.hero_image}>
            <div className={styles.hero_image_container}>
              <Img src={HeroImage} alt="" style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
