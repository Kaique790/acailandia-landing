import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export interface ComboItem {
  title: string;
  subheader: string;
  image: string;

  attributes: string[];
  link: string;
}

interface ComboCardsProps {
  index: number;
}

export function ComboCard({
  title,
  subheader,
  image,
  attributes,
  link,
  index,
}: ComboCardsProps & ComboItem) {
  return (
    <article className="border-dark group w-[328px] min-w-[328px] overflow-hidden rounded-md border-2 duration-200">
      <header
        className={cn(
          "font-baloo pt-4 pb-4 text-center",
          index % 2 === 0 ? "bg-secondary" : "bg-dark text-light",
        )}
      >
        <h4>{title}</h4>
        <p className="text-lg font-bold">{subheader}</p>
      </header>

      <div className="bg-dark h-px w-full" />

      <div className="bg-primary px-6 py-4 text-white">
        <Image
          src={image}
          width={400}
          height={400}
          alt=""
          className="mx-auto w-[250px] duration-200 group-hover:scale-106"
        />

        <ul className="mt-4">
          {attributes.map((att) => (
            <li key={att}>{att}</li>
          ))}
        </ul>
      </div>

      <div className="bg-dark h-px w-full" />

      <footer className="bg-primary space-y-3 px-6 py-4">
        <Button variant="secondary" className="w-full" asChild>
          <a href={link}>Garantir o meu</a>
        </Button>
        <Button
          variant="outline"
          className="hover:bg-light border-light text-light hover:text-dark w-full"
          asChild
        >
          <a href="https://instagram.com/acai.landia94">Ver no instagram</a>
        </Button>
      </footer>
    </article>
  );
}
