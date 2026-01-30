interface HeaderProps {
  title?: string;
}

export default function Header({ title = "sophia’s recommendations" }: HeaderProps) {
  return (
    <header className="mb-16 flex items-center gap-6">
      <h1 className="text-[72px] font-stretch-95% italic tracking-normal leading-[0.8] text-[#52442C]">
        {title.split(' ').map((word, i) => (
          <span key={i}>
            {word} {i === 0 && <br />}
          </span>
        ))}
      </h1>

      <div className="shrink-0">
        <img 
          src="/img/toro.png" 
          alt="Toro Inoue" 
          className="h-32 w-auto object-contain select-none"
        />
      </div>
    </header>
  );
}