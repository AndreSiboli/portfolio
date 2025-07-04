import {
  sortByDateASC,
  sortByDateDESC,
  sortByNameASC,
  sortByNameDESC,
} from "./sortManager";
import { ProjectsType } from "@/_types/projectsType";

export type SortType = "da" | "dd" | "na" | "nd";

export function sortProjectsByMethod(arr: ProjectsType[], method: SortType) {
  if (method === "na") return sortByNameASC(arr);
  if (method === "nd") return sortByNameDESC(arr);
  if (method === "da") return sortByDateASC(arr);
  if (method === "dd") return sortByDateDESC(arr);
  return [];
}
