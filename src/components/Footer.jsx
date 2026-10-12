import { navLinks, site } from "../data/site";

export default function Footer() {
  return (
    <footer className="on-dark bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-display text-2xl font-extrabold">
            <span aria-hidden="true" className="h-7 w-5 rounded-t-full bg-sun" />
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-white/80">
            Vêtements, chaussures et accessoires à {site.address[1].split(",")[0]}.
          </p>
        </div>

        <nav aria-label="Pied de page">
          <p className="font-display text-lg font-bold">Navigation</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/80 hover:text-white hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-lg font-bold">Contact</p>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>{site.whatsappDisplay} (WhatsApp)</li>
            <li>{site.address.join(", ")}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white hover:underline">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-white/70 sm:px-6">
          © {new Date().getFullYear()} {site.name}. Site de démonstration : boutique fictive créée pour un portfolio.
        </p>
      </div>
    </footer>
  );
}
