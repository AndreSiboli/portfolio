import { useMemo } from "react";
import { SortType } from "@/utils/projectsManager";

export function useSort<T>(
  data: T[],
  sortValue: SortType,
  sorterFn: (data: T[], sort: SortType) => T[]
) {
  return useMemo(() => sorterFn(data, sortValue), [data, sortValue]);
}
