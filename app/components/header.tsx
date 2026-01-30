import { cn } from "../utils/cn";
import { splitTitle } from "../utils/text";

export interface HeaderProps {
  title?: string;
  singleLine?: boolean;
}

export default function Header({ title = "sophia’s recommendations", singleLine = false }: HeaderProps) {
  const words = splitTitle(title);

  return (
    <header className="mb-8 md:mb-12 flex items-end gap-2 md:gap-4">
      <h1 className="text-3xl md:text-7xl italic tracking-normal leading-[0.85] text-[#52442C]">
        {words.map((word, i) => (
          <span key={i} className={cn("block", singleLine && "inline-block mr-2")}>
            {word}
          </span>
        ))}
      </h1>

      <div className="shrink-0">
        <img 
          src="/img/toro.png" 
          alt="Toro Inoue" 
          className="h-20 w-auto md:h-32 object-contain select-none"
        />
      </div>
    </header>
  );
}