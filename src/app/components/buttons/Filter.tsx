import styles from "@/styles/buttons/Filter.module.scss";
import { closeWhenClickedOutsideTheElement } from "@/utils/closeManager";
import { useEffect, useRef, useState } from "react";
import { PiMagnifyingGlass } from "react-icons/pi";

interface PropsType {
  handleValue: (
    str: {
      name: string;
      value: string;
      selected: boolean;
    }[]
  ) => void;
}

export default function Filter(props: PropsType) {
  const { handleValue } = props;
  const filterRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [checkboxs, setCheckbox] = useState([
    { name: "Select All", value: "DISREGARD", selected: true },
    { name: "API", value: "API", selected: true },
    { name: "Excel", value: "Excel", selected: true },
    { name: "Website", value: "Website", selected: true },
  ]);

  useEffect(() => {
    closeWhenClickedOutsideTheElement(filterRef, setIsOpen);
  }, []);

  function defineIsOpen() {
    setIsOpen((prevState) => !prevState);
  }

  function isSelected(value: string) {
    let selectors = [...checkboxs];

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

      return setCheckbox(selectors);
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

    setCheckbox(selectors);
  }

  function onChange(value: string) {
    isSelected(value);
  }

  useEffect(() => {
    handleValue(checkboxs);
  }, [checkboxs]);

  return (
    <div
      className={`${styles.filter} ${isOpen && styles.opened}`}
      ref={filterRef}
    >
      <div className={styles.filter_title} onClick={defineIsOpen}>
        <p>Filter</p>
        <PiMagnifyingGlass />
      </div>
      <div className={styles.filter_container}>
        <div className={styles.filter_options}>
          {checkboxs.map((option) => (
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
              <label htmlFor={option.value}>{option.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
