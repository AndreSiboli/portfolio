import { ReactNode } from "react";
import styles from "@/styles/buttons/Button.module.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface PropsType {
  children: ReactNode;
  handleFunction: () => void;
  effect?: boolean;
}

export default function Button(props: PropsType) {
  const { children, handleFunction, effect = false } = props;

  return (
    <button
      className={`${styles.button} ${effect && styles.effect} ${poppins.className}`}
      onClick={handleFunction}
    >
      {children}
    </button>
  );
}
