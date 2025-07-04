import { useRef } from "react";
import useToggle from "@/hooks/useToggle";
import styles from "@/styles/inputs/Sort.module.scss";

import { PiPlus } from "react-icons/pi";

export type SortOption<T extends string> = {
  name: string;
  value: T;
  default?: boolean;
};

type PropsType<T extends string> = {
  title: string;
  sortOptions: SortOption<T>[];
  sortValue: T;
  handleValue: (val: T) => void;
};

export default function Sort<T extends string>(props: PropsType<T>) {
  const { title, sortOptions, sortValue, handleValue } = props;
  const sortRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useToggle({ elements: [sortRef] });

  function onChange(value: T) {
    handleValue(value);
    setIsOpen(false);
  }

  return (
    <div className={`${styles.sort} ${isOpen && styles.opened}`} ref={sortRef}>
      <button
        className={styles.sort_title}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="sort-options"
      >
        <p>{title}</p>
        <PiPlus />
      </button>
      <div className={styles.sort_container} id="sort-options">
        <fieldset className={styles.sort_options}>
          <legend>Sorting options</legend>
          {sortOptions.map((option) => (
            <div
              className={`${styles.option} ${
                sortValue === option.value && styles.selected
              }`}
              key={option.value}
            >
              <input
                type="radio"
                id={option.value}
                name="sort"
                defaultChecked={option.default}
                onChange={() => onChange(option.value)}
              />
              <label htmlFor={option.value}>{option.name}</label>
            </div>
          ))}
        </fieldset>
      </div>
    </div>
  );
}
