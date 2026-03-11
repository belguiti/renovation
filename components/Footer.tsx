import Link from "next/link";
import { Building2, Phone, MapPin } from "lucide-react";

const services = [
  "Rénovation intérieure complète",
  "Carrelage & faïence",
  "Placo & cloisons",
  "Mise aux normes électriques",
  "Plomberie & sanitaires",
  "Clôtures & portails",
  "Aménagement extérieur",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white leading-none">
                  AEJ Rénovation
                </div>
                <div className="text-xs text-orange-400 leading-none mt-0.5">
                  Toulouse
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Votre partenaire de confiance pour tous vos projets de rénovation
              à Toulouse. Travail soigné, tarifs transparents.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Nos services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {services.map((service) => (
                <li
                  key={service}
                  className="hover:text-orange-400 transition-colors cursor-default"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <a
                  href="tel:0624295342"
                  className="flex items-center gap-2 hover:text-orange-400 transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  06 24 29 53 42
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  7 Chemin de Papus
                  <br />
                  31100 Toulouse
                </span>
              </li>
            </ul>

            {/* Domain info for SEO */}
            <div className="mt-5 p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-slate-500">
              <p className="font-medium text-slate-300 mb-1">Domaine officiel</p>
              <p>aej-renovation.fr</p>
              <p className="mt-0.5 opacity-60">Ancien domaine : renovation-aej.fr</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <p>
            © {new Date().getFullYear()} AEJ Rénovation Toulouse. Tous droits
            réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-slate-300 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-slate-300 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
