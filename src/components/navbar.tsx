import { DropDownNavbar } from "./dropdown-navbar";

export function Navbar() {
  return (
    <nav className="flex">
      <ul className="text-light-2 hidden gap-3 font-semibold md:flex">
        <li>
          <a
            className="hover:bg-dark-2/40 rounded-md px-2"
            href=""
            target="_blank"
          >
            Açais
          </a>
        </li>
        <li>
          <a className="hover:bg-dark-2/40 rounded-md px-2" href="">
            Combos
          </a>
        </li>
        <li>
          <a className="hover:bg-dark-2/40 rounded-md px-2" href="">
            Onde estamos
          </a>
        </li>
        <li>
          <a className="hover:bg-dark-2/40 rounded-md px-2" href="">
            Contato
          </a>
        </li>
      </ul>
      <DropDownNavbar />
    </nav>
  );
}
