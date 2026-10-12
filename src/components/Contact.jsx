import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { site } from "../data/site";
import { whatsappLink } from "../lib/format";
import Button from "./Button";

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Passez nous voir ou écrivez-nous.
          </h2>
          <ul className="mt-8 space-y-6">
            <li className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-cobalt" aria-hidden="true" />
              <address className="not-italic">
                <span className="block font-semibold">Adresse</span>
                {site.address.map((line) => (
                  <span key={line} className="block text-muted">{line}</span>
                ))}
              </address>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-1 shrink-0 text-cobalt" aria-hidden="true" />
              <div>
                <span className="block font-semibold">Horaires</span>
                {site.hours.map((h) => (
                  <span key={h.days} className="block text-muted">
                    {h.days} : {h.time}
                  </span>
                ))}
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 shrink-0 text-cobalt" aria-hidden="true" />
              <div>
                <span className="block font-semibold">Email</span>
                <a href={`mailto:${site.email}`} className="text-muted underline underline-offset-4 hover:text-cobalt">
                  {site.email}
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center rounded-3xl bg-sun p-8 md:p-10">
          <h3 className="font-display text-3xl font-bold leading-tight">Une question sur un article ?</h3>
          <p className="mt-3 text-lg">
            Envoyez-nous un message sur WhatsApp au {site.whatsappDisplay}. Nous répondons pendant les
            heures d'ouverture.
          </p>
          <Button variant="whatsapp" href={whatsappLink()} external icon={MessageCircle} className="mt-6 self-start">
            Ouvrir WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
