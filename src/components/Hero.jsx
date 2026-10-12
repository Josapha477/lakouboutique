import { MessageCircle } from "lucide-react";
import { products } from "../data/products";
import { whatsappLink } from "../lib/format";
import ArchFrame from "./ArchFrame";
import Button from "./Button";

// Les articles mis en avant dans l'accueil sont ceux marqués "featured: true"
const featured = products.filter((p) => p.featured).slice(0, 3);
// Hauteurs différentes + délais d'apparition : le seul moment animé du site
const heights = ["h-52 sm:h-72", "h-64 sm:h-96", "h-56 sm:h-80"];

export default function Hero() {
  return (
    <section id="accueil">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 md:grid-cols-[1.05fr_1fr] md:py-20">
        <div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
            Du style choisi à Port-au-Prince, pour tous les jours.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Vêtements, chaussures et accessoires sélectionnés pour toute la famille. Choisissez votre
            taille, écrivez-nous sur WhatsApp, on s'occupe du reste.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#boutique">Voir la collection</Button>
            <Button variant="whatsapp" href={whatsappLink()} external icon={MessageCircle}>
              Écrire sur WhatsApp
            </Button>
          </div>
        </div>

        <ul className="grid grid-cols-3 items-end gap-3 sm:gap-4">
          {featured.map((product, i) => (
            <li key={product.id} className="rise" style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
              <a href="#boutique" className="block">
                <ArchFrame product={product} className={heights[i]} />
                <span className="mt-2 block text-sm font-semibold leading-snug">{product.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
