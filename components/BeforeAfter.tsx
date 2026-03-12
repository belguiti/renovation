"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    id: "cuisine",
    label: "Cuisine",
    emoji: "🍳",
    location: "Toulouse · Minimes",
    year: "2024",
    beforeImg:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
    caption:
      "Rénovation complète — plan de travail marbre, façades laquées, crédence carrelée.",
    stats: [
      { label: "Surface", value: "22 m²" },
      { label: "Durée", value: "3 sem." },
      { label: "Satisfaction", value: "5 ★" },
    ],
  },
  {
    id: "sdb",
    label: "Salle de bain",
    emoji: "🚿",
    location: "Toulouse · Colomiers",
    year: "2023",
    beforeImg:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1600&q=80",
    caption:
      "Douche italienne, carrelage grand format 60×120, meuble vasque suspendu, robinetterie noire mat.",
    stats: [
      { label: "Surface", value: "8 m²" },
      { label: "Durée", value: "2 sem." },
      { label: "Satisfaction", value: "5 ★" },
    ],
  },
  {
    id: "salon",
    label: "Salon & Séjour",
    emoji: "🏠",
    location: "Toulouse · Blagnac",
    year: "2024",
    beforeImg:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",
    caption:
      "Cloisons, revêtement sol stratifié, peinture deux tons, éclairage encastré, rangements sur-mesure.",
    stats: [
      { label: "Surface", value: "38 m²" },
      { label: "Durée", value: "4 sem." },
      { label: "Satisfaction", value: "5 ★" },
    ],
  },
];

export default function BeforeAfter() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const project = PROJECTS.find((p) => p.id === activeId)!;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(4, Math.min(96, (x / rect.width) * 100));
    setPosition(pct);
    setHasInteracted(true);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => handleMove(e.clientX);
    const onUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [isDragging, handleMove]);

  const switchProject = (id: string) => {
    setActiveId(id);
    setPosition(50);
    setHasInteracted(false);
  };

  return (
    <section id="realisations" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block bg-orange-100 text-orange-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Nos réalisations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            La transformation{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              avant / après
            </span>
          </h2>
          <p className="text-slate-500 text-lg">
            Glissez le curseur pour découvrir la métamorphose de nos chantiers.
          </p>
        </motion.div>

        {/* Project tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex gap-2 sm:gap-3 justify-center mb-10 flex-wrap"
        >
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={() => switchProject(p.id)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeId === p.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <span>{p.emoji}</span>
              {p.label}
              {activeId === p.id && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Slider area with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* Outer glow */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-blue-500/10 to-orange-500/20 rounded-3xl blur-xl" />

              {/* Slider */}
              <div
                ref={containerRef}
                className="relative aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
                onMouseDown={(e) => {
                  setIsDragging(true);
                  handleMove(e.clientX);
                }}
                onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                onTouchStart={(e) => handleMove(e.touches[0].clientX)}
              >
                {/* APRÈS */}
                <div className="absolute inset-0">
                  <Image
                    src={project.afterImg}
                    alt={`Après — ${project.label}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 1024px"
                    priority
                  />
                </div>

                {/* AVANT (clipped) */}
                <div
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                >
                  <Image
                    src={project.beforeImg}
                    alt={`Avant — ${project.label}`}
                    fill
                    className="object-cover brightness-75 saturate-50 contrast-90"
                    sizes="(max-width: 1280px) 100vw, 1024px"
                    priority
                  />
                </div>

                {/* Divider */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] pointer-events-none z-20"
                  style={{ left: `${position}%` }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center"
                    style={{ cursor: "ew-resize" }}
                  >
                    <ArrowLeftRight className="w-5 h-5 text-slate-700" />
                  </div>
                </div>

                {/* Labels */}
                <div
                  className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 transition-opacity duration-300"
                  style={{ opacity: position > 15 ? 1 : 0 }}
                >
                  Avant
                </div>
                <div
                  className="absolute top-4 right-4 z-10 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full transition-opacity duration-300"
                  style={{ opacity: position < 85 ? 1 : 0 }}
                >
                  Après
                </div>

                {/* Location badge */}
                <div className="absolute bottom-4 left-4 z-10 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/15">
                  📍 {project.location} · {project.year}
                </div>

                {/* Hint */}
                {!hasInteracted && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
                  >
                    <div className="bg-black/50 backdrop-blur-sm text-white text-sm font-medium px-5 py-2.5 rounded-full border border-white/20">
                      ← Glissez pour comparer →
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Caption + stats */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-slate-500 text-sm max-w-xl">{project.caption}</p>
              <div className="flex gap-5 shrink-0">
                {project.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-slate-900 font-bold text-sm">{s.value}</div>
                    <div className="text-slate-400 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
          >
            Transformer mon espace
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
