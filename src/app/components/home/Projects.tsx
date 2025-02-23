"use client";

import { useEffect, useState } from "react";
import { projects as dataProjects } from "@/datas/projects";
import { ProjectsType } from "@/_types/projectsType";
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
import Filter from "../buttons/Filter";
import SimpleButton from "../buttons/SimpleButton";

type SortType = "da" | "dd" | "na" | "nd";

export default function Projects() {
  const [projects, setProjects] = useState(dataProjects.slice(0, 8));
  const [seen, setSeen] = useState(8);
  const [sort, setSort] = useState<SortType>("da");
  const [filter, setFilter] = useState([
    { name: "Select All", value: "DISREGARD", selected: true },
    { name: "API", value: "API", selected: true },
    { name: "Excel", value: "Excel", selected: true },
    { name: "Website", value: "Website", selected: true },
  ]);

  function sortArrayByMethod(arr: ProjectsType[], method: SortType) {
    if (method === "na") return sortByNameASC(arr);
    if (method === "nd") return sortByNameDESC(arr);
    if (method === "da") return sortByDateASC(arr);
    if (method === "dd") return sortByDateDESC(arr);
    return dataProjects;
  }

  function sortProjects(method: SortType) {
    const sortedProjects = sortArrayByMethod(projects, method);
    setProjects([...sortedProjects]);
    setSort(method);
  }

  function filteredByType(
    filter: {
      name: string;
      value: string;
      selected: boolean;
    }[]
  ) {
    const onlyCheckeds = filter.filter((f) => f.selected).map((f) => f.value);
    const filteredProjects = dataProjects.filter((item) =>
      item.tags.some((tag) => onlyCheckeds.includes(tag))
    );

    setProjects(sortArrayByMethod(limitedByLimit(filteredProjects), sort));
  }

  function limitedByLimit(arr: ProjectsType[]) {
    const limitedArr = arr.slice(0, seen);
    return limitedArr;
  }

  function seeMoreProjects() {
    const newSeen = seen + 8;
    filteredByType(filter);
    setSeen(newSeen);
  }

  function checkIfAllLimitedProjectedAreShowed() {
    const onlyCheckeds = filter.filter((f) => f.selected).map((f) => f.value);
    const filteredProjects = dataProjects.filter((item) =>
      item.tags.some((tag) => onlyCheckeds.includes(tag))
    );

    return projects.length === filteredProjects.length;
  }

  useEffect(() => {
    filteredByType(filter);
  }, [filter, seen]);

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
              <Filter state={{ filter, setFilter }} />
            </div>
            <div className={styles.projects_grid}>
              {projects.map((item) => (
                <ProjectItem data={item} key={item.id} />
              ))}
            </div>
            <div className={styles.projects_button}>
              {!checkIfAllLimitedProjectedAreShowed() ? (
                <SimpleButton text="See more" handleFunction={seeMoreProjects} />
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
