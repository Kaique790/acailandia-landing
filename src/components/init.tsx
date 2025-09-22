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
  "/copo-carousel/acai-copo-3.png",
  "/hero-carrousel/acai-2.svg",
  "/hero-carrousel/acai-4.svg",
];

export function Init() {
  return (
    <section className="relative mx-auto max-w-[1064px] px-4 md:flex md:items-center">
      <div>
        <div>
          <h1 className="font-baloo text-5xl font-bold tracking-tight">
            Conheça
            <br /> Sua Açailândia
          </h1>
          <p className="text-dark-2">Nova açaiteria no Luís Alves.</p>
        </div>
        <div className="mt-8 flex w-[240] flex-col gap-3">
          <Button className="border-primary w-[240px] border-2" asChild>
            <a
              target="_blank"
              href="https://wa.me/5579991389449?text=Olá!%20gostaria%20de%20fazer%20o%20pedido%20de%20um%20açai%20no%20capricho!"
            >
              Garanta já o seu
            </a>
          </Button>
          <Button variant={"outline"} className="w-[240px]" asChild>
            <a target="_blank" href="https://instagram.com/acai.landia94">
              Ver no instagram
            </a>
          </Button>
        </div>
        <div className="absolute -top-[180px] -right-0 -z-1 w-[372px] lg:hidden">
          <Image src="/home-bg.png" width={800} height={800} alt="" />
        </div>
        <div className="absolute -top-[200px] -right-[520px] -z-1 hidden w-[1000px] lg:block">
          <Image src="/home-bg-lg.png" width={800} height={800} alt="" />
        </div>

        <div className="mt-17 flex gap-4">
          <MinCard title="4+" text="Combos" />
          <MinCard title="5+" text="Tamanhos" />
          <MinCard variant="fill" title="10+" text="Complemen." />
        </div>
      </div>

      <div className="mx-auto mt-20 flex w-[400px] items-center justify-center">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          autoplay={true}
          className="w-[250px] max-w-sm md:w-[275px]"
        >
          <CarouselContent>
            {products.map((p, index) => (
              <CarouselItem key={index} className="">
                <Image
                  width={350}
                  quality={100}
                  height={350}
                  src={p}
                  alt=""
                  className="w-[250px] drop-shadow-[8px_8px_0px_#00000039] md:w-[320px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </section>
  );
}
