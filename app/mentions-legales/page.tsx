import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — AEJ Rénovation Toulouse",
  description: "Mentions légales du site aej-renovation.fr — AEJ Rénovation Toulouse.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-md z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-600 hover:text-orange-500 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au site
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-slate-900 text-sm">
              AEJ Rénovation
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Mentions légales
        </h1>
        <p className="text-slate-400 text-sm mb-10">
          Dernière mise à jour : mars 2025
        </p>

        <div className="prose prose-slate prose-sm sm:prose max-w-none">

          {/* Section 1 */}
          <Section title="1. Éditeur du site">
            <p>Le site <strong>aej-renovation.fr</strong> est édité par :</p>
            <ul>
              <li><strong>Raison sociale :</strong> AEJ Rénovation</li>
              <li><strong>Forme juridique :</strong> Entreprise individuelle</li>
              <li>
                <strong>Adresse :</strong> 7 Chemin de Papus, 31100 Toulouse
              </li>
              <li><strong>Téléphone :</strong> 06 24 29 53 42</li>
              <li>
                <strong>Email :</strong>{" "}
                <a href="mailto:contact@aej-renovation.fr">
                  contact@aej-renovation.fr
                </a>
              </li>
              <li>
                <strong>SIRET :</strong> [Numéro à compléter]
              </li>
              <li>
                <strong>Responsable de la publication :</strong> Le gérant
                d&apos;AEJ Rénovation
              </li>
            </ul>
          </Section>

          {/* Section 2 */}
          <Section title="2. Hébergement">
            <p>Le site est hébergé par :</p>
            <ul>
              <li><strong>Raison sociale :</strong> Vercel Inc.</li>
              <li>
                <strong>Adresse :</strong> 340 Pine Street, Suite 701, San
                Francisco, CA 94104, États-Unis
              </li>
              <li>
                <strong>Site web :</strong>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://vercel.com
                </a>
              </li>
            </ul>
          </Section>

          {/* Section 3 */}
          <Section title="3. Propriété intellectuelle">
            <p>
              L&apos;ensemble du contenu de ce site (textes, images,
              graphismes, logo, icônes, sons, logiciels, etc.) constitue une
              œuvre protégée par les lois françaises et internationales
              relatives à la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication,
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation
              préalable et écrite d&apos;AEJ Rénovation.
            </p>
            <p>
              Toute exploitation non autorisée du site ou de l&apos;un quelconque
              des éléments qu&apos;il contient sera considérée comme constitutive
              d&apos;une contrefaçon et poursuivie conformément aux dispositions
              des articles L.335-2 et suivants du Code de Propriété
              Intellectuelle.
            </p>
          </Section>

          {/* Section 4 */}
          <Section title="4. Limitation de responsabilité">
            <p>
              AEJ Rénovation s&apos;efforce d&apos;assurer au mieux de ses possibilités
              l&apos;exactitude et la mise à jour des informations diffusées sur
              ce site. Cependant, AEJ Rénovation ne peut garantir
              l&apos;exactitude, la précision ou l&apos;exhaustivité des informations
              mises à disposition sur ce site.
            </p>
            <p>
              En conséquence, AEJ Rénovation décline toute responsabilité pour
              tout dommage résultant notamment : d&apos;une imprécision ou
              inexactitude des informations disponibles sur ce site, d&apos;une
              interruption de la disponibilité du site, ou de l&apos;utilisation
              faite de ce site.
            </p>
          </Section>

          {/* Section 5 */}
          <Section title="5. Liens hypertextes">
            <p>
              Le site aej-renovation.fr peut contenir des liens vers d&apos;autres
              sites internet. AEJ Rénovation n&apos;exerce aucun contrôle sur ces
              sites et décline toute responsabilité quant à leur contenu.
            </p>
          </Section>

          {/* Section 6 */}
          <Section title="6. Loi applicable et juridiction compétente">
            <p>
              Les présentes mentions légales sont soumises au droit français.
              En cas de litige, et à défaut de résolution amiable, les
              tribunaux français seront seuls compétents.
            </p>
          </Section>
        </div>
      </main>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
        {title}
      </h2>
      <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
