mtreimport {
  InstagramLogoIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/button";
import Image from "next/image";

export function Contact() {
  return (
    <section
      id="contato"
      className="relative mx-auto mt-14 max-w-[1064px] px-4 text-center md:flex md:items-start md:justify-between"
    >
      <div>
        <div className="md:flex md:flex-col">
          <h4 className="flex items-center justify-center gap-2 text-3xl font-bold md:justify-start">
            <MapPinIcon weight="fill" /> Onde estamos:
          </h4>
          <address>Localizados no luís alves - Rua C, n: 36</address>

          <Button variant="dark" className="mt-4 w-[176px]">
            Ver no mapa
          </Button>
        </div>

        <div className="mt-10 md:flex md:flex-col md:text-left text-center">
          <h4 className="flex items-center gap-2 text-3xl font-bold">
            <PhoneIcon weight="fill" /> ENtre em contato:
          </h4>
          <p>Vejas nossos açais ou peça o seu!</p>
          <div className="mx-auto mt-4 flex max-w-[360px] items-center justify-center gap-2 md:mx-0 md:justify-start">
            <Button variant="dark" className="flex-1 gap-2">
              Whatsapp <WhatsappLogoIcon size={18} />
            </Button>
            <Button variant="dark" className="flex-1 gap-2">
              Instagram <InstagramLogoIcon size={18} />
            </Button>
          </div>
        </div>
      </div>

      <Image
        src="/copos-acai.png"
        alt=""
        width={1000}
        height={1000}
        className="mt-16 ml-[5%] w-[650px] drop-shadow-xl md:-mt-16 md:ml-0"
      />
    </section>
  );
}
