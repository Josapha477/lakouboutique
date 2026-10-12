import { site } from "../data/site";

const nombre = new Intl.NumberFormat("fr-FR");

// 4200 → "4 200 HTG" (espaces insécables : le prix ne se coupe jamais en deux lignes)
export function formatPrice(amount) {
  return `${nombre.format(amount)}\u00a0${site.currency}`;
}

// Lien WhatsApp. Sans message : ouvre simplement la conversation.
export function whatsappLink(message) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function productMessage(product, size) {
  const taille = size ? `, taille ${size}` : "";
  return `Bonjour ${site.name}, je suis intéressé(e) par : ${product.name}${taille} (${formatPrice(product.price)}). Est-il disponible ?`;
}
