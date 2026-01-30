import Image from "next/image";
import { Recommendation } from "../data/recommendations";
import { LuLink } from "react-icons/lu";
import { formatRating } from "../utils/text";

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
        relative flex flex-col sm:flex-row gap-6 p-5 md:p-7 rounded-[32px] 
        border border-[#52442C]/60 bg-[#FCFCF2] shadow-sm
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

        <div className="w-full sm:w-40 shrink-0">
        <Image
          src={image}
          alt={title}
          width={160}
          height={240}
          className="rounded-xl object-cover w-full h-auto sm:h-60"
        />
      </div>

        <div className="flex flex-col gap-3 text-[#52442C] pr-0 sm:pr-6">
          <div>
            <h3 className="text-xl font-bold tracking-tight leading-tight">
              {title}{" "}
              <span className="block text-base font-normal italic opacity-60">
                by {author}
              </span>
            </h3>
            
            <div className="flex gap-0.5 mt-1 text-lg text-[#52442C]/70">
              {formatRating(rating)}
          </div>
          </div>

          <div className="space-y-3 text-sm italic leading-relaxed">
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