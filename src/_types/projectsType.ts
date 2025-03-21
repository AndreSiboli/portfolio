import { StaticImageData } from "next/image";

export type LanguagesType =
  | "Typescript"
  | "Javascript"
  | "React"
  | "Next.js"
  | "Node.js"
  | "Sass"
  | "Css"
  | "Express"
  | "Mongodb"
  | "Axios"
  | "Redux"
  | "Excel";

export interface ProjectsType {
  id: string;
  name: string;
  links: { github: string; website?: string };
  src: { thumbnail: StaticImageData };
  tags: string[];
  description: string;
  postedAt: string;
  technologies: LanguagesType[];
}
