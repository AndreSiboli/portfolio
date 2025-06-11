"use client";

import { useState } from "react";
import styles from "@/styles/layout/ProjectsItem.module.scss";
import { ProjectsType } from "@/_types/projectsType";

import Img from "../utils/Img";
import Tag from "./Tag";
import Card from "./Card";

interface PropsType {
  data: ProjectsType;
}

export default function ProjectItem(props: PropsType) {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(false);

  function closeCard() {
    setIsOpen(false);
  }

  return (
    <>
      <article
        className={styles.project}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen(true)}
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls={`project-card-${data.name
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <figure className={styles.project_image}>
          <Img src={data.src.thumbnail} />
        </figure>
        <div className={styles.project_info}>
          <header className={styles.info_start}>
            <h2>{data.name}</h2>
            <p>{data.postedAt}</p>
          </header>
          <div className={styles.info_tags}>
            {data.tags.map((tag) => (
              <Tag text={tag} category={tag.toLowerCase()} key={tag} />
            ))}
          </div>
        </div>
      </article>
      <Card data={data} handleCard={closeCard} isOpened={isOpen} />
    </>
  );
}
