"use client";

import { useState } from "react";
import { projects } from "@/datas/projects";
import {
  sortByDateASC,
  sortByDateDESC,
  sortByNameASC,
  sortByNameDESC,
} from "@/utils/projectManager";
import styles from "@/styles/home/Projects.module.scss";

import Container from "@/app/components/layout/Container";
import ProjectItem from "../layout/ProjectsItem";
import Sort from "../buttons/Sort";

import { ProjectsType } from "@/_types/projectsType";
import SimpleButton from "../buttons/SimpleButton";

export default function Projects() {
  const [items, setItems] = useState(projects.slice(0, 8));
  const [sort, setSort] = useState<string>("da");

  function sortArray(arr: ProjectsType[], value: string) {
    if (value === "na") return sortByNameASC(arr);
    else if (value === "nd") return sortByNameDESC(arr);
    else if (value === "da") return sortByDateASC(arr);
    else if (value === "dd") return sortByDateDESC(arr);
  }

  function sortProjects(value: string) {
    let arr = sortArray(items, value) || projects;
    setSort(value);
    setItems(arr);
  }

  function seeMore() {
    const arr = items.length + 8;
    const sortedArr = sortArray(projects.slice(0, arr), sort) || items;
    setItems([...sortedArr]);
  }

  return (
    <section className={styles.projects} id="projects">
      <Container>
        <div className={styles.projects_container}>
          <div className={styles.projects_title}>
            <h1>Projects</h1>
          </div>

          <div className={styles.projects_wrapper}>
            <div className={styles.projects_manager}>
              <Sort sort={sort} handleValue={sortProjects} />
            </div>
            <div className={styles.projects_carousel}>
              {items.map((item) => (
                <ProjectItem data={item} key={item.id} />
              ))}
            </div>
            <div className={styles.projects_button}>
              {items.length < projects.length ? (
                <SimpleButton text="See more" handleFunction={seeMore} />
              ) : (
                <p>You&apos;ve seen all the projects</p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
