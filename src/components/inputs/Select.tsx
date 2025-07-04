import { Dispatch, SetStateAction, useRef } from "react";
import useToggle from "@/hooks/useToggle";
import styles from "@/styles/inputs/Select.module.scss";
import Checkbox from "./Checkbox";

import { PiMagnifyingGlass } from "react-icons/pi";

export type SelectOptionType = {
  name: string;
  value: string;
  isSelected: boolean;
};

interface PropsType {
  title: string;
  state: {
    select: SelectOptionType[];
    setSelect: Dispatch<SetStateAction<SelectOptionType[]>>;
  };
}

export default function Select(props: PropsType) {
  const { title, state } = props;
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useToggle({ elements: [selectRef] });

  function isSelected(value: string) {
    let selectors = [...state.select];

    if (value !== "DISREGARD") {
      //Set true/false the clicked one
      selectors = selectors.map((box) =>
        box.value === value ? { ...box, isSelected: !box.isSelected } : box
      );

      //Checks if has an unchecked one.
      const isThereUnchecked = !!selectors.find(
        (box) => !box.isSelected && box.value !== "DISREGARD"
      );

      //If has one false, the Select All turns unchecked, otherwise checked
      selectors = selectors.map((box) =>
        box.value === "DISREGARD"
          ? {
              ...box,
              isSelected: !isThereUnchecked,
              name: isThereUnchecked ? "Select All" : "Unselect All",
            }
          : box
      );

      return state.setSelect(selectors);
    }

    //if all of them are true
    const areAllTrue = !!selectors.every((box) =>
      box.value === "DISREGARD" ? true : box.isSelected
    );

    selectors = selectors.map((box) =>
      box.value !== "DISREGARD"
        ? { ...box, isSelected: !areAllTrue }
        : {
            ...box,
            name: !areAllTrue ? "Unselect All" : "Select All",
            isSelected: !areAllTrue,
          }
    );

    state.setSelect(selectors);
  }

  return (
    <div
      className={`${styles.select} ${isOpen && styles.opened}`}
      ref={selectRef}
    >
      <button
        className={styles.select_title}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <p>{title}</p>
        <PiMagnifyingGlass />
      </button>
      <div className={styles.select_container}>
        <div className={styles.select_options}>
          {state.select.map((option) => (
            <div
              className={`${styles.option} ${
                option.isSelected && styles.selected
              }`}
              key={option.value}
            >
              <input
                type="checkbox"
                name={option.name}
                id={option.value}
                checked={option.isSelected}
                value={option.value}
                onChange={() => isSelected(option.value)}
              />
              <Checkbox
                name={option.name}
                isChecked={option.isSelected}
                onClick={() => isSelected(option.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    isSelected(option.value);
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
