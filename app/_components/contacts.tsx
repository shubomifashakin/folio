interface ContactProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function Contact({ href, icon, label }: ContactProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="bg-white/5 px-4 font-bold py-2 rounded-full hover:bg-white/10 text-sm transition-all duration-300 flex items-center gap-x-2"
    >
      {icon}
      {label}
    </a>
  );
}
