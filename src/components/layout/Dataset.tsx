"use client";

import styles from "@/styles/layout/Dataset.module.scss";
import { useEffect, useRef, useState } from "react";

interface PropsType {
  data: { num: number; name: string };
  timer: number;
}

export default function Dataset(props: PropsType) {
  const { data, timer } = props;
  const [number, setNumber] = useState(0);
  const [init, setInit] = useState(false);
  const datasetRef = useRef<HTMLDivElement>(null);
  const timeout = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    animation();
  }, []);

  useEffect(() => {
    if (!init) return;

    if (number === data.num) {
      setInit(false);
      clearTimeout(timeout.current);
      return;
    }
    timerFunction();

    return () => {
      clearTimeout(timeout.current);
    };
  }, [init, number]);

  function timerFunction() {
    timeout.current = setTimeout(() => {
      setNumber((prevState) => prevState + 1);
    }, timer);
  }

  function animation() {
    if (!datasetRef.current) return;

    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (!datasetRef.current) return;
        if (entry.isIntersecting) {
          setInit(true);
          observer.unobserve(datasetRef.current);
        }
      });
    };

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(datasetRef.current);
  }

  function format(num: number) {
    if (num <= 9) return `0${num}`;
    return `${num}`;
  }

  return (
    <div className={styles.dataset} ref={datasetRef}>
      <span className={styles.dataset_number}>{format(number)}+</span>
      <span className={styles.dataset_name}>{data.name}</span>
    </div>
  );
}
