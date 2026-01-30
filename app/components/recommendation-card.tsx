import Image from "next/image";
import { Recommendation } from "../data/recommendations";
import { LuLink } from "react-icons/lu";

export default function RecommendationCard({
      title,
      author,
      image,
      rating,
      synopsis,
      review,
      url,
  }: Recommendation) {
    return (
      <article
        className="
          relative flex gap-8 rounded-[32px] border border-[#52442C]/60
          bg-[#FCFCF2] p-6 shadow-sm
          transition-all duration-300 ease-out
          hover:-translate-y-1 hover:shadow-md
        "
      >
        <a 
          href={url}
          rel="noopener noreferrer"
        className="absolute top-6 right-6 text-[#52442C]/70 hover:text-[#52442C] transition-colors cursor-pointer"
        aria-label={`Read more about ${title}`}
        >
          <LuLink size={22} />
        </a>

        <div className="w-40 shrink-0">
          <Image
            src={image}
            alt={title}
            width={160}
            height={240}
            className="rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 text-[#52442C] pr-6">
          <div>
            <h3 className="text-xl font-bold tracking-tight leading-tight">
              {title}{" "}
              <span className="block text-base font-normal italic opacity-60">
                by {author}
              </span>
            </h3>
            
            <div className="flex gap-0.5 mt-1 text-lg text-[#52442C]/70">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < rating ? "★" : "☆"}</span>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-xs italic leading-relaxed">
            <p>
              <span className="font-bold not-italic">synopsis:</span> {synopsis}
            </p>
            <p>
              <span className="font-bold not-italic">review:</span> {review}
            </p>
          </div>
        </div>
      </article>
    );
}