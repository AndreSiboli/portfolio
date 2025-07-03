"use client";

import { RefObject, useEffect, useState } from "react";

interface PropsType {
  initialValue?: boolean;
  element?: RefObject<HTMLElement | null>;
}

export default function useToggle({ initialValue, element }: PropsType) {
  const [isOpen, setIsOpened] = useState<boolean>(initialValue || false);

  useEffect(() => {
    if (!element?.current) return;

    const closeWhenClickedOutsideTheElement = (e: MouseEvent) => {
      if (!element?.current) return;
      if (!element.current.contains(e.target as Node)) setIsOpened(false);
    };

    document.addEventListener("click", closeWhenClickedOutsideTheElement);

    return () => {
      document.removeEventListener("click", closeWhenClickedOutsideTheElement);
    };
  }, []);

  return [isOpen, setIsOpened] as const;
}
