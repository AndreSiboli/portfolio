import styles from "@/styles/form/Submit.module.scss";
import { MouseEvent, ReactNode } from "react";
import { Poppins } from "next/font/google";
import Loading from "../utils/Loading";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface PropsType {
  text: string | ReactNode;
  handleSubmit: () => void;
  loading: boolean;
}

export default function Submit(props: PropsType) {
  const { text, handleSubmit, loading } = props;

  function submit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <button
      onClick={(e) => submit(e)}
      className={`${poppins.className} ${styles.button} ${
        typeof text === "string" ? styles.text : styles.node
      }`}
    >
      {loading ? <Loading /> : text}
    </button>
  );
}
