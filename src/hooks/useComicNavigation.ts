import { useCallback, useEffect, useState } from "react";
import { FIRST_PAGE_INDEX } from "@constants";
import { comic } from "@data";

export function useComicNavigation() {
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE_INDEX);

  const pageCount = comic.pages.length;
  const isFirstPage = currentPage === FIRST_PAGE_INDEX;
  const isLastPage = currentPage === pageCount - 1;
  const currentPageSrc = comic.pages[currentPage];
  const pageNumber = currentPage + 1;

  const goToNextPage = useCallback(() => {
    setCurrentPage((page) => Math.min(page + 1, comic.pages.length - 1));
  }, []);

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((page) => Math.max(page - 1, FIRST_PAGE_INDEX));
  }, []);

  const goToFirstPage = useCallback(() => {
    setCurrentPage(FIRST_PAGE_INDEX);
  }, []);

  const goToLastPage = useCallback(() => {
    setCurrentPage(comic.pages.length - 1);
  }, []);

  useEffect(() => {
    const nextPage = comic.pages[currentPage + 1];
    if (!nextPage) {
      return;
    }

    const image = new Image();
    image.src = nextPage;
  }, [currentPage]);

  return {
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
  };
}
