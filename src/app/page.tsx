import styles from "./page.module.scss";

import Hero from "@/app/components/home/Hero";
import About from "@/app/components/home/About";
import Skills from "./components/home/Skills";
import Projects from "./components/home/Projects";
import Contact from "./components/home/Contact";

export default function Home() {
  return (
    <div className={styles.main}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
