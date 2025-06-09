import styles from "@/styles/home/Hero.module.scss";
import Container from "@/components/layout/Container";
import HeroInformations from "./components/HeroInformations";
import HeroImage from "./components/HeroImage";

export default function Hero() {
  return (
    <main className={styles.hero} id="home">
      <Container>
        <div className={styles.hero_container}>
          <HeroInformations />
          <HeroImage />
        </div>
      </Container>
    </main>
  );
}
