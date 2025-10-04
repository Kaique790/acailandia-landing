import {
  InstagramLogoIcon,
  MapPinIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { CombosCarousel } from "./combos-carousel";
import { Button } from "./ui/button";
import Image from "next/image";
import { ContactButton } from "./ui/contact-button";

export function Combos() {
  return (
    <section id="combos" className="pt-12">
      <header className="w-full pb-6 text-center">
        <h1 className="font-baloo text-5xl font-bold tracking-tight">
          Nossos combos
        </h1>
        <p className="text-dark-2">Peça mais e pague menos com nosso combos </p>
      </header>

      <CombosCarousel />

      <section className="mx-auto max-w-[1064px] items-center md:flex md:flex-wrap md:px-4">
        <div className="bg-secondary border-dark my-12 mr-auto border-t-1 border-b-1 px-8 py-6 sm:max-w-[520px] sm:rounded-md sm:border">
          <h4>
            <span className="font-semibold">Pediu Chegou:</span> Peça seu
            delivery.
          </h4>
          <div className="mt-4 flex w-[600px] max-w-full items-center justify-between gap-6">
            <div className="flex w-[200px] flex-col gap-2">
              <Button asChild className="border-dark text-dark flex items-center gap-2 border bg-green-600 hover:bg-green-700">
                <a href="https://instagram.com/acai.landia94" target="_blank">
                  Pedir pelo whatspp <WhatsappLogoIcon size={18} weight="fill" />
                </a>
              </Button>
              <Button asChild disabled className="border-dark flex items-center gap-2 border bg-rose-600 hover:bg-rose-700">
                <a>
                  Pedir pelo ifood{" "}
                  <Image width={28} height={28} src="/ifood-logo.png" alt="" />
                </a>
              </Button>
            </div>

            <div className="bg-dark-2/60 h-[50px] w-px" />

            <div className="space-y-2">
              <ContactButton link="https://instagram.com/acai.landia94" Icon={InstagramLogoIcon} />
              <ContactButton disabled={true} link="http" Icon={MapPinIcon} />
            </div>
          </div>
        </div>

        <div className="bg-secondary border-dark mx-4 rounded-md border py-4 sm:mr-auto sm:ml-0">
          <div className="flex items-start justify-between gap-4 px-6 text-sm">
            <div>
              <h4 className="font-bold">Veja o cardápio completo</h4>
              <p>Saiba mais sobre nossos complementos e açais!</p>
            </div>

            <Image src="/logo.svg" width={60} height={60} alt="" />
          </div>

          <div className="bg-dark-2/60 my-3 h-px w-full" />

          <div className="flex gap-2 px-6">
            <Button className="bg-dark hover:bg-dark/90 w-[150px] max-w-[150px]">
              Ver cardápio
            </Button>
            <Button variant="outline">Ver açais</Button>
          </div>
        </div>
      </section>
    </section>
  );
}
