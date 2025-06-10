import styles from "@/styles/links/LinkButton.module.scss";

import Link from "next/link";
import { ComponentProps } from "react";

interface PropsType extends ComponentProps<"a"> {
  href: string;
  hasSvg?: boolean;
}

export default function LinkButton(props: PropsType) {
  const { hasSvg = false, href, children, ...rest } = props;

  return (
    <Link
      {...rest}
      href={href}
      className={`${styles.link} ${!hasSvg ? styles.text : styles.node}`}
    >
      {children}
    </Link>
  );
}
