import Image, { ImageProps, StaticImageData } from "next/image";

interface PropsType extends Omit<ImageProps, "src" | "alt"> {
  src: StaticImageData;
  alt?: string;
}

export default function Img(props: PropsType) {
  const { src, alt, style, ...rest } = props;

  return (
    <Image
      fill
      {...rest}
      src={src}
      alt={alt || ""}
      style={{ objectFit: "cover", ...style }}
      sizes="100vw"
    />
  );
}
