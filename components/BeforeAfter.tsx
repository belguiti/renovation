"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";

// Replace these with real before/after photos from your projects
const BEFORE_IMG =
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";
const AFTER_IMG =
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(4, Math.min(96, (x / rect.width) * 100));
    setPosition(pct);
    setHasInteracted(true);
  }, []);

  // Global mouse tracking so dragging outside the box still works
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

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
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

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-blue-500/10 to-orange-500/20 rounded-3xl blur-xl" />

          {/* Slider container */}
          <div
            ref={containerRef}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchMove={(e) =>
              handleMove(e.touches[0].clientX)
            }
            onTouchStart={(e) =>
              handleMove(e.touches[0].clientX)
            }
          >
            {/* APRÈS layer (base — always visible) */}
            <div className="absolute inset-0">
              <Image
                src={AFTER_IMG}
                alt="Après rénovation"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1024px"
                priority
              />
            </div>

            {/* AVANT layer (clipped to left portion) */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 ${100 - position}% 0 0)`,
              }}
            >
              <Image
                src={BEFORE_IMG}
                alt="Avant rénovation"
                fill
                className="object-cover brightness-90 saturate-75"
                sizes="(max-width: 1280px) 100vw, 1024px"
                priority
              />
            </div>

            {/* Divider line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] pointer-events-none z-20"
              style={{ left: `${position}%` }}
            >
              {/* Drag handle */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center"
                style={{ cursor: "ew-resize" }}
              >
                <ArrowLeftRight className="w-5 h-5 text-slate-700" />
              </div>
            </div>

            {/* AVANT label */}
            <div
              className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 transition-opacity duration-300"
              style={{ opacity: position > 15 ? 1 : 0 }}
            >
              Avant
            </div>

            {/* APRÈS label */}
            <div
              className="absolute top-4 right-4 z-10 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full transition-opacity duration-300"
              style={{ opacity: position < 85 ? 1 : 0 }}
            >
              Après
            </div>

            {/* Hint overlay (hidden once user interacts) */}
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

          {/* Caption */}
          <p className="text-center text-sm text-slate-400 mt-4">
            Rénovation complète d&apos;une cuisine — Toulouse (31)
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
          >
            Transformer mon espace
          </a>
        </motion.div>
      </div>
    </section>
  );
}
