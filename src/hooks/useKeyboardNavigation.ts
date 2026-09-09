import { useEffect } from "react";
import type { KeyboardNavigationHandlers } from "@/types";
import { isTypingTarget } from "@utils";

export function useKeyboardNavigation({
  onPrevious,
  onNext,
  onFirst,
  onLast,
}: KeyboardNavigationHandlers) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) {
        return;
      }

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          onPrevious();
          break;
        case "ArrowRight":
          event.preventDefault();
          onNext();
          break;
        case "Home":
          event.preventDefault();
          onFirst();
          break;
        case "End":
          event.preventDefault();
          onLast();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onPrevious, onNext, onFirst, onLast]);
}
