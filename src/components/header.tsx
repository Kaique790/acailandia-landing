import { Navbar } from "./navbar";
import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="bg-primary fixed top-0 z-1 w-full max-w-full">
      <header className="text-light font-baloo mx-auto flex w-full max-w-[1064px] items-center justify-between px-4 py-3">
        <a href="#">
          <h2 className="text-2xl font-bold md:text-3xl">Açailândia</h2>
        </a>

        <div className="flex gap-3 min-[820px]:order-3">
          <Button
            className="hover:bg-light border-light hover:text-dark hidden truncate border font-normal sm:block"
            asChild
          >
            <a
              href="https://wa.me/5579991389449?text=Olá!%20gostaria%20de%20fazer%20o%20pedido%20de%20um%20açai%20no%20capricho!"
              target="_blank"
            >
              Garantir o meu
            </a>
          </Button>
          <Button
            variant={"secondary"}
            className="hidden truncate font-normal sm:block"
            asChild
          >
            <a href="https://instagram.com/acai.landia94" target="_blank">
              Ver no instagram
            </a>
          </Button>
        </div>

        <Navbar />
      </header>
    </div>
  );
}
