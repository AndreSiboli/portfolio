import styles from "@/styles/home/Contact.module.scss";

import Container from "@/components/layout/Container";
import FormContact from "@/components/form/FormContact";
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

  return (
    <section className={styles.contact} id="contact">
      <Container>
        <div className={styles.contact_container}>
          <div className={styles.contact_wrapper}>
            <div className={styles.contact_info}>
              <header className={styles.info_header}>
                <h2>Get in touch</h2>
                <p>Are you interested? Make contact with me!</p>
              </header>

              <div className={styles.info_contact}>
                {personalDatas.map((data) => (
                  <div className={styles.data} key={data.data}>
                    <p className={styles.type}>
                      {data.icon} {data.type}
                    </p>
                    <p className={styles.content}>{data.data}</p>
                  </div>
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
