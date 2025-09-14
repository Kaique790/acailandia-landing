"use client";

import {
  DotsThreeVerticalIcon,
  MapPinIcon,
  MathOperationsIcon,
  PhoneIcon,
  StorefrontIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { useState } from "react";

export function DropDownNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer md:hidden">
          <DotsThreeVerticalIcon size={32} weight="bold" />
          <span className="sr-only">Abrir menu de navegação</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-dark fixed right-0 z-1 w-[260px] rounded-md py-2 pb-4">
        <a
          href="#nossos-acais"
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
          <Button className="border-light w-full font-normal sm:hidden" asChild>
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
