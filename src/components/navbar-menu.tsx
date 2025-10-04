"use client";

import {
  DotsThreeVerticalIcon,
  HouseIcon,
  MapPinIcon,
  MathOperationsIcon,
  PhoneIcon,
  StorefrontIcon,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function NavbarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "bg-dark/20 fixed inset-0 h-screen w-screen backdrop-blur-md",
          open
            ? "animate-[fadeIn_0.3s_ease-out_forwards]"
            : "hidden animate-[fadeOut_0.3s_ease-in_forwards]",
        )}
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="cursor-pointer min-[820px]:hidden">
            <DotsThreeVerticalIcon size={32} weight="bold" />
            <span className="sr-only">Abrir menu de navegação</span>
          </button>
        </DialogTrigger>

        <DialogContent
          className={cn(
            "bg-dark text-light fixed inset-y-0 right-0 h-screen w-64 rounded-none border-0 py-6 shadow-lg",
            "data-[state=open]:animate-[slideInRight_0.3s_ease-out_forwards]",
            "data-[state=closed]:animate-[slideOutRight_0.3s_ease-in_forwards]",
          )}
        >
          <div className="flex w-full items-center justify-between px-3">
            <DialogTitle>Menu de Navegação</DialogTitle>
            <DialogClose className="bg-dark-2/50 hover:bg-dark-2 cursor-pointer rounded-sm p-1">
              <X size={24} />
            </DialogClose>
          </div>

          <Separator className="mt-6" />

          <a
            href="#"
            className="hover:bg-dark-2 flex min-w-full items-center justify-between px-4 py-2 font-semibold"
          >
            Inicio
            <HouseIcon size={18} />
          </a>

          <Separator className="bg-dark-2" />

          <a
            href="#products"
            className="hover:bg-dark-2 flex min-w-full items-center justify-between rounded-md px-4 py-2 font-semibold"
          >
            Açais
            <StorefrontIcon size={18} />
          </a>
          <a
            href="#combos"
            className="hover:bg-dark-2 flex min-w-full items-center justify-between rounded-md px-4 py-2 font-semibold"
          >
            Combos
            <MathOperationsIcon size={18} />
          </a>
          <a
            href="#contato"
            className="hover:bg-dark-2 flex min-w-full items-center justify-between rounded-md px-4 py-2 font-semibold"
          >
            Onde estamos
            <MapPinIcon size={18} />
          </a>
          <a
            href="#contact"
            className="hover:bg-dark-2 flex min-w-full items-center justify-between rounded-md px-4 py-2 font-semibold"
          >
            Contato
            <PhoneIcon size={18} />
          </a>

          <div className="bg-dark-2 my-4 h-px w-full" />

          <div className="w-full space-y-3 px-2">
            <Button
              className="border-light w-full font-normal sm:hidden"
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
              className="w-full font-normal sm:hidden"
              asChild
            >
              <a href="https://instagram.com/acai.landia94" target="_blank">
                Ver no instagram
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
