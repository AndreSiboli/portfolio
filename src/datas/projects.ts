import { ProjectsType } from "@/_types/projectsType";

import podcast from "@/assets/projects/podcast.png";
import arcade from "@/assets/projects/arcade.png";
import galleria from "@/assets/projects/galleria.jpg";
import jwt from "@/assets/projects/jwt.jpg";
import theatre from "@/assets/projects/theatre.jpeg";
import echo from "@/assets/projects/echo.jpg";
import endurance from "@/assets/projects/endurance.jpg";
import bibleApi from "@/assets/projects/bible-api.jpg";
import moda from "@/assets/projects/moda.jpg";
import valorant from "@/assets/projects/valorant.jpg";
import excel from "@/assets/projects/excel.jpg";
import charlotte from "@/assets/projects/charlotte.jpg";
import frame from "@/assets/projects/frame.jpg";
import alter from "@/assets/projects/alter-ego.png";
import sign from "@/assets/projects/sign.jpg";

export const projects: ProjectsType[] = [
  {
    id: "A408BA",
    name: "Login System",
    links: {
      website: "https://login-system-pink.vercel.app/",
      github: "https://github.com/AndreSiboli/login-system",
    },
    src: { thumbnail: sign },
    tags: ["Website", "API"],
    description:
      "The main focus of this site is to implement a login system based in JWT. No emphasis on design.",
    postedAt: "2025/06/15",
    technologies: ["Next.js", "Typescript", "Sass", "React"],
  },
  {
    id: "F907EA",
    name: "Alter ego",
    links: {
      website: "https://alter-ego-eight.vercel.app/",
      github: "https://github.com/AndreSiboli/alter-ego",
    },
    src: { thumbnail: alter },
    tags: ["Website"],
    description:
      "This website was created to training my abilities with gsap and lenis. It's not an informative website. If you're interested in the topic, feel free to do your own research.",
    postedAt: "2025/06/04",
    technologies: ["Next.js", "Typescript", "Sass", "React"],
  },
  {
    id: "A4C2C5",
    name: "Moda",
    links: {
      website: "https://moda-eosin.vercel.app",
      github: "https://github.com/AndreSiboli/moda",
    },
    src: { thumbnail: moda },
    tags: ["Website"],
    description:
      "Moda is a website built with Next.js, with a strong emphasis on design. As I am relatively new to the design field, I drew inspiration from various references to achieve the desired outcome. It has passed to a redesign phase, and I am currently working on it.",
    postedAt: "2025/05/01",
    technologies: ["Next.js", "Typescript", "Sass", "React", "Redux"],
  },
  {
    id: "E97UI8",
    name: "Frame",
    links: {
      github: "https://github.com/AndreSiboli/frame",
      website: "https://frame-delta-five.vercel.app/",
    },
    src: { thumbnail: frame },
    tags: ["Website"],
    description:
      "This website was created to experiment with scroll animations and theme modes. It is intended for testing purposes only and is not a live or official site.",
    postedAt: "2025/04/14",
    technologies: ["Next.js", "Typescript", "Sass", "React"],
  },
  {
    id: "F7F2D9",
    name: "Photographer",
    links: {
      github: "https://github.com/AndreSiboli/charlotte",
      website: "https://charlotte-five.vercel.app/",
    },
    src: { thumbnail: charlotte },
    tags: ["Website"],
    description:
      "I've created this photographer portfolio as a personal project. It was recently redesigned with a new layout and animations. Please note that this is not a real website. All image credits are listed in the footer.",
    postedAt: "2025/06/25",
    technologies: ["Next.js", "Typescript", "Sass", "React"],
  },
  {
    id: "CA21PD",
    name: "Planilhas",
    links: {
      github: "https://github.com/AndreSiboli/Excel",
    },
    src: { thumbnail: excel },
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
    src: { thumbnail: valorant },
    tags: ["Website"],
    description:
      "I've tried to make a website that uses Redux, API requests, and some animations. I'm using a fan-made API for Valorant. This project is still in development. (I've never played Valorant before.)",
    postedAt: "2025/01/24",
    technologies: ["Next.js", "Typescript", "Sass", "React", "Redux", "Axios"],
  },
  {
    id: "A1B2C3",
    name: "Endurance",
    links: {
      website: "https://gym-fawn-ten.vercel.app/",
      github: "https://github.com/AndreSiboli/gym",
    },
    src: { thumbnail: endurance },
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
    src: { thumbnail: bibleApi },
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
    src: { thumbnail: echo },
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
    src: { thumbnail: jwt },
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
    src: { thumbnail: podcast },
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
  //   src: { thumbnail: modaFull },
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
    src: { thumbnail: arcade },
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
    src: { thumbnail: galleria },
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
    src: { thumbnail: theatre },
    tags: ["Website"],
    description:
      "This website is simple. It just a banner to a fiction Theatre.",
    postedAt: "2023/09/12",
    technologies: ["Next.js", "React", "Typescript", "Sass"],
  },
];
