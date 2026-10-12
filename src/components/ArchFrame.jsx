import ProductVisual from "./ProductVisual";

// Cadre en arche : c'est la signature visuelle du site.
// Il rappelle les arcades des maisons de Pétion-Ville.
// La hauteur se règle avec "className" (ex. "aspect-[4/5]" ou "h-56").
export default function ArchFrame({ product, className = "" }) {
  return (
    <div
      className={`flex items-end justify-center overflow-hidden rounded-t-full ${className}`}
      style={{ backgroundColor: product.tone }}
    >
      <ProductVisual product={product} />
    </div>
  );
}
