import RecommendationCard from "./recommendation-card";
import { recommendations } from "../data/recommendations";
import FadeIn from "./fade-in";

export default function RecommendationGrid() {
  return (
    <section className="grid grid-cols-1 gap-8 min-[1200px]:grid-cols-2">
      {recommendations.map((item, i) => (
        <FadeIn key={item.id} delay={i * 0.1}>
          <RecommendationCard {...item} />
        </FadeIn>
      ))}
    </section>
  );
}
