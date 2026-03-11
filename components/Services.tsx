"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Hammer,
  Layers,
  TreePine,
  ArrowRight,
  Wrench,
  Droplets,
  Zap,
  Grid3X3,
  Home,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceDetail {
  icon: ReactNode;
  text: string;
}

interface ServiceCard {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  details: ServiceDetail[];
  bgColor: string;
  iconBg: string;
  featured?: boolean;
}

const services: ServiceCard[] = [
  {
    id: "interieur",
    icon: <Home className="w-6 h-6" />,
    title: "Rénovation Intérieure",
    subtitle: "Complète",
    description:
      "De la démolition à la finition, nous prenons en charge l'intégralité de votre projet de rénovation. Salle de bain, cuisine, pièce à vivre — clé en main.",
    details: [
      {
        icon: <Hammer className="w-3.5 h-3.5" />,
        text: "Démolition & remontage de cloisons (placo)",
      },
      {
        icon: <Layers className="w-3.5 h-3.5" />,
        text: "Isolation thermique et phonique",
      },
      {
        icon: <Zap className="w-3.5 h-3.5" />,
        text: "Mise aux normes électriques",
      },
      {
        icon: <Droplets className="w-3.5 h-3.5" />,
        text: "Réseaux d'eau & installation sanitaires",
      },
    ],
    bgColor: "from-orange-50 to-amber-50",
    iconBg: "bg-orange-500",
    featured: true,
  },
  {
    id: "revetements",
    icon: <Grid3X3 className="w-6 h-6" />,
    title: "Revêtements",
    subtitle: "Sols & Murs",
    description:
      "Intérieur comme extérieur, nous maîtrisons tous les types de revêtements pour sublimer vos espaces avec précision et durabilité.",
    details: [
      {
        icon: <Grid3X3 className="w-3.5 h-3.5" />,
        text: "Pose de carrelage tous formats",
      },
      {
        icon: <Layers className="w-3.5 h-3.5" />,
        text: "Pose de faïence",
      },
      {
        icon: <Wrench className="w-3.5 h-3.5" />,
        text: "Ragréage & chape traditionnelle",
      },
    ],
    bgColor: "from-blue-50 to-sky-50",
    iconBg: "bg-blue-600",
  },
  {
    id: "exterieur",
    icon: <TreePine className="w-6 h-6" />,
    title: "Aménagement",
    subtitle: "Extérieur",
    description:
      "Clôtures, portails, fondations... Nous aménageons et sécurisons vos espaces extérieurs avec le même soin que l'intérieur.",
    details: [
      {
        icon: <ShieldCheck className="w-3.5 h-3.5" />,
        text: "Clôtures grillage rigide/souple & parpaing",
      },
      {
        icon: <Wrench className="w-3.5 h-3.5" />,
        text: "Portails battant ou coulissant",
      },
      {
        icon: <Home className="w-3.5 h-3.5" />,
        text: "Fondations, murettes, crépis & chapeaux",
      },
    ],
    bgColor: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-600",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-orange-100 text-orange-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Nos expertises
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tous vos travaux,{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              une seule adresse
            </span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            De la rénovation complète aux aménagements extérieurs, nous
            couvrons l&apos;ensemble de vos besoins en travaux à Toulouse.
          </p>
        </motion.div>

        {/* Bento-style cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={cn(
                "group relative rounded-2xl p-7 border border-slate-100 bg-gradient-to-br card-hover overflow-hidden",
                service.bgColor,
                service.featured &&
                  "ring-2 ring-orange-500/20 shadow-sm shadow-orange-500/10"
              )}
            >
              {service.featured && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  ⭐ Populaire
                </div>
              )}

              {/* Icon */}
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 shadow-md",
                  service.iconBg
                )}
              >
                {service.icon}
              </div>

              {/* Title */}
              <div className="mb-3">
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-slate-500">
                  {service.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Detail list */}
              <ul className="space-y-2.5 mb-6">
                {service.details.map((detail, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2.5 text-slate-700 text-sm"
                  >
                    <span className="text-slate-400 flex-shrink-0">
                      {detail.icon}
                    </span>
                    {detail.text}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 group-hover:gap-3 transition-all"
              >
                Demander un devis
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 mb-4">
            Un projet spécifique ? Décrivez-le nous.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Obtenir mon devis gratuit
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
