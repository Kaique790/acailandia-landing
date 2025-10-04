import { NavbarMenu } from "./navbar-menu";

export function Navbar() {
  return (
    <nav>
      <ul className="text-light-2 hidden gap-3 font-semibold min-[820px]:flex">
        <li>
          <a
            className="hover:bg-dark-2/40 hover:text-light rounded-md px-2 duration-150"
            href="#products"
          >
            Açais
          </a>
        </li>
        <li>
          <a
            href="#combos"
            className="hover:bg-dark-2/40 hover:text-light rounded-md px-2 duration-150"
          >
            Combos
          </a>
        </li>
        <li>
          <a
            href="#contato"
            className="hover:bg-dark-2/40 hover:text-light truncate rounded-md px-2 duration-150"
          >
            Onde estamos
          </a>
        </li>
        <li>
          <a
            href="#contato"
            className="hover:bg-dark-2/40 hover:text-light rounded-md px-2 duration-150"
          >
            Contato
          </a>
        </li>
      </ul>
      <NavbarMenu />
    </nav>
  );
}
