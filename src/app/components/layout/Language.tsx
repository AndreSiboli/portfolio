import { LanguagesType } from "@/_types/projectsType";
import styles from "@/styles/layout/Language.module.scss";

import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoSass,
  BiLogoCss3,
  BiLogoMongodb,
} from "react-icons/bi";
import { SiNextdotjs, SiExpress, SiAxios, SiRedux } from "react-icons/si";

interface PropsType {
  language: LanguagesType;
}

type LangsType =
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

export default function Language(props: PropsType) {
  const { language } = props;

  const lang = {
    typescript: <BiLogoTypescript />,
    javascript: <BiLogoJavascript />,
    react: <BiLogoReact />,
    "next.js": <SiNextdotjs />,
    "node.js": <BiLogoNodejs />,
    sass: <BiLogoSass />,
    css: <BiLogoCss3 />,
    express: <SiExpress />,
    mongodb: <BiLogoMongodb />,
    axios: <SiAxios />,
    redux: <SiRedux />,
  };

  function changeLanguage() {
    const allLangs = language.toLowerCase() as LangsType;
    return lang[allLangs];
  }

  return (
    <div className={styles.language} title={language}>
      {changeLanguage()}
    </div>
  );
}
