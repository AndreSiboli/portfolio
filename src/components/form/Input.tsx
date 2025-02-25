"use client";

import styles from "@/styles/form/Input.module.scss";
import { RefObject } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface PropsType {
  id: string;
  name: string;
  type: string;
  label: string;
  reference: RefObject<HTMLInputElement | null>;
}

export default function Input(props: PropsType) {
  const { id, name, type, label, reference } = props;

  return (
    <div className={styles.input}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder=""
        ref={reference}
        className={poppins.className}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
