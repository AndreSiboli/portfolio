import { RefObject } from "react";
import styles from "@/styles/form/Textarea.module.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface PropsType {
  id: string;
  name: string;
  label: string;
  reference: RefObject<HTMLTextAreaElement>;
}

export default function Textarea(props: PropsType) {
  const { id, name, label, reference } = props;

  return (
    <div className={styles.textarea}>
      <textarea
        name={name}
        id={id}
        placeholder=""
        ref={reference}
        className={poppins.className}
        rows={5}
        cols={20}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
