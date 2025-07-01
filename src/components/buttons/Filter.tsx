import styles from "@/styles/buttons/Filter.module.scss";
import { closeWhenClickedOutsideTheElement } from "@/utils/closeManager";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { PiMagnifyingGlass } from "react-icons/pi";
import Checkbox from "../input/Checkbox";

type value = {
  name: string;
  value: string;
  selected: boolean;
};
interface PropsType {
  state: { filter: value[]; setFilter: Dispatch<SetStateAction<value[]>> };
}

export default function Filter(props: PropsType) {
  const { state } = props;
  const filterRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    closeWhenClickedOutsideTheElement(filterRef, setIsOpen);
  }, []);

  function defineIsOpen() {
    setIsOpen((prevState) => !prevState);
  }

  function isSelected(value: string) {
    let selectors = [...state.filter];

    if (value !== "DISREGARD") {
      //Set true/false the clicked one
      selectors = selectors.map((box) =>
        box.value === value ? { ...box, selected: !box.selected } : box
      );
      //Checks if has an unchecked one.
      const isThereUnchecked = !!selectors.find(
        (box) => !box.selected && box.value !== "DISREGARD"
      );
      //If has one false, the Select All turns unchecked, otherwise checked
      selectors = selectors.map((box) =>
        box.value === "DISREGARD"
          ? {
              ...box,
              selected: !isThereUnchecked,
              name: isThereUnchecked ? "Select All" : "Unselect All",
            }
          : box
      );

      return state.setFilter(selectors);
    }

    //if all of them are true
    const areAllTrue = !!selectors.every((box) =>
      box.value === "sa" ? true : box.selected
    );

    selectors = selectors.map((box) =>
      box.value !== "DISREGARD"
        ? { ...box, selected: !areAllTrue }
        : {
            ...box,
            selected: !areAllTrue,
            name: !areAllTrue ? "Unselect All" : "Select All",
          }
    );

    state.setFilter(selectors);
  }

  function onChange(value: string) {
    isSelected(value);
  }

  return (
    <div
      className={`${styles.filter} ${isOpen && styles.opened}`}
      ref={filterRef}
    >
      <button className={styles.filter_title} onClick={defineIsOpen}>
        <p>Filter</p>
        <PiMagnifyingGlass />
      </button>
      <div className={styles.filter_container}>
        <div className={styles.filter_options}>
          {state.filter.map((option) => (
            <div
              className={`${styles.option} ${
                option.selected && styles.selected
              }`}
              key={option.value}
            >
              <input
                type="checkbox"
                name={option.name}
                id={option.value}
                checked={option.selected}
                value={option.value}
                onChange={() => onChange(option.value)}
              />
              <Checkbox
                name={option.name}
                isChecked={option.selected}
                onClick={() => onChange(option.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onChange(option.value);
                  }
                }}
              />
              <label htmlFor={option.value}>{option.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
