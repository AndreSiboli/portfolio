import { ProjectsType } from "@/_types/projectsType";

import podcast from "@/assets/projects/podcast.png";
import arcade from "@/assets/projects/arcade.png";
import galleria from "@/assets/projects/galleria.jpg";
import jwt from "@/assets/projects/jwt.jpg";
import theatre from "@/assets/projects/theatre.jpeg";
import echo from "@/assets/projects/echo.jpg";
import echoFull from "@/assets/full/echo.png";
import endurance from "@/assets/projects/endurance.jpg";
import enduranceFull from "@/assets/full/endurance.png";
import bibleApi from "@/assets/projects/bible-api.jpg";
import moda from "@/assets/projects/moda.jpg";
import valorant from "@/assets/projects/valorant.jpg";
import excel from "@/assets/projects/excel.jpg";
import modaFull from "@/assets/full/moda.png";

export const projects: ProjectsType[] = [
  {
    id: "CA21PD",
    name: "Planilhas",
    links: {
      github: "https://github.com/AndreSiboli/Excel",
    },
    src: { thumbnail: excel, fullView: modaFull },
    tags: ["Excel"],
    description:
      "In this repository have all my projects that I've made in Excel.",
    postedAt: "2025/02/11",
    technologies: ["Excel"],
  },
  {
    id: "A7B8I9",
    name: "Valorant",
    links: {
      website: "https://valorant-blush.vercel.app/",
      github: "https://github.com/AndreSiboli/valorant",
    },
    src: { thumbnail: valorant, fullView: modaFull },
    tags: ["Website"],
    description:
      "I've tried to make a website that uses Redux, API requests, and some animations. I'm using a fan-made API for Valorant. This project is still in development. (I've never played Valorant before.)",
    postedAt: "2025/01/24",
    technologies: ["Next.js", "Typescript", "Sass", "React", "Redux", "Axios"],
  },
  {
    id: "A4C2C5",
    name: "Moda",
    links: {
      website: "https://moda-eosin.vercel.app",
      github: "https://github.com/AndreSiboli/moda",
    },
    src: { thumbnail: moda, fullView: modaFull },
    tags: ["Website"],
    description:
      "Moda is a website built with Next.js, with a strong emphasis on design. As I am relatively new to the design field, I drew inspiration from various references to achieve the desired outcome.",
    postedAt: "2024/09/20",
    technologies: ["Next.js", "Typescript", "Sass", "React", "Redux"],
  },
  {
    id: "A1B2C3",
    name: "Endurance",
    links: {
      website: "https://gym-fawn-ten.vercel.app/",
      github: "https://github.com/AndreSiboli/gym",
    },
    src: { thumbnail: endurance, fullView: enduranceFull },
    tags: ["Website"],
    description:
      "This is a gym website built with Next.js! I focused on creating a seamless user experience. This fictional site was developed to enhance my skills in managing large websites. The design is entirely my own creation.",
    postedAt: "2024/05/05",
    technologies: ["Next.js", "Typescript", "Sass", "React", "Axios"],
  },
  {
    id: "D4E5F6",
    name: "Bible API",
    links: {
      github: "https://github.com/AndreSiboli/bible-api",
    },
    src: { thumbnail: bibleApi, fullView: modaFull },
    tags: ["API"],
    description:
      "This API was made with Node.js and Express. It is free to use, but it doesn't include all the books. This was my first attempt at creating an API.",
    postedAt: "2023/05/04",
    technologies: ["Node.js", "Typescript", "Express", "Mongodb"],
  },
  {
    id: "G7H8I9",
    name: "Echo",
    links: {
      website: "https://echo-five-kappa.vercel.app/",
      github: "https://github.com/AndreSiboli/echo",
    },
    src: { thumbnail: echo, fullView: echoFull },
    tags: ["Website"],
    description:
      "This is a photo studio website built with Next.js. The main focus of this site is the slider in the hero section. This is the first project where I attempted to create the design myself.",
    postedAt: "2024/01/29",
    technologies: ["Next.js", "Typescript", "Sass", "React", "Axios"],
  },
  {
    id: "J1K2L3",
    name: "JWT Auth",
    links: {
      github: "https://github.com/AndreSiboli/jwt-auth",
    },
    src: { thumbnail: jwt, fullView: modaFull },
    tags: ["API"],
    description:
      "Here is my first attempt at creating a JWT-based API. The system incorporates refresh tokens to replace expired tokens, ensuring seamless user authentication. For added security, it utilizes HTTP-only cookies to safeguard user data.",
    postedAt: "2024/06/26",
    technologies: ["Node.js", "Typescript", "Express", "Mongodb"],
  },
  {
    id: "M4N5O6",
    name: "Podcast",
    links: {
      website: "https://github.com/AndreSiboli/podcast/tree/master",
      github: "https://github.com/AndreSiboli/podcast",
    },
    src: { thumbnail: podcast, fullView: modaFull },
    tags: ["Website"],
    description:
      "This was my first project built with React. As I didn't have knowledge about design, I used another site as a reference to create it.",
    postedAt: "2023/02/20",
    technologies: ["React", "Typescript", "Sass"],
  },
  // {
  //   id: "P7Q8R9",
  //   name: "Duel Game",
  //   links: {
  //     website: "https://duel-game-pi.vercel.app/",
  //     github: "https://github.com/AndreSiboli/duel-game",
  //   },
  //   src: { thumbnail: modaFull, fullView: modaFull },
  //   tags: ["Website"],
  //   description:
  //     "This is a podcast website built with React. I used another site as a reference to create it.",
  //   postedAt: "2024/05/05",
  //   technologies: ["Next.js", "React", "Typescript", "Sass"],
  // },
  {
    id: "S1T2U3",
    name: "Arcade",
    links: {
      website: "https://andresiboli.github.io/game/",
      github: "https://github.com/AndreSiboli/game",
    },
    src: { thumbnail: arcade, fullView: modaFull },
    tags: ["Website"],
    description:
      "This is a game website built with React. I used another site as a reference to create it.",
    postedAt: "2023/08/01",
    technologies: ["Next.js", "React", "Typescript", "Sass"],
  },
  {
    id: "V4W5X6",
    name: "Galleria",
    links: {
      website: "https://galleria-opal.vercel.app/",
      github: "https://github.com/AndreSiboli/galleria",
    },
    src: { thumbnail: galleria, fullView: modaFull },
    tags: ["Website"],
    description:
      "This website was built with Next.js. This was my first attempt to build a gallery website with an external API.",
    postedAt: "2023/05/12",
    technologies: ["Next.js", "React", "Typescript", "Sass", "Axios"],
  },
  {
    id: "Y7Z8A9",
    name: "Theatre",
    links: {
      website: "https://andresiboli.github.io/theatre/",
      github: " https://github.com/AndreSiboli/theatre",
    },
    src: { thumbnail: theatre, fullView: modaFull },
    tags: ["Website"],
    description:
      "This website is simple. It just a banner to a fiction Theatre.",
    postedAt: "2023/09/12",
    technologies: ["Next.js", "React", "Typescript", "Sass"],
  },
];
