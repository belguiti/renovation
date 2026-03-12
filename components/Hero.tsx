"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85",
    label: "Rénovation complète",
    sub: "Toulouse · 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=85",
    label: "Cuisine moderne",
    sub: "Minimes · 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1620626011761-996317702149?auto=format&fit=crop&w=900&q=85",
    label: "Salle de bain italienne",
    sub: "Colomiers · 2023",
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
    label: "Aménagement salon",
    sub: "Blagnac · 2024",
  },
];

const STATS = [
  { target: 500, suffix: "+", label: "Projets réalisés" },
  { target: 10, suffix: "+", label: "Ans d'expérience" },
  { target: 100, suffix: "%", label: "Devis gratuit" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const duration = 1400;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const features = [
  "Travail propre et minutieux",
  "Devis gratuit sans engagement",
  "Accompagnement de A à Z",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Hero() {
  const [imgIndex, setImgIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (dir: number) => {
    setDirection(dir);
    setImgIndex((i) => (i + dir + GALLERY.length) % GALLERY.length);
  };

  // Auto-rotate every 4s
  useEffect(() => {
    const t = setInterval(() => navigate(1), 4000);
    return () => clearInterval(t);
  });

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d: number) => ({ opacity: 0, x: d * -40, scale: 0.97 }),
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#06091A]" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-blue-700/8 rounded-full blur-[140px] pointer-events-none"
      />
      {/* Extra accent orb */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — text */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Badge */}
            <motion.div variants={item} className="mb-8">
              <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white/85">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/40 via-white/10 to-blue-500/30 p-[1px]">
                  <span className="absolute inset-[1px] rounded-full bg-white/5 backdrop-blur-sm" />
                </span>
                <Star className="relative z-10 w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                <span className="relative z-10">Artisan certifié · Toulouse & région</span>
              </span>
            </motion.div>

            {/* H1 with word-reveal */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.06] tracking-tight mb-6"
            >
              Votre projet de{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                  rénovation
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
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
            <motion.div variants={item} className="flex flex-wrap gap-2.5 mb-10">
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
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="group relative overflow-hidden flex items-center gap-2 bg-orange-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-orange-600 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 rounded-xl ring-2 ring-orange-500/50 animate-ping opacity-40" />
                <span className="relative z-10 flex items-center gap-2">
                  Obtenir un devis gratuit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>

              <a
                href="tel:0624295342"
                className="flex items-center gap-2.5 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 hover:bg-white/5 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                06 24 29 53 42
              </a>
            </motion.div>

            {/* Animated stats */}
            <motion.div
              variants={item}
              className="flex gap-8 pt-7 border-t border-white/10"
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    <AnimatedCounter target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — rotating gallery */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Glow */}
            <div className="absolute inset-8 bg-orange-500/10 rounded-3xl blur-3xl" />

            <div className="relative w-full max-w-[480px]">
              {/* Gradient border */}
              <div className="absolute -inset-[1.5px] rounded-3xl bg-gradient-to-br from-orange-500/50 via-white/5 to-blue-500/30" />

              {/* Image frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-900">
                <AnimatePresence custom={direction} mode="popLayout">
                  <motion.div
                    key={imgIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={GALLERY[imgIndex].src}
                      alt={GALLERY[imgIndex].label}
                      fill
                      className="object-cover"
                      priority={imgIndex === 0}
                      sizes="480px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Image label overlay */}
                <div className="absolute bottom-5 left-5 right-5 z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {GALLERY[imgIndex].label} ✓
                    </p>
                    <p className="text-white/60 text-xs">{GALLERY[imgIndex].sub}</p>
                  </div>
                  {/* Dot indicators */}
                  <div className="flex gap-1.5">
                    {GALLERY.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setDirection(i > imgIndex ? 1 : -1); setImgIndex(i); }}
                        className={`rounded-full transition-all duration-300 ${
                          i === imgIndex ? "w-4 h-1.5 bg-orange-400" : "w-1.5 h-1.5 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Nav arrows */}
                <button
                  onClick={() => navigate(-1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate(1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Floating stat — top right */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 bg-white rounded-2xl px-4 py-3 shadow-2xl"
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="font-bold text-slate-900 text-sm leading-none">4.9 / 5</p>
                <p className="text-slate-400 text-xs mt-0.5">47 avis clients</p>
              </motion.div>

              {/* Floating stat — bottom left */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl px-4 py-3 shadow-2xl text-white"
              >
                <p className="font-extrabold text-2xl leading-none">500+</p>
                <p className="text-orange-100 text-xs mt-0.5">Projets réalisés</p>
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
