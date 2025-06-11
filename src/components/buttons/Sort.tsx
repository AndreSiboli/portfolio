import styles from "@/styles/buttons/Sort.module.scss";
import { closeWhenClickedOutsideTheElement } from "@/utils/closeManager";
import { useEffect, useRef, useState } from "react";
import { PiPlus } from "react-icons/pi";

type SortType = "da" | "dd" | "na" | "nd";
interface PropsType {
  sort: SortType;
  handleValue: (str: SortType) => void;
}

export default function Sort(props: PropsType) {
  const { sort, handleValue } = props;
  const sortRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { name: "By date (ASC)", value: "da", default: true },
    { name: "By date (DESC)", value: "dd" },
    { name: "By name (ASC)", value: "na" },
    { name: "By name (DESC)", value: "nd" },
  ];

  useEffect(() => {
    closeWhenClickedOutsideTheElement(sortRef, setIsOpen);
  }, []);

  function defineIsOpen() {
    setIsOpen((prevState) => !prevState);
  }

  function onChange(value: SortType) {
    handleValue(value);
    setIsOpen(false);
  }

  return (
    <div className={`${styles.sort} ${isOpen && styles.opened}`} ref={sortRef}>
      <button
        className={styles.sort_title}
        onClick={defineIsOpen}
        aria-expanded={isOpen}
        aria-controls="sort-options"
      >
        <p>Sort</p>
        <PiPlus />
      </button>
      <div className={styles.sort_container} id="sort-options">
        <fieldset className={styles.sort_options}>
          <legend>Sorting options</legend>
          {options.map((option) => (
            <div
              className={`${styles.option} ${
                sort === option.value && styles.selected
              }`}
              key={option.value}
            >
              <input
                type="radio"
                id={option.value}
                name="sort"
                checked={option.default}
                onChange={() => onChange(option.value as SortType)}
              />
              <label htmlFor={option.value}>{option.name}</label>
            </div>
          ))}
        </fieldset>
      </div>
    </div>
  );
}
