import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { categories } from "../data/products";
import { formatPrice, productMessage, whatsappLink } from "../lib/format";
import ArchFrame from "./ArchFrame";
import Button from "./Button";

// Utilise l'élément HTML <dialog> : le navigateur gère déjà le piège du focus,
// la touche Échap et l'arrière-plan. Moins de code, meilleure accessibilité.
export default function ProductModal({ product, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (product && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden"; // bloque le défilement derrière
    }
    if (!product && dialog.open) dialog.close();
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="modal-title"
      onClose={onClose}
      // Un clic sur le fond (le <dialog> lui-même) ferme la fenêtre
      onClick={(e) => e.target === ref.current && ref.current.close()}
      className="m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-3xl overflow-y-auto rounded-3xl bg-white p-0 text-ink backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
    >
      {product && <ModalContent key={product.id} product={product} onClose={() => ref.current.close()} />}
    </dialog>
  );
}

function ModalContent({ product, onClose }) {
  const [size, setSize] = useState(null);
  const category = categories.find((c) => c.id === product.category);

  return (
    <div className="relative grid md:grid-cols-2">
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-3 top-3 z-10 inline-flex size-11 items-center justify-center rounded-full bg-white/90 hover:bg-white"
      >
        <X size={24} aria-hidden="true" />
      </button>

      <div className="bg-mist p-6 pb-0 md:p-8">
        <ArchFrame product={product} className="mx-auto aspect-[4/5] max-w-xs" />
      </div>

      <div className="p-6 md:p-8">
        <p className="text-sm font-medium text-muted">{category?.label}</p>
        <h2 id="modal-title" className="mt-1 font-display text-3xl font-bold leading-tight">
          {product.name}
        </h2>
        <p className="mt-2 font-display text-2xl font-bold text-cobalt">{formatPrice(product.price)}</p>
        <p className="mt-4 leading-relaxed text-muted">{product.description}</p>

        <ul className="mt-4 list-disc space-y-1 pl-5">
          {product.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>

        {product.sizes && (
          <div className="mt-6">
            <p id="size-label" className="font-semibold">
              Taille
            </p>
            <div role="group" aria-labelledby="size-label" className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={size === s}
                  onClick={() => setSize(size === s ? null : s)}
                  className={`min-h-11 min-w-11 rounded-full border-2 px-3 font-semibold transition-colors ${
                    size === s ? "border-ink bg-ink text-white" : "border-ink/20 hover:border-ink"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <Button
          variant="whatsapp"
          href={whatsappLink(productMessage(product, size))}
          external
          icon={MessageCircle}
          className="mt-8 w-full"
        >
          Demander sur WhatsApp
        </Button>
        <p className="mt-3 text-sm text-muted">
          Pas de paiement en ligne : la disponibilité, le prix final et la livraison sont confirmés avec
          la boutique sur WhatsApp.
        </p>
      </div>
    </div>
  );
}
