export const splitTitle = (title: string): string[] => {
  if (title.includes('|')) {
    return title.split('|');
  }
  return title.split(' ');
};

export const formatRating = (rating: number) => {
  return [...Array(5)].map((_, i) => (i < rating ? "★" : "☆")).join("");
};