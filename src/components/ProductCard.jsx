import { categories } from "../data/products";
import { formatPrice } from "../lib/format";
import ArchFrame from "./ArchFrame";

export default function ProductCard({ product, onSelect }) {
  const category = categories.find((c) => c.id === product.category);

  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(product)}
        className="group block w-full text-left"
        aria-label={`${product.name}, ${formatPrice(product.price)}. Voir le détail`}
      >
        <div className="relative">
          <ArchFrame
            product={product}
            className="aspect-[4/5] transition-transform duration-300 motion-safe:group-hover:-translate-y-1"
          />
          {product.badge && (
            <span className="absolute bottom-3 left-3 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
              {product.badge}
            </span>
          )}
        </div>
        <span className="mt-3 block font-display text-lg font-bold leading-tight">{product.name}</span>
        <span className="block text-sm text-muted">{category?.label}</span>
        <span className="mt-1 block font-semibold text-cobalt">{formatPrice(product.price)}</span>
      </button>
    </li>
  );
}
