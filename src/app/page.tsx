import { Combos } from "@/components/combos";
import { Init } from "@/components/init";
import { Products } from "@/components/products";

export default function Home() {
  return (
    <div>
      <Init />
      <Products />
      <Combos />
    </div>
  );
}
