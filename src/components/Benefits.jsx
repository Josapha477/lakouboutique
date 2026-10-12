import { BadgeCheck, MessageCircle, RefreshCw, Truck } from "lucide-react";
import { benefits } from "../data/benefits";
import { site } from "../data/site";

const icons = { message: MessageCircle, truck: Truck, refresh: RefreshCw, badge: BadgeCheck };

export default function Benefits() {
  return (
    <section id="avantages" className="on-dark bg-cobalt text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="max-w-xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Acheter chez {site.name}, c'est simple.
        </h2>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title}>
                <Icon size={34} className="text-sun" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-white/85">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
