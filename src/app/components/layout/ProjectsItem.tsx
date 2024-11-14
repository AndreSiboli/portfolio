"use client";

import { MouseEvent, useState } from "react";
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
      <div className={styles.project} onClick={() => setIsOpen(true)}>
        <figure className={styles.project_image}>
          <Img src={data.src.thumbnail} />
        </figure>
        <div className={styles.project_info}>
          <div className={styles.info_start}>
            <h2>{data.name}</h2>
            <p>{data.postedAt}</p>
          </div>
          <div className={styles.info_tags}>
            {data.tags.map((tag) => (
              <Tag text={tag} category={tag.toLowerCase()} key={tag}/>
            ))}
          </div>
        </div>
      </div>
      <Card data={data} handleCard={closeCard} isOpened={isOpen} />
    </>
  );
}
