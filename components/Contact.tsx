"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const WA_NUMBER = "33624295342";

const projectTypes = [
  "Rénovation complète",
  "Salle de bain",
  "Cuisine",
  "Carrelage / Faïence",
  "Cloisons / Placo",
  "Mise aux normes électriques",
  "Plomberie & sanitaires",
  "Aménagement extérieur",
  "Clôture / Portail",
  "Autre",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    projectType: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const buildWaUrl = () => {
    const lines = [
      "Bonjour, je souhaite obtenir un devis pour un projet de rénovation.",
      "",
      `👤 Nom : ${form.name || "—"}`,
      `🔨 Projet : ${form.projectType || "—"}`,
      form.description ? `📝 Description : ${form.description}` : "",
    ]
      .filter((l) => l !== undefined)
      .join("\n");
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`;
  };

  const isValid = form.name.trim() && form.projectType;

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all text-sm";

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-green-100 text-green-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Contact rapide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Décrivez votre projet,{" "}
            <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              on vous répond sur WhatsApp
            </span>
          </h2>
          <p className="text-slate-500 text-lg">
            Remplissez les 3 champs — un clic suffit pour nous contacter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* WhatsApp form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-2xl p-7 shadow-sm border border-slate-100"
          >
            <div className="space-y-5">
              {/* Nom */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Votre nom *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className={inputClass}
                />
              </div>

              {/* Type de projet */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Type de projet *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={form.projectType}
                  onChange={handleChange}
                  className={inputClass + " cursor-pointer appearance-none"}
                >
                  <option value="" disabled>
                    Sélectionnez votre projet…
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Description{" "}
                  <span className="text-slate-400 font-normal">
                    (optionnelle)
                  </span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Surface, travaux souhaités, contraintes particulières…"
                  className={inputClass + " resize-none"}
                />
              </div>

              {/* WhatsApp CTA */}
              <a
                href={isValid ? buildWaUrl() : undefined}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => !isValid && e.preventDefault()}
                className={`group relative overflow-hidden w-full flex items-center justify-center gap-3 font-bold py-4 rounded-xl transition-all duration-200 ${
                  isValid
                    ? "bg-[#25D366] hover:bg-[#1ebe57] text-white hover:shadow-xl hover:shadow-green-500/30 cursor-pointer"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0" fill="currentColor" />
                Envoyer sur WhatsApp
                {isValid && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                )}
              </a>

              <p className="text-xs text-slate-400 text-center">
                ✓ Réponse rapide &nbsp;·&nbsp; ✓ Devis gratuit &nbsp;·&nbsp; ✓
                Sans engagement
              </p>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Dark contact card */}
            <div className="bg-slate-900 text-white rounded-2xl p-7">
              <h3 className="font-bold text-lg mb-6">
                Contactez-nous directement
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:0624295342"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                    <Phone className="w-5 h-5 text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">Téléphone</p>
                    <p className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                      06 24 29 53 42
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Bonjour, je souhaite obtenir des renseignements pour un projet de rénovation.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">WhatsApp</p>
                    <p className="font-semibold text-white group-hover:text-green-400 transition-colors">
                      Discuter sur WhatsApp
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">Adresse</p>
                    <p className="font-semibold text-white">
                      7 Chemin de Papus
                      <br />
                      31100 Toulouse
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-slate-900">
                  Disponible maintenant
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nous répondons généralement dans les 2 heures via WhatsApp. Pour
                une urgence, appelez directement.
              </p>
            </div>

            {/* Zone */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6">
              <p className="text-sm font-semibold text-slate-900 mb-1.5">
                Zone d&apos;intervention
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Toulouse et toute l&apos;agglomération toulousaine (31).
                Déplacement possible au-delà selon le projet.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
