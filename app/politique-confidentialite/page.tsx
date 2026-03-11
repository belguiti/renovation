import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — AEJ Rénovation Toulouse",
  description:
    "Politique de confidentialité et protection des données personnelles — AEJ Rénovation Toulouse. Conformité RGPD.",
};

export default function PolitiqueConfidentialite() {
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
          Politique de confidentialité
        </h1>
        <p className="text-slate-400 text-sm mb-3">
          Dernière mise à jour : mars 2025
        </p>
        <p className="text-slate-500 text-sm mb-10 p-4 bg-blue-50 rounded-xl border border-blue-100">
          Conformément au Règlement Général sur la Protection des Données
          (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés,
          AEJ Rénovation s&apos;engage à protéger vos données personnelles.
        </p>

        <div className="space-y-8">

          <Section title="1. Responsable du traitement">
            <p>
              Le responsable du traitement de vos données à caractère personnel
              est :
            </p>
            <ul>
              <li><strong>Entité :</strong> AEJ Rénovation</li>
              <li>
                <strong>Adresse :</strong> 7 Chemin de Papus, 31100 Toulouse
              </li>
              <li>
                <strong>Contact :</strong>{" "}
                <a href="mailto:contact@aej-renovation.fr">
                  contact@aej-renovation.fr
                </a>{" "}
                — 06 24 29 53 42
              </li>
            </ul>
          </Section>

          <Section title="2. Données collectées">
            <p>
              Nous collectons uniquement les données que vous nous fournissez
              volontairement via le <strong>formulaire de contact</strong> et
              de demande de devis :
            </p>
            <table className="w-full text-sm border-collapse mt-3">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">
                    Donnée
                  </th>
                  <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">
                    Caractère
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Nom et prénom", "Obligatoire"],
                  ["Numéro de téléphone", "Obligatoire"],
                  ["Adresse email", "Facultatif"],
                  ["Type de projet de rénovation", "Obligatoire"],
                  ["Description du projet / message", "Facultatif"],
                ].map(([data, req]) => (
                  <tr key={data}>
                    <td className="p-3 border border-slate-200 text-slate-700">
                      {data}
                    </td>
                    <td className="p-3 border border-slate-200 text-slate-500">
                      {req}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-sm text-slate-500">
              Nous ne collectons pas de données sensibles au sens de
              l&apos;article 9 du RGPD.
            </p>
          </Section>

          <Section title="3. Finalités du traitement">
            <p>Vos données sont traitées pour les finalités suivantes :</p>
            <ul>
              <li>
                Répondre à votre demande de devis ou de renseignements
              </li>
              <li>
                Vous contacter pour organiser une visite sur site gratuite
              </li>
              <li>Suivre la relation commerciale si vous devenez client</li>
            </ul>
            <p>
              Vos données ne sont jamais utilisées à des fins de prospection
              commerciale sans votre consentement explicite.
            </p>
          </Section>

          <Section title="4. Base légale">
            <p>
              Le traitement de vos données repose sur votre{" "}
              <strong>consentement</strong> (article 6.1.a du RGPD), matérialisé
              par le remplissage et l&apos;envoi du formulaire de contact.
            </p>
          </Section>

          <Section title="5. Durée de conservation">
            <p>
              Vos données sont conservées pendant une durée de{" "}
              <strong>3 ans</strong> à compter du dernier contact, conformément
              aux recommandations de la CNIL pour les données de prospection
              commerciale et de relation client.
            </p>
            <p>
              À l&apos;issue de cette période, vos données sont supprimées ou
              anonymisées.
            </p>
          </Section>

          <Section title="6. Destinataires des données">
            <p>
              Vos données sont destinées exclusivement à{" "}
              <strong>AEJ Rénovation</strong>. Elles ne sont ni vendues,
              ni échangées, ni cédées à des tiers.
            </p>
            <p>
              Nous pouvons faire appel à des sous-traitants techniques
              (hébergeur, service d&apos;envoi d&apos;emails) dans le strict respect du
              RGPD. Ces sous-traitants agissent uniquement sur nos instructions.
            </p>
          </Section>

          <Section title="7. Transfert hors Union européenne">
            <p>
              Le site est hébergé par Vercel Inc. (États-Unis). Ce transfert
              est encadré par les clauses contractuelles types de la Commission
              européenne garantissant un niveau de protection adéquat.
            </p>
          </Section>

          <Section title="8. Vos droits (RGPD)">
            <p>
              Conformément au RGPD, vous disposez des droits suivants sur vos
              données personnelles :
            </p>
            <ul>
              <li>
                <strong>Droit d&apos;accès</strong> — obtenir une copie de vos
                données
              </li>
              <li>
                <strong>Droit de rectification</strong> — corriger des données
                inexactes
              </li>
              <li>
                <strong>Droit à l&apos;effacement</strong> — demander la suppression
                de vos données
              </li>
              <li>
                <strong>Droit d&apos;opposition</strong> — vous opposer au traitement
              </li>
              <li>
                <strong>Droit à la portabilité</strong> — recevoir vos données
                dans un format structuré
              </li>
              <li>
                <strong>Droit à la limitation</strong> — restreindre le
                traitement
              </li>
              <li>
                <strong>Droit de retirer votre consentement</strong> à tout
                moment
              </li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:contact@aej-renovation.fr">
                contact@aej-renovation.fr
              </a>{" "}
              ou par courrier à : AEJ Rénovation, 7 Chemin de Papus, 31100
              Toulouse. Nous nous engageons à répondre dans un délai d&apos;un mois.
            </p>
            <p>
              Vous avez également le droit d&apos;introduire une réclamation auprès
              de la CNIL :{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.cnil.fr
              </a>
              .
            </p>
          </Section>

          <Section title="9. Cookies">
            <p>
              Ce site n&apos;utilise <strong>aucun cookie de traçage</strong> ni
              outil d&apos;analyse comportementale (ex : Google Analytics). Seuls des
              cookies strictement techniques nécessaires au bon fonctionnement
              du site peuvent être déposés.
            </p>
          </Section>

          <Section title="10. Sécurité">
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données contre tout accès non
              autorisé, perte, altération ou divulgation, notamment via le
              protocole HTTPS.
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
    <section>
      <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
        {title}
      </h2>
      <div className="text-slate-600 leading-relaxed space-y-3 text-sm sm:text-base [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-orange-500 [&_a:hover]:text-orange-600 [&_a]:transition-colors">
        {children}
      </div>
    </section>
  );
}
