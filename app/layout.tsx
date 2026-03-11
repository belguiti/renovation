import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AEJ Rénovation Toulouse — Artisan Spécialiste Second Œuvre",
  description:
    "AEJ Rénovation : votre artisan spécialisé en rénovation complète à Toulouse. Carrelage, placo, électricité, plomberie, aménagement extérieur. Devis gratuit au 06 24 29 53 42.",
  keywords: [
    "rénovation toulouse",
    "artisan toulouse",
    "carrelage toulouse",
    "rénovation salle de bain toulouse",
    "placo toulouse",
    "aej rénovation",
    "second oeuvre toulouse",
    "clôture portail toulouse",
  ],
  openGraph: {
    title: "AEJ Rénovation Toulouse — Artisan Spécialiste",
    description:
      "Votre projet de rénovation de A à Z à Toulouse. Second œuvre, aménagement intérieur et extérieur.",
    url: "https://aej-renovation.fr",
    siteName: "AEJ Rénovation",
    locale: "fr_FR",
    type: "website",
  },
  metadataBase: new URL("https://aej-renovation.fr"),
  alternates: {
    canonical: "https://aej-renovation.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-white text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
