"use client";

import { RefObject, useEffect, useState } from "react";

interface PropsType {
  initialValue?: boolean;
  elements?: RefObject<HTMLElement | null>[];
}

export default function useToggle({ initialValue, elements }: PropsType = {}) {
  const [isOpen, setIsOpened] = useState<boolean>(initialValue || false);

  useEffect(() => {
    if (!elements) return;

    const closeWhenClickedOutsideTheElement = (e: MouseEvent) => {
      const wasClickedOutside = elements.every((ref) => {
        const el = ref.current;
        return !el || !el.contains(e.target as Node);
      });

      if (wasClickedOutside) {
        setIsOpened(false);
      }
    };

    document.addEventListener("click", closeWhenClickedOutsideTheElement);

    return () => {
      document.removeEventListener("click", closeWhenClickedOutsideTheElement);
    };
  }, [elements]);

  return [isOpen, setIsOpened] as const;
}

//Note: When using only a single ref passed from the child component, it causes a bug if there's no 'mousedown' event. Because mousedown triggers before click. However, when using an array of refs, the issue doesn't occur.
