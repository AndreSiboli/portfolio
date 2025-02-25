"use client";

import styles from "@/styles/utils/MouseTracker.module.scss";
import { useEffect, useRef } from "react";

export default function MouseTracker() {
  const trackerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousemove", mouseMove);

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  function mouseMove(e: MouseEvent) {
    const tracker = trackerRef.current;
    if (!tracker) return;
    setTimeout(() => {
      centrilizeMouse({ x: e.clientX, y: e.clientY });
      isButtonOrLink(e);
    }, 50);
  }

  function centrilizeMouse({ x, y }: { x: number; y: number }) {
    const tracker = trackerRef.current;
    if (!tracker) return;
    const trackerWidth = tracker.clientWidth;
    tracker.style.left = x - trackerWidth / 2 + "px";
    tracker.style.top = y - trackerWidth / 2 + "px";
  }

  function isButtonOrLink(e: MouseEvent) {
    const tracker = trackerRef.current;
    if (!tracker) return;
    const target = e.target as HTMLDivElement;
    const dissapear = ["TEXTAREA", "INPUT", "BUTTON"];
    const inside = ["A", "svg", "path", "H1"];

    if (dissapear.includes(target.tagName) || target.closest("button")) {
      tracker.className = `${styles.mouse_tracker} ${styles.disappear}`;
      return;
    }
    if (inside.includes(target.tagName) && target.closest("A")) {
      tracker.className = `${styles.mouse_tracker} ${styles.inside} ${styles.faster}`;
      centrilizeMouse(e);
      return;
    }

    tracker.className = `${styles.mouse_tracker}`;
  }

  return <div className={styles.mouse_tracker} ref={trackerRef}></div>;
}
