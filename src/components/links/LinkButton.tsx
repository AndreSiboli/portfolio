import styles from "@/styles/links/LinkButton.module.scss";

import Link from "next/link";
import { ComponentProps, CSSProperties, ReactNode } from "react";

interface PropsType extends ComponentProps<"a"> {
  text: string | ReactNode;
  to: string;
  style?: CSSProperties;
}

export default function LinkButton(props: PropsType) {
  const { text, to, style } = props;

  return (
    <Link
      {...props}
      href={to}
      className={`${styles.link} ${
        typeof text === "string" ? styles.text : styles.node
      }`}
      style={style}
    >
      {text}
    </Link>
  );
}
