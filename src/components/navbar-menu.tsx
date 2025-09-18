"use client";

import {
  DotsThreeVerticalIcon,
  HouseIcon,
  MapPinIcon,
  MathOperationsIcon,
  PhoneIcon,
  StorefrontIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function NavbarMenu() {
  const [open, setOpen] = useState(false);
  function handleNavigate(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    setOpen(false);

    if (id === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);

    if (!element) {
      console.error("NavbarMenu error: does not exists section element.");
      return;
    }
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-1 h-screen w-screen backdrop-blur-sm",
          !open && "hidden",
        )}
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className="cursor-pointer md:hidden">
            <DotsThreeVerticalIcon size={32} weight="bold" />
            <span className="sr-only">Abrir menu de navegação</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="bg-dark absolute right-0 z-1 w-[300px] rounded-md py-2 pb-4">
          <a
            href="#"
            onClick={(e) => handleNavigate(e, "#")}
            className="hover:bg-dark-2 border-dark-2 flex min-w-full items-center justify-between border-b px-4 py-2 font-semibold"
          >
            Ínicio
            <HouseIcon size={18} />
          </a>
          <a
            href="#products"
            onClick={(e) => handleNavigate(e, "products")}
            className="hover:bg-dark-2 flex min-w-full items-center justify-between px-4 py-2 font-semibold"
          >
            Açais
            <StorefrontIcon size={18} />
          </a>
          <a
            href="#combos"
            className="hover:bg-dark-2 flex min-w-full items-center justify-between px-4 py-2 font-semibold"
          >
            Combos
            <MathOperationsIcon size={18} />
          </a>
          <a
            href="#localizacao"
            className="hover:bg-dark-2 flex min-w-full items-center justify-between px-4 py-2 font-semibold"
          >
            Onde estamos
            <MapPinIcon size={18} />
          </a>
          <a
            href="#contact"
            className="hover:bg-dark-2 flex min-w-full items-center justify-between px-4 py-2 font-semibold"
          >
            Contato
            <PhoneIcon size={18} />
          </a>

          <div className="bg-dark-2 mb-4 h-px w-full" />

          <div className="w-full space-y-3 px-3">
            <Button
              className="border-light w-full font-normal sm:hidden"
              asChild
            >
              <a href="" target="_blank">
                Garantir o meu
              </a>
            </Button>
            <Button
              variant={"secondary"}
              className="w-full font-normal sm:hidden"
              asChild
            >
              <a href="" target="_blank">
                Ver no instagram
              </a>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
