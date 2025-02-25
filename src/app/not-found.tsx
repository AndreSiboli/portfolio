import Link from "next/link";
import Container from "@/components/layout/Container";
import styles from "./not-found.module.scss";

export default function Error404() {
  return (
    <div className={styles.error}>
      <Container>
        <div className={styles.error_container}>
          <span className={styles.error_404}>404.</span>
          <p className={styles.error_joke}>
            Hey, Why was the 404 page always late for work?
            <br />
            Because it kept taking the wrong &quote;route&quote;!
          </p>
          <p>
            Ha ha ha. <strong>*clearing throat*</strong>.
          </p>
          <div className={styles.error_link}>
            <Link href="/">Now, get back to the page.</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
