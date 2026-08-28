export default function Project({
  name,
  description,
  link,
  retired,
}: {
  name: string;
  description: string;
  link: string;
  retired?: boolean;
}) {
  const hostname = new URL(link).hostname.toUpperCase();

  return (
    <a
      href={link}
      target="_blank"
      className="block py-4 hover:opacity-75 transition-opacity duration-200 space-y-1.5"
    >
      <div className="flex items-center gap-2">
        <h4 className="font-serif text-base font-normal text-amber-50">{name}</h4>
        {retired && (
          <span className="text-[10px] tracking-widest uppercase text-foreground/40 border border-white/10 rounded-full px-2 py-0.5">
            Retired
          </span>
        )}
      </div>
      <p className="text-[10px] tracking-[0.15em] text-foreground/40">{hostname}</p>
      <p className="text-sm text-foreground/70">{description}</p>
    </a>
  );
}
