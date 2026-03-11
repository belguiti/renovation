"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Send, CheckCircle } from "lucide-react";

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

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Erreur réseau");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all text-sm";

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
          <span className="inline-block bg-orange-100 text-orange-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Devis gratuit
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Parlons de{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              votre projet
            </span>
          </h2>
          <p className="text-slate-500 text-lg">
            Remplissez le formulaire ou appelez-nous directement. Réponse sous
            24h.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-2xl p-7 shadow-sm border border-slate-100"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Message envoyé !
                </h3>
                <p className="text-slate-500 max-w-sm">
                  Nous avons bien reçu votre demande et reviendrons vers vous
                  dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Nom complet *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Téléphone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 XX XX XX XX"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean.dupont@email.com"
                    className={inputClass}
                  />
                </div>

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
                    value={formData.projectType}
                    onChange={handleChange}
                    className={inputClass + " cursor-pointer appearance-none"}
                  >
                    <option value="" disabled>
                      Sélectionnez votre projet…
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Description du projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet : surface, travaux souhaités, contraintes particulières…"
                    className={inputClass + " resize-none"}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    Une erreur s&apos;est produite. Veuillez réessayer ou nous
                    appeler directement.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer ma demande de devis
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  ✓ Réponse sous 24h &nbsp;·&nbsp; ✓ Devis gratuit
                  &nbsp;·&nbsp; ✓ Sans engagement
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact info sidebar */}
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
                  href="https://wa.me/33624295342?text=Bonjour%2C+je+souhaite+obtenir+des+renseignements+pour+un+projet+de+r%C3%A9novation."
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
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-slate-900">
                  Disponible maintenant
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nous répondons généralement dans les 2 heures en journée. Pour
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
