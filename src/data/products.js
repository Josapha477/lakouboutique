// ─────────────────────────────────────────────────────────────
// Catalogue de démonstration.
//
// Champs d'un produit :
//   id, name, category (id d'une catégorie), price (en HTG),
//   description, details (liste), sizes (optionnel),
//   shape + color : dessin SVG intégré (voir ProductVisual.jsx)
//   tone : couleur de fond du visuel
//   image : (optionnel) chemin d'une vraie photo, ex. "/images/robe.jpg"
//           → placez le fichier dans le dossier /public/images
//   badge, featured : (optionnels)
// ─────────────────────────────────────────────────────────────
export const categories = [
  { id: "vetements", label: "Vêtements" },
  { id: "chaussures", label: "Chaussures" },
  { id: "accessoires", label: "Accessoires" },
];

const lettres = ["S", "M", "L", "XL"];
const pointures = ["38", "39", "40", "41", "42", "43"];

export const products = [
  {
    id: "tshirt-soley",
    name: "T-shirt Solèy",
    category: "vetements",
    price: 1400,
    shape: "tshirt",
    color: "#FFC83D",
    tone: "#CFE0FF",
    badge: "Populaire",
    description:
      "Un t-shirt épais et doux, coupe droite, qui reste en forme après de nombreux lavages.",
    details: ["100 % coton", "Coupe droite", "Lavable en machine à 30 °C"],
    sizes: lettres,
  },
  {
    id: "robe-flamboyan",
    name: "Robe Flamboyan",
    category: "vetements",
    price: 4200,
    shape: "dress",
    color: "#C8243B",
    tone: "#FFE9A8",
    featured: true,
    badge: "Nouveau",
    description:
      "Une robe évasée, légère, pensée pour les journées chaudes comme pour les sorties du soir.",
    details: ["Viscose fluide", "Longueur genou", "Fermeture zippée dans le dos"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "jean-citadelle",
    name: "Jean Citadelle",
    category: "vetements",
    price: 3800,
    shape: "jeans",
    color: "#2036A8",
    tone: "#E4DEF7",
    description:
      "Un jean droit taille haute, en denim résistant, qui se porte au quotidien.",
    details: ["Denim 98 % coton, 2 % élasthanne", "Taille haute", "5 poches"],
    sizes: ["36", "38", "40", "42", "44"],
  },
  {
    id: "chemise-cap",
    name: "Chemise lin Cap",
    category: "vetements",
    price: 3200,
    shape: "shirt",
    color: "#9CC3F5",
    tone: "#FFE0DA",
    description:
      "Une chemise en lin respirant, manches longues, idéale quand la chaleur monte.",
    details: ["Lin et coton", "Col classique", "Manches longues retroussables"],
    sizes: lettres,
  },
  {
    id: "veste-jacmel",
    name: "Veste légère Jacmel",
    category: "vetements",
    price: 5500,
    shape: "jacket",
    color: "#2F8F6B",
    tone: "#FFE9A8",
    description:
      "Une veste zippée à deux poches, assez légère pour les soirées fraîches.",
    details: ["Toile de coton", "Zip central", "Deux poches latérales"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: "baskets-rara",
    name: "Baskets Rara",
    category: "chaussures",
    price: 6800,
    shape: "sneaker",
    color: "#C8243B",
    tone: "#CFE0FF",
    featured: true,
    badge: "Populaire",
    description:
      "Des baskets confortables à semelle épaisse, faites pour marcher toute la journée.",
    details: ["Dessus textile respirant", "Semelle amortissante", "Lacets plats"],
    sizes: pointures,
  },
  {
    id: "baskets-montagne",
    name: "Baskets Montagne",
    category: "chaussures",
    price: 7500,
    shape: "sneaker",
    color: "#14A3A3",
    tone: "#FFE0DA",
    description:
      "Une paire robuste, avec une bonne adhérence pour les rues en pente et les sentiers.",
    details: ["Semelle antidérapante", "Renfort au talon", "Lacets ronds"],
    sizes: pointures,
  },
  {
    id: "sandales-lalo",
    name: "Sandales Lalo",
    category: "chaussures",
    price: 2500,
    shape: "sandal",
    color: "#FFC83D",
    tone: "#E4DEF7",
    description:
      "Des sandales simples à enfiler, avec une semelle souple qui épouse le pied.",
    details: ["Semelle souple", "Bride large", "Faciles à nettoyer"],
    sizes: pointures,
  },
  {
    id: "sac-marche",
    name: "Sac bandoulière Marché",
    category: "accessoires",
    price: 3600,
    shape: "bag",
    color: "#E0742F",
    tone: "#CDEBDD",
    featured: true,
    description:
      "Un sac spacieux avec fermeture à rabat, assez grand pour le téléphone, le portefeuille et les clés.",
    details: ["Simili cuir", "Bandoulière réglable", "Une poche intérieure zippée"],
  },
  {
    id: "casquette-soley",
    name: "Casquette Solèy",
    category: "accessoires",
    price: 1200,
    shape: "cap",
    color: "#2036A8",
    tone: "#FFE9A8",
    description:
      "Une casquette à visière courbe qui protège du soleil, réglable à l'arrière.",
    details: ["Coton", "Taille réglable", "Visière courbe"],
  },
  {
    id: "lunettes-plaj",
    name: "Lunettes Plaj",
    category: "accessoires",
    price: 1800,
    shape: "glasses",
    color: "#C8243B",
    tone: "#CFE0FF",
    description:
      "Des lunettes de soleil à monture arrondie, avec verres teintés.",
    details: ["Protection UV400", "Monture légère", "Étui inclus"],
  },
  {
    id: "montre-zel",
    name: "Montre Zèl",
    category: "accessoires",
    price: 4900,
    shape: "watch",
    color: "#14183A",
    tone: "#CDEBDD",
    badge: "Nouveau",
    description:
      "Une montre à cadran blanc et bracelet souple, sobre et facile à assortir.",
    details: ["Mouvement à quartz", "Résistante aux éclaboussures", "Bracelet réglable"],
  },
];
