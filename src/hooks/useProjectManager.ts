import { useMemo, useState } from "react";
import { ProjectsType } from "@/_types/projectsType";
import { SelectOptionType } from "@/components/inputs/Select";
import { sortProjectsByMethod, SortType } from "@/utils/projectsManager";
import { useSort } from "./useSort";

export function useProjectsManager(dataProjects: ProjectsType[]) {
  const [seen, setSeen] = useState(8);
  const [sortValue, setSortValue] = useState<SortType>("da");
  const [filter, setFilter] = useState<SelectOptionType[]>([
    { name: "Select All", value: "DISREGARD", isSelected: true },
    { name: "API", value: "API", isSelected: true },
    { name: "Excel", value: "Excel", isSelected: true },
    { name: "Website", value: "Website", isSelected: true },
  ]);

  function filterByTags(data: ProjectsType[], filters: string[]) {
    return data.filter((item) =>
      item.tags.some((tag) => filters.includes(tag))
    );
  }

  const selectedTags = useMemo(
    () => filter.filter((box) => box.isSelected).map((box) => box.value),
    [filter]
  );
  const filtered = useMemo(
    () => filterByTags(dataProjects, selectedTags),
    [selectedTags]
  );
  const sorted = useSort(filtered, sortValue, sortProjectsByMethod);
  const projects = sorted.slice(0, seen);
  const allProjectsLoaded = projects.length === filtered.length;
  const seeMoreProjects = () => setSeen((prev) => prev + 8);

  return {
    projects,
    filter,
    sortValue,
    allProjectsLoaded,
    setFilter,
    seeMoreProjects,
    setSortValue,
  };
}
