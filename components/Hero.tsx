"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";

const HERO_IMG =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=85";

const features = [
  "Travail propre et minutieux",
  "Devis gratuit sans engagement",
  "Accompagnement de A à Z",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* ── Background ───────────────────────────────────── */}
      <div className="absolute inset-0 bg-[#06091A]" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-blue-700/8 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Content grid ──────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — text */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Badge with animated border */}
            <motion.div variants={item} className="mb-8">
              <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white/85">
                {/* Gradient animated border */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/40 via-white/10 to-blue-500/30 p-[1px]">
                  <span className="absolute inset-[1px] rounded-full bg-white/5 backdrop-blur-sm" />
                </span>
                <Star className="relative z-10 w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                <span className="relative z-10">
                  Artisan certifié · Toulouse & région
                </span>
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.06] tracking-tight mb-6"
            >
              Votre projet de{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                  rénovation
                </span>
                {/* Underline accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full origin-left"
                />
              </span>{" "}
              de A à Z à Toulouse.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-lg"
            >
              Spécialiste du second œuvre, aménagement intérieur et extérieur.
              Un travail propre, minutieux et sur-mesure.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-2.5 mb-10"
            >
              {features.map((f) => (
                <span
                  key={f}
                  className="flex items-center gap-2 text-white/75 text-sm bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                  {f}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 mb-12"
            >
              {/* Primary CTA — glow pulse */}
              <a
                href="#contact"
                className="group relative overflow-hidden flex items-center gap-2 bg-orange-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-orange-600 hover:-translate-y-0.5"
              >
                {/* Glow pulse ring */}
                <span className="absolute inset-0 rounded-xl ring-2 ring-orange-500/50 animate-ping opacity-40" />
                <span className="relative z-10 flex items-center gap-2">
                  Obtenir un devis gratuit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Shimmer sweep */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>

              {/* Secondary CTA */}
              <a
                href="tel:0624295342"
                className="flex items-center gap-2.5 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 hover:bg-white/5 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                06 24 29 53 42
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="flex gap-8 pt-7 border-t border-white/10"
            >
              {[
                { v: "500+", l: "Projets réalisés" },
                { v: "10+", l: "Ans d'expérience" },
                { v: "100%", l: "Devis gratuit" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {s.v}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — floating showcase card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Glow behind the card */}
            <div className="absolute inset-8 bg-orange-500/10 rounded-3xl blur-3xl" />

            {/* Main photo card */}
            <div className="relative w-full max-w-[480px]">
              {/* Gradient border */}
              <div className="absolute -inset-[1.5px] rounded-3xl bg-gradient-to-br from-orange-500/50 via-white/5 to-blue-500/30" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src={HERO_IMG}
                  alt="Rénovation intérieure moderne par AEJ Rénovation"
                  fill
                  className="object-cover"
                  priority
                  sizes="480px"
                />
                {/* Subtle bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                {/* Inline overlay badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {["🏠", "🪟", "🚿"].map((e, i) => (
                      <span
                        key={i}
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm border-2 border-white/30"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Chantier terminé ✓
                    </p>
                    <p className="text-white/60 text-xs">
                      Rénovation complète · Toulouse
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat — top right */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 bg-white rounded-2xl px-4 py-3 shadow-2xl"
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-orange-400 fill-orange-400"
                    />
                  ))}
                </div>
                <p className="font-bold text-slate-900 text-sm leading-none">
                  4.9 / 5
                </p>
                <p className="text-slate-400 text-xs mt-0.5">47 avis clients</p>
              </motion.div>

              {/* Floating stat — bottom left */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-5 -left-5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl px-4 py-3 shadow-2xl text-white"
              >
                <p className="font-extrabold text-2xl leading-none">500+</p>
                <p className="text-orange-100 text-xs mt-0.5">
                  Projets réalisés
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L1440 80L1440 30C1200 70 960 80 720 80C480 80 240 30 0 30L0 80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
