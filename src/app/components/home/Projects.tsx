"use client";

import { useState } from "react";
import { projects } from "@/datas/projects";
import { CarouselTypeUser } from "@/@types/carouselType";
import styles from "@/styles/home/Projects.module.scss";

import Container from "@/app/components/layout/Container";
import Carousel from "@/app/components/carousel/Carousel";
import Item from "@/app/components/carousel/Item";

export default function Projects() {
  const items = [
    projects[projects.length - 2],
    projects[projects.length - 1],
    ...projects,
    projects[0],
    projects[1],
  ];

  const [config, setConfig] = useState<CarouselTypeUser>({
    animationTime: 200,
    margin: 8,
    childWidth: "calc(100% - 200px)",
    buttons: true,
    slide: true,
    parentWidth: 1200,
    autoSlide: false,
  });

  return (
    <section className={styles.projects} id="projects">
      <Container>
        <div className={styles.projects_container}>
          <div className={styles.projects_title}>
            <h1>Projects</h1>
          </div>
          <div className={styles.projects_carousel}>
            <Carousel carouselConfig={config}>
              {items.map((item, index) => (
                <Item data={item} key={item.id + index} />
              ))}
            </Carousel>
          </div>
        </div>
      </Container>
    </section>
  );
}
