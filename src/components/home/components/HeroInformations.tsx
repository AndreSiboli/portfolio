import styles from "@/styles/home/components/HeroInformations.module.scss";
import LinkButton from "@/components/links/LinkButton";
import Link from "next/link";

import {
  PiLinkedinLogo,
  PiGithubLogo,
  PiInstagramLogo,
  PiArrowDown,
} from "react-icons/pi";

export default function HeroInformations() {
  const social = [
    {
      icon: <PiLinkedinLogo />,
      href: "https://www.linkedin.com/in/andr%C3%A9-siboli-81b969244/",
      label: "Linkedin",
    },
    {
      icon: <PiGithubLogo />,
      href: "https://www.github.com/AndreSiboli",
      label: "Github",
    },
    {
      icon: <PiInstagramLogo />,
      href: "https://www.instagram.com/andresiboli",
      label: "Instagram",
    },
  ];

  return (
    <section className={styles.info}>
      <nav className={styles.info_social}>
        {social.map((s) => (
          <Link
            href={s.href}
            aria-label={s.label}
            target="_blank"
            rel="noopener noreferrer"
            key={s.href}
          >
            {s.icon}
          </Link>
        ))}
      </nav>

      <article className={styles.info_wrapper}>
        <div className={styles.info_introduce}>
          <p>What&apos;s up?</p>
        </div>

        <div className={styles.info_title}>
          <h1>
            I&apos;m
            <div className={styles.words}>
              <span aria-hidden>Size</span>
              <span>André Siboli</span>
              <span>Web Developer</span>
              <span>Focused</span>
            </div>
          </h1>
        </div>

        <div className={styles.info_about}>
          <p>
            If you&apos;re looking for a web developer who&apos;s passionate,
            skilled, and committed to making your online vision a reality,
            you&apos;ve come to the right place. Let&apos;s connect and turn
            your ideas into a web presence that truly stands out.
          </p>
        </div>

        <div className={styles.info_button}>
          <LinkButton href="/#projects" style={{ fontSize: ".95em" }} hasSvg>
            See my projects <PiArrowDown />
          </LinkButton>
        </div>
      </article>
    </section>
  );
}
