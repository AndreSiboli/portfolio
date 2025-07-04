import { ComponentProps } from "react";
import styles from "@/styles/inputs/Checkbox.module.scss";
import { FaCheck } from "react-icons/fa6";

interface PropsType extends ComponentProps<"input"> {
  isChecked: boolean;
}

export default function Checkbox(props: PropsType) {
  const { isChecked, ...rest } = props;

  return (
    <div
      {...rest}
      role="checkbox"
      tabIndex={0}
      aria-checked={isChecked}
      className={`${styles.checkbox} ${isChecked ? styles.checked : ""}`}
    >
      <FaCheck />
    </div>
  );
}
