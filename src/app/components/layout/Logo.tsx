import styles from "@/styles/layout/Logo.module.scss";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/#home" className={styles.logo}>
      <h1>Siboli</h1>
    </Link>
  );
}
