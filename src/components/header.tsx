import { Navbar } from "./navbar";
import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="bg-primary fixed top-0 w-screen">
      <header className="text-light font-baloo mx-auto flex w-full max-w-[1064px] items-center justify-between px-4 py-3">
        <a href="#">
          <h2 className="text-2xl font-bold md:text-3xl">Açailândia</h2>
        </a>

        <div className="flex gap-3 md:order-3">
          <Button
            className="hover:bg-light border-light hover:text-dark hidden border font-normal sm:block"
            asChild
          >
            <a href="" target="_blank">
              Garantir o meu
            </a>
          </Button>
          <Button variant={"secondary"} className="font-normal" asChild>
            <a href="" target="_blank">
              Ver no instagram
            </a>
          </Button>
        </div>

        <Navbar />
      </header>
    </div>
  );
}
