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

export function DropDownNavbar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer md:hidden">
          <DotsThreeVerticalIcon size={32} weight="bold" />
          <span className="sr-only">Abrir menu de navegação</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-dark fixed right-0 w-[260px] rounded-md py-2">
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
