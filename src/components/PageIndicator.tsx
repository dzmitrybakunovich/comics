type PageIndicatorProps = {
  currentPage: number
  pageCount: number
}

export function PageIndicator({ currentPage, pageCount }: PageIndicatorProps) {
  const pageNumber = currentPage + 1

  return (
    <p
      className="min-w-16 text-center text-sm font-medium tracking-wide text-zinc-300 tabular-nums sm:text-base"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="sr-only">Page </span>
      {pageNumber}
      <span aria-hidden="true"> / </span>
      <span className="sr-only"> of </span>
      {pageCount}
    </p>
  )
}
