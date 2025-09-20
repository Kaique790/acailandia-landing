import { CombosCarousel } from "./combos-carousel";

export function Combos() {
  return (
    <section id="combos" className="pt-12">
      <header className="w-full text-center">
        <h1 className="font-baloo text-5xl font-bold tracking-tight">
          Nossos combos
        </h1>
        <p className="text-dark-2">Peça mais e pague menos com nosso combos </p>
      </header>

      <CombosCarousel />
    </section>
  );
}
