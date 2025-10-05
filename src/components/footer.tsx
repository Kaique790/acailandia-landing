import {
  ArrowUpRightIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-light -mt-26 pt-24 pb-4 text-center md:-mt-30 md:text-left">
      <div className="mx-auto max-w-[1064px] px-4">
        <h3 className="font-baloo text-2xl font-bold">Feito por Açailândia</h3>
        <div>
          <p>
            <span className="text-secondary font-baloo font-semibold">
              Nosso número:{" "}
            </span>
            (79) 9 9138-9449
          </p>
          <p>
            <span className="text-secondary font-baloo font-semibold">
              Nosso instagram:{" "}
            </span>
            acai.landia94
          </p>
        </div>

        <div className="bg-secondary mx-auto my-3 h-px w-[230px] md:mx-0 md:w-[330px]" />

        <div>
          <p>
            <span className="text-md font-bold">Gostou da página?</span>{" "}
            <br className="md:hidden" /> Faça uma para seu negócio!
          </p>
          <Button
            className="text-light border-secondary hover:bg-secondary hover:text-dark my-4 gap-2"
            variant="outline"
            asChild
          >
            <a href="https://wa.me/5579991389449">
              Contatar desenvolvedor{" "}
              <WhatsappLogoIcon size={16} weight="bold" />
            </a>
          </Button>

          <div className="mx-auto flex w-fit gap-2 md:mx-0">
            <Button variant="secondary" className="group">
              <a className="flex" href="https://wa.me/5579991389449">
                <WhatsappLogoIcon weight="fill" size={18} />
                <ArrowUpRightIcon
                  weight="bold"
                  size={18}
                  className="duration-100 group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]"
                />
              </a>
            </Button>
            <Button variant="secondary" className="group">
              <a className="flex" href="https://instagram.com/z_kaiq_z">
                <InstagramLogoIcon weight="fill" size={18} />
                <ArrowUpRightIcon
                  weight="bold"
                  size={18}
                  className="duration-100 group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]"
                />
              </a>
            </Button>
            <Button variant="secondary" asChild className="group">
              <a
                className="flex"
                href="https://www.linkedin.com/in/dev-kaique790"
              >
                <LinkedinLogoIcon weight="fill" size={18} />
                <ArrowUpRightIcon
                  weight="bold"
                  size={18}
                  className="duration-100 group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]"
                />
              </a>
            </Button>
          </div>

          <p className="my-16 text-center">
            © Açailândia 2025 - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
