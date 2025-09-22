import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const cupProducts = [
  {
    name: "Copo: 300ml",
    image: "/copo-carousel/acai-copo-4.png",
    complements: "3 complementos",
  },
  {
    name: "Copo: 400ml",
    image: "/copo-carousel/acai-copo-3.png",
    complements: "3 complementos",
  },
  {
    name: "Copo: 500ml",
    image: "/copo-carousel/acai-copo-1.png",
    complements: "3 complementos",
  },
  {
    name: "Copo: 700ml",
    image: "/copo-carousel/acai-copo-2.png",
    complements: "3 complementos",
  },
];

const potProducts = [
  {
    name: "Tamanho: P",
    image: "/pote-carousel/acai-pote-1.svg",
    complements: "4 complementos",
  },
  {
    name: "Tamanho: M",
    image: "/pote-carousel/acai-pote-2.png",
    complements: "4 complementos",
  },
  {
    name: "Tamanho: G",
    image: "/pote-carousel/acai-pote-3.svg",
    complements: "4 complementos",
  },
];

export function Products() {
  return (
    <section id="products" className="bg-primary text-light mx-auto mt-20 py-8">
      <header className="w-full text-center">
        <h1 className="font-baloo text-5xl font-bold tracking-tight">
          Nossos Açais
        </h1>
        <p className="text-light-2">Escolha o tamanho da sua vontade.</p>
      </header>
      <div className="mx-auto max-w-[1064px] items-center justify-center md:flex">
        <div className="mt-14">
          <h4 className="font-baloo text-center font-bold">Açai no copo</h4>
          <div className="mx-auto flex w-[400px] items-center justify-center">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-[250px] max-w-sm"
            >
              <CarouselContent>
                {cupProducts.map((p, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col gap-2">
                      <Image
                        width={800}
                        height={800}
                        src={p.image}
                        className="h-[250px] object-cover"
                        alt=""
                        quality={100}
                      />
                      <Button variant={"secondary"} asChild>
                        <a href="">{p.name}</a>
                      </Button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="text-light border-light hover:bg-light hover:text-dark right-0" />
              <CarouselPrevious className="text-light border-light hover:bg-light hover:text-dark left-0" />
            </Carousel>
          </div>
        </div>
        <div className="mt-14">
          <h4 className="font-baloo text-center font-bold">Açai no pote</h4>
          <div className="mx-auto flex w-[400px] items-center justify-center">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-[250px] max-w-sm"
            >
              <CarouselContent>
                {potProducts.map((p, index) => (
                  <CarouselItem key={index} className="">
                    <div className="ga-3 flex flex-col">
                      <Image
                        width={800}
                        height={800}
                        src={p.image}
                        className="w-[250px]"
                        alt=""
                        quality={100}
                      />
                      <Button variant={"secondary"} asChild>
                        <a href="">{p.name}</a>
                      </Button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="text-light border-light hover:bg-light hover:text-dark" />
              <CarouselPrevious className="text-light border-light hover:bg-light hover:text-dark" />
            </Carousel>
          </div>
        </div>
        <div className="mt-14">
          <h4 className="font-baloo text-center font-bold">Açai no copo</h4>
          <div className="mx-auto flex w-[400px] items-center justify-center">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-[250px] max-w-sm"
            >
              <CarouselContent>
                {cupProducts.map((p, index) => (
                  <CarouselItem key={index} className="">
                    <div className="ga-3 flex flex-col">
                      <Image
                        width={800}
                        height={800}
                        src={p.image}
                        className="w-[250px]"
                        alt=""
                        quality={100}
                      />
                      <Button variant={"secondary"} asChild>
                        <a href="">{p.name}</a>
                      </Button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="text-light border-light hover:bg-light hover:text-dark right-0" />
              <CarouselPrevious className="text-light border-light hover:bg-light hover:text-dark left-0" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
