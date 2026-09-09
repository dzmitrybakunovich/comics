import { useEffect } from "react";
import type { SwipeNavigationHandlers } from "@/types";
import { SWIPE_MAX_OFF_AXIS_RATIO, SWIPE_MIN_DISTANCE_PX } from "@constants";

export function useSwipeNavigation(
  ref: { current: HTMLElement | null },
  { onPrevious, onNext }: SwipeNavigationHandlers,
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    let startX = 0;
    let startY = 0;
    let tracking = false;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "touch" && event.pointerType !== "pen") {
        return;
      }

      tracking = true;
      startX = event.clientX;
      startY = event.clientY;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!tracking) {
        return;
      }

      tracking = false;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;

      if (Math.abs(deltaX) < SWIPE_MIN_DISTANCE_PX) {
        return;
      }

      if (Math.abs(deltaY) > Math.abs(deltaX) * SWIPE_MAX_OFF_AXIS_RATIO) {
        return;
      }

      if (deltaX < 0) {
        onNext();
        return;
      }

      onPrevious();
    };

    const cancelTracking = () => {
      tracking = false;
    };

    element.addEventListener("pointerdown", onPointerDown);
    element.addEventListener("pointerup", onPointerUp);
    element.addEventListener("pointercancel", cancelTracking);

    return () => {
      element.removeEventListener("pointerdown", onPointerDown);
      element.removeEventListener("pointerup", onPointerUp);
      element.removeEventListener("pointercancel", cancelTracking);
    };
  }, [ref, onPrevious, onNext]);
}
