const asset = (path: string) => {
  return `${import.meta.env.BASE_URL}comics/${path}`;
};

export const comic = {
  title: "This Is Us: Boy Meets World",
  description:
    "A limited-edition grayscale comic about two people finding their way toward each other.",
  pages: [
    asset("page-01.webp"),
    asset("page-02.webp"),
    asset("page-03.webp"),
    asset("page-04.webp"),
    asset("page-05.webp"),
    asset("page-06.webp"),
    asset("page-07.webp"),
    asset("page-08.webp"),
    asset("page-09.webp"),
    asset("page-10.webp"),
    asset("page-11.webp"),
    asset("page-12.webp"),
    asset("page-13.webp"),
    asset("page-14.webp"),
    asset("page-15.webp"),
  ],
} as const;
