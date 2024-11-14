import styles from "@/styles/layout/Footer.module.scss";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_container}>
          <p>Copyright &copy; André Siboli {new Date().getFullYear()}</p>
        </div>
      </Container>
    </footer>
  );
}
