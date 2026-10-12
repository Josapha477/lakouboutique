import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { navLinks, site } from "../data/site";
import { whatsappLink } from "../lib/format";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  // La touche Échap ferme le menu mobile
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-mist/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#accueil" className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight">
          <span aria-hidden="true" className="h-7 w-5 rounded-t-full bg-cobalt" />
          {site.name}
        </a>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex gap-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="py-2 hover:text-cobalt">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="whatsapp"
            href={whatsappLink()}
            external
            icon={MessageCircle}
            size="sm"
            className="hidden sm:inline-flex"
          >
            WhatsApp
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full hover:bg-ink/10 md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="border-t border-ink/10 bg-mist md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink/10 py-4 font-display text-xl font-bold last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
