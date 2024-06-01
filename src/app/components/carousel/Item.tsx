import { CSSProperties } from "react";
import { StaticImageData } from "next/image";
import styles from "@/styles/carousel/Item.module.scss";

import Image from "next/image";
import LinkButton from "@/app/components/links/LinkButton";

import { PiArrowRight } from "react-icons/pi";
import Img from "../utils/Img";

interface PropsType {
  data: {
    src: StaticImageData | string;
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
          <Img src={data.src} alt="" />
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
