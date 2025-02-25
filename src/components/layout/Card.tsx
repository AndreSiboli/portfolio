import { MouseEvent } from "react";
import { ProjectsType } from "@/_types/projectsType";
import styles from "@/styles/layout/Card.module.scss";

import LinkButton from "../links/LinkButton";
import Language from "./Language";
import Img from "../utils/Img";
import Tag from "./Tag";

import { PiGithubLogo } from "react-icons/pi";
import { IoIosLaptop } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

interface PropsType {
  data: ProjectsType;
  handleCard: () => void;
  isOpened: boolean;
}

type Lang =
  | "typescript"
  | "javascript"
  | "react"
  | "next.js"
  | "node.js"
  | "sass"
  | "css"
  | "express"
  | "mongodb"
  | "axios"
  | "redux";

export default function Card(props: PropsType) {
  const { data, handleCard, isOpened } = props;

  function closeCard(e: MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLDivElement).id === "card") handleCard();
    if ((e.target as HTMLDivElement).id === "card_within") handleCard();
  }

  return (
    <div
      className={`${styles.card} ${isOpened && styles.appear}`}
      onClick={closeCard}
      id="card"
    >
      <div className={styles.test} id="card_within">
        <div className={styles.card_project}>
          <div className={styles.project_close}>
            <button onClick={handleCard}>
              <AiOutlineClose />
            </button>
          </div>

          <section className={styles.project_info}>
            <header className={styles.info_header}>
              <h1>{data.name}</h1>
            </header>

            <div className={styles.info_middle}>
              <div>
                {data.tags.map((tag) => (
                  <Tag text={tag} category={tag.toLowerCase()} key={tag}/>
                ))}
              </div>
              <time dateTime={new Date(data.postedAt).toISOString()}>
                {data.postedAt}
              </time>
            </div>

            <div className={styles.info_description}>
              <p>{data.description}</p>
            </div>

            <div className={styles.info_techs}>
              {data.technologies.map((tech) => (
                <Language language={tech} key={tech} />
              ))}
            </div>

            <div className={styles.info_buttons}>
              {data.links.website && (
                <LinkButton
                  text={
                    <>
                      Website <IoIosLaptop />
                    </>
                  }
                  to={data.links.website}
                  target="_blank"
                />
              )}

              <LinkButton
                style={{ background: "#000" }}
                text={
                  <>
                    Github <PiGithubLogo />
                  </>
                }
                to={data.links.github}
                target="_blank"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
