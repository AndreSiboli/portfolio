import { ComponentProps, useState } from "react";
import styles from "@/styles/buttons/ButtonLoading.module.scss";
import clsx from "clsx";

interface PropsType extends Omit<ComponentProps<"button">, "onClick"> {
  text: string;
  message?: { success: string; error: string };
  handleClick: () => Promise<string>;
  variant?: "v1" | "v2";
}

export default function ButtonLoading(props: PropsType) {
  const { text, handleClick, variant = "v1", ...rest } = props;
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState<
    "normal" | "loading" | "success" | "error"
  >("normal");

  async function handleOnClick() {

    if (isLoading !== "normal") return;

    try {
      setIsLoading("loading");
      const response = await handleClick();

      if (typeof response === "string") {
        setMessage(response);
        setIsLoading("success");
        setTimeout(() => setIsLoading("normal"), 2000);
        return;
      }
      setIsLoading("normal");
    } catch (err) {
      if (typeof err === "string") {
        setMessage(err);
        setIsLoading("error");
        setTimeout(() => setIsLoading("normal"), 2000);
        return;
      }
      setIsLoading("normal");
    }
  }

  return (
    <button
      {...rest}
      className={`${styles.button} ${styles[variant]}`}
      aria-busy={isLoading === "loading"}
      onClick={handleOnClick}
    >
      <p
        className={clsx(styles.button_text, {
          [styles.active]: isLoading === "normal",
        })}
      >
        {text}
      </p>

      <div
        className={clsx(styles.button_loading, {
          [styles.active]: isLoading === "loading",
        })}
      >
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>

      <p
        className={clsx(styles.button_message, {
          [styles.active]: isLoading === "error" || isLoading === "success",
          [styles.button_success]: isLoading === "success",
          [styles.button_error]: isLoading === "error",
        })}
      >
        {message}
      </p>
    </button>
  );
}
