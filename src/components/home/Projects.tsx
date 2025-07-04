"use client";

import { projects as dataProjects } from "@/datas/projects";
import { SortType } from "@/utils/projectsManager";
import { useProjectsManager } from "@/hooks/useProjectManager";
import styles from "@/styles/home/Projects.module.scss";

import Container from "@/components/layout/Container";
import ProjectItem from "../layout/ProjectsItem";
import Sort, { SortOption } from "../inputs/Sort";
import Select from "../inputs/Select";
import Button from "../buttons/Button";

export default function Projects() {
  const {
    filter,
    allProjectsLoaded,
    projects,
    setFilter,
    setSortValue,
    seeMoreProjects,
    sortValue,
  } = useProjectsManager(dataProjects);

  const sortOptions: SortOption<SortType>[] = [
    { name: "By date (ASC)", value: "da", default: true },
    { name: "By date (DESC)", value: "dd" },
    { name: "By name (ASC)", value: "na" },
    { name: "By name (DESC)", value: "nd" },
  ];

  return (
    <section className={styles.projects} id="projects">
      <Container>
        <div className={styles.projects_container}>
          <header className={styles.projects_title}>
            <h1>Projects</h1>
          </header>

          <div className={styles.projects_wrapper}>
            <div className={styles.projects_manager}>
              <Sort
                title="Sort"
                sortOptions={sortOptions}
                sortValue={sortValue}
                handleValue={setSortValue}
              />
              <Select
                title="Filter"
                state={{ select: filter, setSelect: setFilter }}
              />
            </div>
            <div className={styles.projects_grid}>
              {projects.map((item) => (
                <ProjectItem data={item} key={item.id} />
              ))}
            </div>
            <div className={styles.projects_button}>
              {!allProjectsLoaded ? (
                <Button onClick={seeMoreProjects}>Load more</Button>
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
