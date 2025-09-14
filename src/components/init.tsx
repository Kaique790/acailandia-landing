import Image from "next/image";
import { Button } from "./ui/button";
import { MinCard } from "./min-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const products = [
  "/hero-carrousel/acai-1.svg",
  "/hero-carrousel/acai-2.svg",
  "/hero-carrousel/acai-3.svg",
  "/hero-carrousel/acai-4.svg",
];

export function Init() {
  return (
    <div className="relative mx-auto px-4">
      <div>
        <h1 className="font-baloo text-5xl font-bold tracking-tight">
          Conheça
          <br /> Sua Açailândia
        </h1>
        <p className="text-dark-2">Nova açaiteria no Luís Alves.</p>
      </div>
      <div className="mt-8 flex w-[240] flex-col gap-3">
        <Button className="border-primary border-2" asChild>
          <a href="">Garanta já o seu</a>
        </Button>
        <Button variant={"outline"} asChild>
          <a href="">Ver no instagram</a>
        </Button>
      </div>
      <div className="absolute -top-[180px] -right-[0] -z-1 w-[372px]">
        <Image src="/home-bg.png" width={800} height={800} alt="" />
      </div>

      <div className="mt-17 flex gap-4">
        <MinCard title="4+" text="Combos" />
        <MinCard title="5+" text="Tamanhos" />
        <MinCard variant="fill" title="10+" text="Complemen." />
      </div>

      <div className="mx-auto mt-20 flex w-[400px] items-center justify-center">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-[250px] max-w-sm"
        >
          <CarouselContent>
            {products.map((p, index) => (
              <CarouselItem key={index} className="">
                <Image width={250} height={250} src={p} alt="" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </div>
  );
}
