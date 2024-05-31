import styles from "@/styles/home/Contact.module.scss";

import Container from "@/app/components/layout/Container";
import FormContact from "@/app/components/form/FormContact";
import Link from "next/link";

import {
  PiEnvelope,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiPhone,
} from "react-icons/pi";

export default function Contact() {
  const personalDatas = [
    {
      icon: <PiEnvelope />,
      type: "Email",
      data: "andresiboli@outlook.com",
    },
    {
      icon: <PiPhone />,
      type: "Phone",
      data: "(+55) 11 98247-4477",
    },
  ];

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
    <section className={styles.contact} id="contact">
      <Container>
        <div className={styles.contact_container}>
          <div className={styles.contact_title}>
            <h1>Contact</h1>
          </div>

          <div className={styles.contact_wrapper}>
            <div className={styles.contact_info}>
              <div className={styles.info_header}>
                <h2>Get in touch</h2>
                <p>Are you interested? Make contact with me!</p>
              </div>

              <div className={styles.info_datas}>
                {personalDatas.map((data) => (
                  <div className={styles.info_data} key={data.data}>
                    <span className={styles.data_type}>
                      {data.icon} {data.type}
                    </span>
                    <span className={styles.data_data}>{data.data}</span>
                  </div>
                ))}
              </div>

              <div className={styles.info_social}>
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
            </div>

            <FormContact />
          </div>
        </div>
      </Container>
    </section>
  );
}
