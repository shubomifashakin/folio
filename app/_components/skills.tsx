type SkillsProps = {
  title: string;
  items: string[];
};

export default function Skills({ title, items }: SkillsProps) {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-sm">{title}</h4>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="bg-white/5 font-bold px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-x-2 text-xs"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
