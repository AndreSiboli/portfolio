import styles from "@/styles/home/components/HeroImage.module.scss";
import Img from "@/components/utils/Img";

import image from "@/assets/me.jpg";
import { PiStarFourFill } from "react-icons/pi";

export default function HeroImage() {
  return (
    <div className={styles.hero_image}>
      <div className={styles.image_wrapper}>
        {Array.from({ length: 4 }, (_, i) => i).map((star) => (
          <div className={styles.image_star} key={star}>
            <PiStarFourFill />
          </div>
        ))}

        <figure className={styles.hero_image_container}>
          <Img
            src={image}
            alt="An image of myself"
            style={{ objectPosition: "center -45px" }}
          />
        </figure>
      </div>
    </div>
  );
}
