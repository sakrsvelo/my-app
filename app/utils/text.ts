export const splitTitle = (title: string) => {
  return title.split(' ');
};

export const formatRating = (rating: number) => {
  return [...Array(5)].map((_, i) => (i < rating ? "★" : "☆")).join("");
};