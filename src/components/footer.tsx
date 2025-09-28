import {
  ArrowUpRightIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-light -mt-26 pt-24 pb-12 text-center">
      <h3 className="font-baloo text-2xl font-bold">Feito por Açailândia</h3>
      <div>
        <p>
          <span className="text-secondary font-baloo font-semibold">
            Nosso número:{" "}
          </span>
          (79) 9 9999-9999
        </p>
        <p>
          <span className="text-secondary font-baloo font-semibold">
            Nosso instagram:{" "}
          </span>
          acai.landia94
        </p>
      </div>

      <div className="bg-secondary mx-auto my-3 h-px w-[230px]" />

      <div>
        <p>
          <span className="text-md font-bold">Gostou da página?</span> Faça uma
          para seu negócio!
        </p>
        <Button
          className="text-light border-secondary hover:bg-secondary hover:text-dark my-4 gap-2"
          variant="outline"
        >
          Contatar desenvolvedor <WhatsappLogoIcon size={16} weight="bold" />
        </Button>

        <div className="mx-auto flex w-fit gap-2">
          <Button variant="secondary" className="group">
            <WhatsappLogoIcon weight="fill" size={18} />
            <ArrowUpRightIcon
              weight="bold"
              size={18}
              className="duration-100 group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]"
            />
          </Button>
          <Button variant="secondary" className="group">
            <InstagramLogoIcon weight="fill" size={18} />
            <ArrowUpRightIcon
              weight="bold"
              size={18}
              className="duration-100 group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]"
            />
          </Button>
          <Button variant="secondary" className="group">
            <LinkedinLogoIcon weight="fill" size={18} />
            <ArrowUpRightIcon
              weight="bold"
              size={18}
              className="duration-100 group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]"
            />
          </Button>
        </div>

        <p className="my-16">
          © Açailândia 2025 - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
