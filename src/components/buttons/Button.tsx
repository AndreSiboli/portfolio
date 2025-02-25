import { ComponentProps, ReactNode } from "react";
import styles from "@/styles/buttons/Button.module.scss";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface PropsType extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "v1" | "v2";
}

export default function Button(props: PropsType) {
  const { children, variant = "v1" } = props;

  return (
    <button
      {...props}
      className={`${styles.button} ${styles[variant]} ${nunito.className}`}
    >
      {children}
    </button>
  );
}
