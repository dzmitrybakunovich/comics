import { useState } from "react";

type ComicPageProps = {
  src: string | undefined;
  title: string;
  pageNumber: number;
  pageCount: number;
};

export function ComicPage({
  src,
  title,
  pageNumber,
  pageCount,
}: ComicPageProps) {
  const [retryKey, setRetryKey] = useState(0);
  const [errorKey, setErrorKey] = useState<string | null>(null);

  const displayKey = `${src}-${retryKey}`;
  const hasError = errorKey === displayKey;

  const retryCurrentPage = () => {
    setErrorKey(null);
    setRetryKey((key) => key + 1);
  };

  if (hasError || !src) {
    return (
      <div className="flex max-w-sm flex-col items-center gap-3 px-6 text-center">
        <p className="text-base text-zinc-200">Unable to load this page.</p>
        <p className="text-sm text-zinc-400">Page {pageNumber}</p>
        <button
          type="button"
          onClick={retryCurrentPage}
          className="mt-2 rounded-full border border-zinc-600 px-4 py-2 text-sm text-zinc-100 transition-colors hover:border-ember hover:text-ember focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-ember"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <img
      key={displayKey}
      src={retryKey > 0 ? `${src}?retry=${retryKey}` : src}
      alt={`${title}, page ${pageNumber} of ${pageCount}`}
      width={1748}
      height={2480}
      className="page-fade h-auto max-h-full w-auto max-w-full object-contain select-none"
      loading="eager"
      decoding="async"
      draggable={false}
      onError={() => setErrorKey(displayKey)}
    />
  );
}
