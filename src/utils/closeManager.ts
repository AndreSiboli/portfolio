import { Dispatch, RefObject, SetStateAction } from "react";

export function closeWhenClickedOutsideTheElement(
  ref: RefObject<HTMLDivElement>,
  closeFunction: Dispatch<SetStateAction<boolean>>
) {
  function handleClickOutside(e: MouseEvent) {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      closeFunction(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}
