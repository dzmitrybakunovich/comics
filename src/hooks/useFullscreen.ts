import { useCallback, useEffect, useState, type RefObject } from "react";
import {
  exitFullscreen,
  getFullscreenElement,
  isFullscreenSupported,
  requestFullscreen,
} from "@utils";

export function useFullscreen(elementRef: RefObject<HTMLElement | null>) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const fullscreenSupported = isFullscreenSupported();

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(getFullscreenElement() !== null);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        onFullscreenChange,
      );
    };
  }, []);

  const toggleFullscreen = useCallback(async () => {
    const element = elementRef.current;
    if (!element || !isFullscreenSupported()) {
      return;
    }

    try {
      if (getFullscreenElement()) {
        await exitFullscreen();
        return;
      }

      await requestFullscreen(element);
    } catch {
      // Fullscreen can be denied or unimplemented; keep reading as-is.
    }
  }, [elementRef]);

  return {
    isFullscreen,
    fullscreenSupported,
    toggleFullscreen,
  };
}
