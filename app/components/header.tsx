import { splitTitle } from "../utils/text";
import HoverAnim from "./hover-anim";

export interface HeaderProps {
  title?: string;
}

export default function Header({ title = "sophia’s recommendations" }: HeaderProps) {
  const lines = splitTitle(title);

  return (
    <header className="mb-8 md:mb-12 flex items-end gap-2 md:gap-4">
      <h1 className="text-3xl md:text-7xl italic tracking-normal leading-[0.85] text-[#52442C]">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h1>

      <HoverAnim>
      <div className="shrink-0">
        <img 
          src="/img/toro.png" 
          alt="Toro Inoue" 
          className="h-20 w-auto md:h-32 object-contain select-none"
        />
      </div>
      </HoverAnim>
    </header>
  );
}