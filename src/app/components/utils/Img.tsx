import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";

interface PropsType {
  src: string | StaticImageData;
  alt?: string;
  style?: CSSProperties;
}

export default function Img(props: PropsType) {
  const { src, alt = "", style = {} } = props;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="100vw"
      style={{ objectFit: "cover", ...style }}
    />
  );
}
