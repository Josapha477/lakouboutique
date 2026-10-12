import { MessageCircle } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { whatsappLink } from "./lib/format";

export default function App() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <Catalog />
        <Benefits />
        <Contact />
      </main>
      <Footer />

      {/* Bouton WhatsApp flottant, uniquement sur petit écran (l'en-tête en a un dès "sm") */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Écrire sur WhatsApp (s'ouvre dans un nouvel onglet)"
        className="fixed bottom-4 right-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-wa text-white shadow-lg hover:bg-wa-dark sm:hidden"
      >
        <MessageCircle size={28} aria-hidden="true" />
      </a>
    </>
  );
}
