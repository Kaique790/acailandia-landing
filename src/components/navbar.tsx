import { NavbarMenu } from "./navbar-menu";

export function Navbar() {
  return (
    <nav>
      <ul className="text-light-2 hidden gap-3 font-semibold md:flex">
        <li>
          <a
            className="hover:bg-dark-2/40 rounded-md px-2"
            href="#nossos-acais"
            target="_blank"
          >
            Açais
          </a>
        </li>
        <li>
          <a href="#combos" className="hover:bg-dark-2/40 rounded-md px-2">
            Combos
          </a>
        </li>
        <li>
          <a href="#localizacao" className="hover:bg-dark-2/40 rounded-md px-2">
            Onde estamos
          </a>
        </li>
        <li>
          <a href="#contato" className="hover:bg-dark-2/40 rounded-md px-2">
            Contato
          </a>
        </li>
      </ul>
      <NavbarMenu />
    </nav>
  );
}
