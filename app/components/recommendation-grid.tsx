import RecommendationCard from "./recommendation-card";
import { recommendations } from "../data/recommendations";

export default function RecommendationGrid() {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {recommendations.map((item) => (
        <RecommendationCard key={item.id} {...item} />
      ))}
    </section>
  );
}
