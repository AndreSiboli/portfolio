import styles from "@/styles/layout/Tag.module.scss";

interface PropsType {
  text: string;
  category: string;
}

export default function Tag(props: PropsType) {
  const { text, category } = props;

  return (
    <div className={`${styles.tag} ${styles[category]}`}>
      <p>{text}</p>
    </div>
  );
}
