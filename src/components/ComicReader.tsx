import { useRef } from "react";
import { comic } from "@data";
import {
  useComicNavigation,
  useFullscreen,
  useKeyboardNavigation,
  useSwipeNavigation,
} from "@hooks";
import { ComicControls } from "@components/ComicControls";
import { ComicPage } from "@components/ComicPage";

export function ComicReader() {
  const readerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLElement>(null);

  const {
    currentPage,
    pageCount,
    isFirstPage,
    isLastPage,
    currentPageSrc,
    pageNumber,
    goToNextPage,
    goToPreviousPage,
    goToFirstPage,
    goToLastPage,
  } = useComicNavigation();

  const { isFullscreen, fullscreenSupported, toggleFullscreen } =
    useFullscreen(readerRef);

  useKeyboardNavigation({
    onPrevious: goToPreviousPage,
    onNext: goToNextPage,
    onFirst: goToFirstPage,
    onLast: goToLastPage,
  });

  useSwipeNavigation(stageRef, {
    onPrevious: goToPreviousPage,
    onNext: goToNextPage,
  });

  return (
    <div ref={readerRef} className="flex h-dvh flex-col bg-ink text-paper">
      <header className="shrink-0 px-4 pb-1 pt-3 text-center sm:pt-5">
        <h1 className="text-sm font-medium leading-snug tracking-[0.14em] text-zinc-100 uppercase sm:text-lg sm:tracking-[0.18em]">
          {comic.title}
        </h1>
      </header>

      <main
        ref={stageRef}
        className="flex min-h-0 flex-1 touch-pan-y items-center justify-center px-3 py-2 sm:px-6"
      >
        <div className="relative flex h-full w-full max-w-5xl items-center justify-center">
          <ComicPage
            src={currentPageSrc}
            title={comic.title}
            pageNumber={pageNumber}
            pageCount={pageCount}
          />
        </div>
      </main>

      <footer className="shrink-0">
        <ComicControls
          currentPage={currentPage}
          pageCount={pageCount}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          isFullscreen={isFullscreen}
          fullscreenSupported={fullscreenSupported}
          onPrevious={goToPreviousPage}
          onNext={goToNextPage}
          onToggleFullscreen={toggleFullscreen}
        />
      </footer>
    </div>
  );
}
