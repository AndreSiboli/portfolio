import { ProjectsType } from "@/_types/projectsType";

export function sortByNameASC(arr: ProjectsType[]) {
  return arr.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

export function sortByNameDESC(arr: ProjectsType[]) {
  return sortByNameASC(arr).reverse();
}

export function sortByDateASC(arr: ProjectsType[]) {
  return arr.sort((a, b) => {
    const first = new Date(a.postedAt).getTime();
    const second = new Date(b.postedAt).getTime();

    if (first > second) {
      return -1;
    }
    if (first < second) {
      return 1;
    }
    return 0;
  });
}

export function sortByDateDESC(arr: ProjectsType[]) {
  return sortByDateASC(arr).reverse();
}
