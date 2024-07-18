import podcast from "@/assets/projects/podcast.png";
import arcade from "@/assets/projects/arcade.png";
import galleria from "@/assets/projects/galleria.jpg";
import jwt from "@/assets/projects/jwt.jpg";
import allgoods from "@/assets/projects/allgoods.jpg";
import theatre from "@/assets/projects/theatre.jpeg";
import echo from "@/assets/projects/echo.jpg";
import endurance from "@/assets/projects/endurance.jpg";
import bibleApi from "@/assets/projects/bible-api.jpg";

export const projects = [
  // {
  //   id: 1,
  //   name: "AllGoods",
  //   link: "https://store-nine-omega.vercel.app/",
  //   src: allgoods,
  //   type: "Website",
  //   description:
  //     "This is a shopping site where users can purchase a wide variety of items. The site features a login system powered by JWT for secure authentication. The project is not finished yet.",
  //   postedAt: "2024/07/17",
  // },
  {
    id: 2,
    name: "Endurance",
    link: "https://gym-fawn-ten.vercel.app/",
    src: endurance,
    type: "Website",
    description:
      "This is a gym website built with Next.js! I focused on creating a seamless user experience. This fictional site was developed to enhance my skills in managing large websites. The design is entirely my own creation.",
    postedAt: "2024/05/05",
  },
  {
    id: 3,
    name: "Bible API",
    link: "https://github.com/AndreSiboli/bible-api",
    src: bibleApi,
    type: "API",
    description:
      "This API was made with Node.js and Express. It is free to use, but it doesn't include all the books. This was my first attempt at creating an API.",
    postedAt: "2023/05/04",
  },
  {
    id: 4,
    name: "Echo",
    link: "https://andresiboli.github.io/echo/",
    src: echo,
    type: "Website",
    description:
      "This is a photo studio website built with Next.js. The main focus of this site is the slider in the hero section. This is the first project where I attempted to create the design myself.",
    postedAt: "2024/01/29",
  },
  {
    id: 5,
    name: "JWT Auth",
    link: "https://github.com/AndreSiboli/jwt-auth",
    src: jwt,
    type: "API",
    description:
      "Here is my first attempt at creating a JWT-based API. The system incorporates refresh tokens to replace expired tokens, ensuring seamless user authentication. For added security, it utilizes HTTP-only cookies to safeguard user data.",
    postedAt: "2024/06/26",
  },
  {
    id: 6,
    name: "Podcast",
    link: "https://andresiboli.github.io/podcast/",
    src: podcast,
    type: "Website",
    description:
      "This is a podcast website built with React. I used another site as a reference to create it.",
    postedAt: "2023/02/20",
  },
  {
    id: 11,
    name: "Duel Game",
    link: "https://duel-game-pi.vercel.app/",
    src: podcast,
    type: "Website",
    description:
      "This is a podcast website built with React. I used another site as a reference to create it.",
    postedAt: "2023/02/20",
  },
  {
    id: 7,
    name: "Arcade",
    link: "https://andresiboli.github.io/game/",
    src: arcade,
    type: "Website",
    description:
      "This is a game website built with React. I used another site as a reference to create it.",
    postedAt: "2023/08/01",
  },
  {
    id: 8,
    name: "Galleria",
    link: "https://galleria-opal.vercel.app/",
    src: galleria,
    type: "Website",
    description:
      "This website was built with Next.js. This was my first attempt to built a gallery website with an external API.",
    postedAt: "2023/05/12",
  },

  {
    id: 10,
    name: "Theatre",
    link: "https://andresiboli.github.io/theatre/",
    src: theatre,
    type: "Website",
    description:
      "This website is simple. It just a banner to a fiction Theatre.",
    postedAt: "2023/09/12",
  },
];
