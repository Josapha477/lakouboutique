# Lakou : boutique de démonstration (React + Vite + Tailwind)

Site vitrine d'une boutique fictive haïtienne (vêtements, chaussures, accessoires).
Aucun backend, aucun paiement en ligne : la commande se fait par WhatsApp.

## Commandes

```bash
npm install        # installe les dépendances (Node 18 ou plus récent)
npm run dev        # lance le site sur http://localhost:5173
npm run build      # génère le site final dans /dist
npm run preview    # teste le site généré
```

## Ce qu'on modifie le plus souvent

| Je veux changer…                         | Fichier                    |
| ---------------------------------------- | -------------------------- |
| Numéro WhatsApp, adresse, horaires, nom  | `src/data/site.js`         |
| Produits, prix, tailles, catégories      | `src/data/products.js`     |
| Les 4 avantages                          | `src/data/benefits.js`     |
| Couleurs et polices                      | `src/index.css` (`@theme`) |

Le numéro WhatsApp s'écrit au format international sans « + » : `50937000000`.

## Ajouter de vraies photos

1. Placez les fichiers dans `public/images/` (ex. `robe.jpg`).
2. Dans `products.js`, ajoutez `image: "/images/robe.jpg"` au produit.
   La photo remplace automatiquement le dessin SVG.

## Architecture

```
src/
├── main.jsx            point d'entrée
├── App.jsx             assemble les sections
├── index.css           Tailwind + couleurs, polices, animations
├── data/               contenu (aucun code d'affichage)
│   ├── site.js
│   ├── products.js
│   └── benefits.js
├── lib/format.js       prix en HTG + liens WhatsApp
└── components/
    ├── Header.jsx      navigation + menu mobile
    ├── Hero.jsx        accueil
    ├── Catalog.jsx     filtres + grille + fenêtre de détail
    ├── ProductCard.jsx
    ├── ProductModal.jsx  fiche produit (balise <dialog>)
    ├── ArchFrame.jsx   cadre en arche (signature visuelle)
    ├── ProductVisual.jsx dessins SVG ou photo
    ├── Benefits.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    └── Button.jsx      bouton/lien réutilisable
```
# lakouboutique
