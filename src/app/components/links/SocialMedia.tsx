import styles from "@/styles/links/SocialMedia.module.scss";
import Link from "next/link";
import { PiGithubLogo, PiInstagramLogo, PiLinkedinLogo } from "react-icons/pi";

interface PropsType {}

export default function SocialMedia(props: PropsType) {
  const {} = props;
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
    <div className={styles.media}>
      {social.map((s) => (
        <Link href={s.to} aria-label={s.label} target="_blank" key={s.to}>
          {s.icon}
        </Link>
      ))}
    </div>
  );
}
