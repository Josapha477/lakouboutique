// Dessins SVG des produits : la démo reste jolie sans photos.
// Pour une vraie boutique, ajoutez le champ "image" dans products.js :
// l'image remplace automatiquement le dessin.
const INK = "#141a3d";
const edge = { stroke: INK, strokeOpacity: 0.35, strokeWidth: 1.5, strokeLinejoin: "round", strokeLinecap: "round" };
const line = { stroke: INK, strokeOpacity: 0.28, strokeWidth: 1.5, fill: "none", strokeLinecap: "round" };

const shapes = {
  tshirt: (c) => (
    <>
      <path d="M30 20 L43 16 Q50 25 57 16 L70 20 L86 38 L75 47 L69 41 L69 84 L31 84 L31 41 L25 47 L14 38 Z" fill={c} {...edge} />
      <path d="M43 16 Q50 25 57 16" {...line} />
    </>
  ),
  dress: (c) => (
    <>
      <path d="M41 14 L46 14 Q50 22 54 14 L59 14 L61 40 L76 86 L24 86 L39 40 Z" fill={c} {...edge} />
      <path d="M39 40 L61 40" {...line} />
    </>
  ),
  jeans: (c) => (
    <>
      <path d="M32 14 L68 14 L72 88 L54 88 L50 44 L46 88 L28 88 Z" fill={c} {...edge} />
      <path d="M32 22 L68 22 M50 22 L50 44" {...line} />
    </>
  ),
  shirt: (c) => (
    <>
      <path d="M33 18 L45 14 L50 22 L55 14 L67 18 L88 66 L78 71 L68 48 L68 86 L32 86 L32 48 L22 71 L12 66 Z" fill={c} {...edge} />
      <path d="M50 22 L50 86" {...line} />
      {[36, 50, 64, 78].map((y) => (
        <circle key={y} cx="46.5" cy={y} r="1.3" fill={INK} fillOpacity="0.4" />
      ))}
    </>
  ),
  jacket: (c) => (
    <>
      <path d="M30 16 L44 12 L50 20 L56 12 L70 16 L90 70 L79 75 L70 50 L70 88 L30 88 L30 50 L21 75 L10 70 Z" fill={c} {...edge} />
      <path d="M50 20 L50 88 M36 64 H46 M54 64 H64" {...line} />
    </>
  ),
  sneaker: (c) => (
    <>
      <path d="M12 44 Q12 38 18 38 L26 38 Q30 46 38 44 L44 34 L52 38 L60 46 Q70 50 84 56 Q92 60 92 68 L92 70 L12 70 Z" fill={c} {...edge} />
      <rect x="9" y="69" width="86" height="9" rx="4.5" fill="#fff" {...edge} />
      <path d="M46 42 L52 47 M52 38 L58 43" {...line} />
    </>
  ),
  sandal: (c) => (
    <>
      <path d="M12 66 Q12 58 24 58 L74 58 Q94 58 94 68 Q94 76 82 76 L24 76 Q12 76 12 66 Z" fill="#fff" {...edge} />
      <path d="M34 60 Q38 36 56 36 Q74 38 80 60 Z" fill={c} {...edge} />
    </>
  ),
  bag: (c) => (
    <>
      <path d="M34 38 Q34 16 50 16 Q66 16 66 38" fill="none" stroke={INK} strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 38 H78 L86 86 H14 Z" fill={c} {...edge} />
      <path d="M22 54 H78" {...line} />
      <rect x="44" y="49" width="12" height="10" rx="2" fill="#ffc83d" {...edge} />
    </>
  ),
  cap: (c) => (
    <>
      <path d="M18 62 Q18 32 50 32 Q82 32 82 62 Z" fill={c} {...edge} />
      <path d="M60 60 Q96 56 94 68 Q78 70 58 66 Z" fill={c} {...edge} />
      <path d="M60 60 Q96 56 94 68 Q78 70 58 66 Z" fill={INK} fillOpacity="0.18" />
      <path d="M50 32 V62" {...line} />
      <circle cx="50" cy="31" r="2.5" fill={INK} fillOpacity="0.4" />
    </>
  ),
  glasses: (c) => (
    <>
      <rect x="12" y="42" width="32" height="24" rx="11" fill={INK} fillOpacity="0.85" stroke={c} strokeWidth="4" />
      <rect x="56" y="42" width="32" height="24" rx="11" fill={INK} fillOpacity="0.85" stroke={c} strokeWidth="4" />
      <path d="M44 50 Q50 46 56 50 M12 48 L5 44 M88 48 L95 44" fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  watch: (c) => (
    <>
      <rect x="39" y="6" width="22" height="88" rx="7" fill={c} {...edge} />
      <circle cx="50" cy="50" r="23" fill="#fff" stroke="#ffc83d" strokeWidth="5" />
      <path d="M50 50 V35 M50 50 L60 56" stroke={INK} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </>
  ),
};

export default function ProductVisual({ product }) {
  if (product.image) {
    return (
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    );
  }
  const draw = shapes[product.shape] ?? shapes.tshirt;
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className="mb-[10%] w-[82%]">
      {draw(product.color)}
    </svg>
  );
}
