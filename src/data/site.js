// ─────────────────────────────────────────────────────────────
// Informations de la boutique : tout ce qui change d'un client
// à l'autre se règle ici, sans toucher aux composants.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: "Lakou",
  // Numéro WhatsApp au format international, sans "+", sans espaces.
  // Haïti = 509 suivi des 8 chiffres. Remplacez ce numéro factice.
  whatsappNumber: "50900000000",
  whatsappDisplay: "+509 00 00 0000",
  email: "contact@lakou.example",
  address: ["12, rue Lamarre", "Pétion-Ville, Haïti"],
  hours: [
    { days: "Lundi au samedi", time: "9 h à 18 h" },
    { days: "Dimanche", time: "Fermé" },
  ],
  currency: "HTG",
};

export const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#boutique", label: "Boutique" },
  { href: "#avantages", label: "Avantages" },
  { href: "#contact", label: "Contact" },
];
