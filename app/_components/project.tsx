import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Status = "wip" | "completed" | "archived";

function getStatusColor(status: Status) {
  if (status === "wip") return " bg-yellow-100 text-yellow-700";
  if (status === "completed") return "bg-green-100 text-green-700";
  if (status === "archived") return "bg-gray-100 text-gray-700";
}

export default function Project({
  name,
  description,
  image,
  link,
  status,
}: {
  name: string;
  description: string;
  image: string | StaticImport;
  link: string;
  status: Status;
}) {
  const color = getStatusColor(status);

  return (
    <a
      href={link}
      target="_blank"
      className="flex gap-x-4 border items-center p-2 rounded-xl hover:bg-white/10 border-white/5 transition-all duration-200 ease-in-out"
    >
      <div className="border flex-shrink-0 relative border-white/5 rounded-lg overflow-hidden size-16">
        <Image src={image} alt={`${name} logo`} fill className="object-cover" />
      </div>

      <div className="space-y-1 text-sm">
        <div className="flex gap-x-4">
          <h4 className="font-medium">{name}</h4>

          <span
            className={`text-xs ${color} font-bold rounded-full px-2 py-0.5 text-center`}
          >
            {status}
          </span>
        </div>

        <p className="font-medium text-xs text-foreground/80">{description}</p>
      </div>
    </a>
  );
}
