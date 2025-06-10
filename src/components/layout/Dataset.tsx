"use client";

import styles from "@/styles/layout/Dataset.module.scss";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface PropsType {
  data: { num: number; name: string };
  timer: number;
}

gsap.registerPlugin(ScrollTrigger);

export default function Dataset(props: PropsType) {
  const { data, timer } = props;
  const [number, setNumber] = useState(0);
  const datasetRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef(0);
  const timerIdRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!datasetRef.current) return;

    ScrollTrigger.create({
      trigger: datasetRef.current,
      start: "top bottom",
      once: true,
      onEnter: () => {
        counterRef.current = 0;
        setNumber(0);
        animateStep();
      },
    });

    return () => {
      timerIdRef.current?.kill();
    };
  }, [data.num, timer]);

  function animateStep() {
    counterRef.current += 1;
    setNumber(counterRef.current);

    if (counterRef.current < data.num) {
      timerIdRef.current = gsap.delayedCall(timer, animateStep);
    }
  }

  function formatNumber(num: number) {
    return num <= 9 ? `0${num}` : `${num}`;
  }

  return (
    <div className={styles.dataset} ref={datasetRef}>
      <span className={styles.dataset_number}>{formatNumber(number)}+</span>
      <span className={styles.dataset_name}>{data.name}</span>
    </div>
  );
}
