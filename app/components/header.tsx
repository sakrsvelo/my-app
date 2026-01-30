interface HeaderProps {
  title?: string;
}

export default function Header({ title = "sophia’s recommendations" }: HeaderProps) {
  return (
    <header className="mb-8 md:mb-12 flex items-center justify-between gap-4">
      {/* text-4xl on mobile, text-7xl on desktop */}
      <h1 className="text-4xl md:text-7xl italic tracking-normal leading-[0.9] text-[#52442C]">
        {title.split(' ').map((word, i) => (
          <span key={i} className="inline-block">
            {word}&nbsp;{i === 0 && <br className="hidden md:block" />}
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