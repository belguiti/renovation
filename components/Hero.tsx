"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=90",
    label: "Cuisine moderne",
    location: "Toulouse · Minimes",
  },
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=90",
    label: "Rénovation complète",
    location: "Toulouse · 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1920&q=90",
    label: "Aménagement salon",
    location: "Blagnac · 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1920&q=90",
    label: "Transformation intérieure",
    location: "Toulouse · Compans",
  },
];

const STATS = [
  { value: "500", suffix: "+", label: "Projets livrés" },
  { value: "10", suffix: " ans", label: "D'expérience" },
  { value: "4.9", suffix: "/5", label: "Note clients" },
  { value: "100", suffix: "%", label: "Devis gratuit" },
];

const features = [
  "Travail propre et minutieux",
  "Devis gratuit sans engagement",
  "Accompagnement de A à Z",
];

function Counter({ value, suffix }: { value: string; suffix: string }) {
  const [display, setDisplay] = useState("0");
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    done.current = true;
    const num = parseFloat(value);
    const isDecimal = value.includes(".");
    const steps = 55;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const p = 1 - Math.pow(1 - step / steps, 3);
      const v = num * p;
      setDisplay(isDecimal ? v.toFixed(1) : Math.round(v).toString());
      if (step >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, 22);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.5 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % GALLERY.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* ── Full-screen rotating background ─────────────────── */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={GALLERY[idx].src}
              alt={GALLERY[idx].label}
              fill
              className="object-cover"
              priority={idx === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Gradient overlays ───────────────────────────────── */}
      {/* Left veil — makes text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/10 pointer-events-none" />
      {/* Top/bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/80 pointer-events-none" />

      {/* ── Main text content ────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-[640px]"
          >
            {/* Badge */}
            <motion.div variants={item} className="mb-7">
              <span className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/40 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
                <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                Artisan certifié · Toulouse & région
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-7xl font-extrabold text-white leading-[1.04] tracking-tight mb-6"
            >
              Votre projet de{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                  rénovation
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
                  className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full origin-left"
                />
              </span>{" "}
              <br className="hidden sm:block" />
              de A à Z à Toulouse.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-xl text-white/65 leading-relaxed mb-8 max-w-xl"
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
                  className="flex items-center gap-2 text-white/80 text-sm bg-white/8 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                  {f}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group relative overflow-hidden flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-xl shadow-orange-500/30"
              >
                Obtenir un devis gratuit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a
                href="tel:0624295342"
                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                06 24 29 53 42
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Vertical photo indicators (right) ───────────────── */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-3">
        {GALLERY.map((g, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            title={g.label}
            className="flex items-center justify-center w-5"
          >
            <span
              className={`block rounded-full transition-all duration-400 ${
                i === idx
                  ? "w-1.5 h-10 bg-orange-400"
                  : "w-1 h-3 bg-white/35 hover:bg-white/60"
              }`}
            />
          </button>
        ))}
        {/* Current slide label */}
        <motion.p
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-white/40 text-[10px] font-medium tracking-widest uppercase mt-2"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {GALLERY[idx].location}
        </motion.p>
      </div>

      {/* ── Bottom stats glass bar ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="relative z-10"
      >
        <div className="bg-white/8 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {STATS.map((s) => (
                <div key={s.label} className="py-5 px-4 sm:px-8 text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-white">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-white/45 text-xs mt-0.5 uppercase tracking-widest font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Wave transition to white */}
      <div className="relative z-10 pointer-events-none -mb-1">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
        >
          <path
            d="M0 72L1440 72L1440 24C1200 64 960 72 720 72C480 72 240 24 0 24L0 72Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
