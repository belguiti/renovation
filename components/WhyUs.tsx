"use client";

import { motion } from "framer-motion";
import { Sparkles, Calculator, Route, Wrench } from "lucide-react";

const reasons = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Travail propre & minutieux",
    description:
      "Notre réputation repose sur la qualité irréprochable de nos finitions. Chaque détail compte, chaque chantier est traité avec le plus grand soin.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Devis gratuit & déplacement inclus",
    description:
      "Nous nous déplaçons gratuitement pour évaluer votre projet et vous remettre un devis détaillé, clair et sans surprise.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <Route className="w-6 h-6" />,
    title: "Accompagnement de A à Z",
    description:
      "De la conception à la livraison, nous sommes votre interlocuteur unique. Un suivi de chantier rigoureux pour votre tranquillité d'esprit.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Expertise multi-corps d'état",
    description:
      "Maçonnerie, plâtrerie, carrelage, électricité, plomberie… Un seul artisan pour tous vos corps de métier. Plus simple, plus efficace.",
    color: "bg-violet-100 text-violet-600",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text & stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-orange-100 text-orange-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              Pourquoi nous choisir ?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Des artisans à votre service,{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                pas juste une entreprise
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Chez AEJ Rénovation, nous croyons qu&apos;un bon artisan c&apos;est avant
              tout quelqu&apos;un de fiable, de transparent et de passionné par son
              travail. C&apos;est notre engagement depuis plus de 10 ans à Toulouse.
            </p>

            {/* Stats card */}
            <div className="grid grid-cols-3 gap-px bg-slate-100 rounded-2xl overflow-hidden shadow-sm">
              {[
                { value: "500+", label: "Projets" },
                { value: "10+", label: "Ans d'exp." },
                { value: "4.9/5", label: "Satisfaction" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white text-center py-6 px-4"
                >
                  <div className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
              >
                Demander un devis gratuit
              </a>
            </div>
          </motion.div>

          {/* Right — reason cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${reason.color}`}
                >
                  {reason.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-base">
                  {reason.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
