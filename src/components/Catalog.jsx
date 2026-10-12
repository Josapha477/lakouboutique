import { useMemo, useState } from "react";
import { categories, products } from "../data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const ALL = "tous";

export default function Catalog() {
  const [active, setActive] = useState(ALL);
  const [selected, setSelected] = useState(null); // produit ouvert dans la fenêtre de détail

  const visible = useMemo(
    () => (active === ALL ? products : products.filter((p) => p.category === active)),
    [active]
  );

  const filters = [{ id: ALL, label: "Tout" }, ...categories];

  return (
    <section id="boutique" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">La collection</h2>
        <p className="mt-3 max-w-xl text-lg text-muted">
          Touchez un article pour voir les détails, choisir votre taille et nous écrire.
        </p>

        <div role="group" aria-label="Filtrer par catégorie" className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(filter.id)}
                className={`min-h-11 rounded-full border-2 px-5 font-semibold transition-colors ${
                  isActive
                    ? "border-ink bg-ink text-white"
                    : "border-ink/20 hover:border-ink"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-muted" aria-live="polite">
          {visible.length} article{visible.length > 1 ? "s" : ""}
        </p>

        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={setSelected} />
          ))}
        </ul>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
