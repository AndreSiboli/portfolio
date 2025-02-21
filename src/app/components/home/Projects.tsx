"use client";

import { Dispatch, SetStateAction, useState } from "react";
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
import Filter from "../buttons/Filter";

export default function Projects() {
  const [items, setItems] = useState(projects.slice(0, 8));
  const [sort, setSort] = useState<string>("da");

  function sortArray(arr: ProjectsType[], value: string) {
    if (value === "na") return sortByNameASC(arr);
    if (value === "nd") return sortByNameDESC(arr);
    if (value === "da") return sortByDateASC(arr);
    if (value === "dd") return sortByDateDESC(arr);
    return projects;
  }

  function sortProjects(value: string) {
    let sortedProjects = sortArray(items, value);
    setItems([...sortedProjects]);
    setSort(value);
    console.log(sortedProjects);
  }

  function filteredByType(
    filter: {
      name: string;
      value: string;
      selected: boolean;
    }[]
  ) {
    const onlyCheckeds = filter.filter((f) => f.selected).map((f) => f.value);
    const filteredProjects = projects.filter((item) =>
      item.tags.some((tag) => onlyCheckeds.includes(tag))
    );

    setItems(filteredProjects);
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
              <Filter handleValue={filteredByType} />
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
