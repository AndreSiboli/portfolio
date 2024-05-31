import { CSSProperties } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import styles from "./Item.module.scss";

import Image from "next/image";
import LinkButton from "../links/LinkButton";
import { PiArrowRight } from "react-icons/pi";

interface PropsType {
  data: {
    src: StaticImport | string;
    name: string;
    link: string;
    type: string;
    description: string;
    postedAt: string;
  };

  style?: CSSProperties;
}

export default function Item(props: PropsType) {
  const { data, style = {} } = props;

  return (
    <div className={styles.item} style={style}>
      <div className={styles.item_wrapper}>
        <div className={styles.item_image}>
          <Image
            src={data.src}
            alt=""
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.item_container}>
          <div className={styles.item_header}>
            <h1>{data.name}</h1>
            <div className={styles.item_info}>
              <span className={styles.info_type}>{data.type}</span>
              <span className={styles.info_postedAt}>{data.postedAt}</span>
            </div>
          </div>
          <div className={styles.item_description}>
            <p>{data.description}</p>
          </div>
          <div className={styles.item_button}>
            <LinkButton
              to={data.link}
              text={
                <>
                  Demo <PiArrowRight />
                </>
              }
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
