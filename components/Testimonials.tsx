"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    location: "Toulouse, 31200",
    rating: 5,
    project: "Rénovation salle de bain complète",
    text: "Excellent travail ! AEJ Rénovation a transformé notre salle de bain en véritable espace de bien-être. Travail soigné, délais respectés et équipe très professionnelle. Je recommande vivement !",
  },
  {
    name: "Thomas B.",
    location: "Toulouse, 31500",
    rating: 5,
    project: "Pose carrelage + placo",
    text: "Très satisfait de la prestation. Le carrelage est parfaitement posé et les cloisons en placo sont impeccables. Le chantier a été laissé propre. Prix honnête pour un travail de qualité.",
  },
  {
    name: "Sophie M.",
    location: "Blagnac, 31700",
    rating: 5,
    project: "Clôture + portail coulissant",
    text: "Notre clôture et notre portail ont été installés rapidement et proprement. L'équipe est à l'écoute et de très bon conseil. Le résultat est au-delà de nos espérances !",
  },
];

export default function Testimonials() {
  return (
    <section id="realisations" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-orange-100 text-orange-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Avis clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ce que disent{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              nos clients
            </span>
          </h2>
          <p className="text-slate-500 text-lg">
            La satisfaction de nos clients est notre meilleure récompense.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 card-hover"
            >
              <Quote
                className="w-8 h-8 text-orange-200 mb-4"
                fill="currentColor"
              />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-orange-400 fill-orange-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {t.location} · {t.project}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregate rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3.5 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-orange-400 fill-orange-400"
                />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.9/5</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 text-sm">Basé sur 47 avis</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
