import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { PageIndicator } from "@components/PageIndicator";

type ComicControlsProps = {
  currentPage: number;
  pageCount: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  isFullscreen: boolean;
  fullscreenSupported: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
};

const controlButtonClass =
  "inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-zinc-100 transition-colors hover:bg-zinc-800 hover:text-ember focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-ember disabled:cursor-not-allowed disabled:text-zinc-600 disabled:hover:bg-transparent sm:size-12";

export function ComicControls({
  currentPage,
  pageCount,
  isFirstPage,
  isLastPage,
  isFullscreen,
  fullscreenSupported,
  onPrevious,
  onNext,
  onToggleFullscreen,
}: ComicControlsProps) {
  return (
    <div className="flex items-center justify-center gap-2 px-3 py-3 sm:gap-4 sm:py-4">
      <button
        type="button"
        aria-label="Previous page"
        disabled={isFirstPage}
        onClick={onPrevious}
        className={controlButtonClass}
      >
        <ChevronLeft size={22} aria-hidden="true" />
      </button>

      <PageIndicator currentPage={currentPage} pageCount={pageCount} />

      <button
        type="button"
        aria-label="Next page"
        disabled={isLastPage}
        onClick={onNext}
        className={controlButtonClass}
      >
        <ChevronRight size={22} aria-hidden="true" />
      </button>

      {fullscreenSupported ? (
        <button
          type="button"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          onClick={onToggleFullscreen}
          className={controlButtonClass}
        >
          {isFullscreen ? (
            <Minimize2 size={20} aria-hidden="true" />
          ) : (
            <Maximize2 size={20} aria-hidden="true" />
          )}
        </button>
      ) : null}
    </div>
  );
}
