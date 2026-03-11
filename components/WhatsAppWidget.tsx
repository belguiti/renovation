"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/33624295342?text=Bonjour%2C+je+souhaite+obtenir+des+renseignements+pour+un+projet+de+r%C3%A9novation.";

export default function WhatsAppWidget() {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white font-medium pl-4 pr-5 py-3.5 rounded-full shadow-xl shadow-green-500/30 transition-colors"
      aria-label="Nous contacter sur WhatsApp"
    >
      <MessageCircle className="w-5 h-5 flex-shrink-0" fill="white" />
      <span className="text-sm hidden sm:inline font-semibold">
        WhatsApp
      </span>
    </motion.a>
  );
}
