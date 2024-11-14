import styles from "@/styles/links/LinkButton.module.scss";

import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

interface PropsType {
  text: string | ReactNode;
  to: string;
  style?: CSSProperties;
  download?: string | undefined;
  target?: "_blank" | "_parent" | "_self" | "_top";
}

export default function LinkButton(props: PropsType) {
  const { text, to, style, download, target = "_self" } = props;

  return (
    <Link
      href={to}
      className={`${styles.link} ${
        typeof text === "string" ? styles.text : styles.node
      }`}
      style={style}
      download={download}
      target={target}
    >
      {text}
    </Link>
  );
}
