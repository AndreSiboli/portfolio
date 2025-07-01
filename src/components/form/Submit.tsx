import { ComponentProps, ReactNode } from "react";
import styles from "@/styles/form/Submit.module.scss";
import Loading from "../utils/Loading";

interface PropsType extends ComponentProps<"button"> {
  children: ReactNode;
  loading: boolean;
  hasSvg?: boolean;
}

export default function Submit(props: PropsType) {
  const { children, loading, hasSvg = false, ...rest } = props;

  return (
    <button
      {...rest}
      className={`${styles.button} ${hasSvg ? styles.text : styles.svg}`}
    >
      {loading ? <Loading /> : children}
    </button>
  );
}
