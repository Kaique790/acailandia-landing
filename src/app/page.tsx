import { Combos } from "@/components/combos";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Init } from "@/components/init";
import { Products } from "@/components/products";

export default function Home() {
  return (
    <div>
      <Init />
      <Products />
      <Combos />
      <Contact />
      <Footer />
    </div>
  );
}
