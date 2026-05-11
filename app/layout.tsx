import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Vous pouvez choisir une autre police
import Header from "../components/Header"; // Chemin relatif au lieu de l'alias @/
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Théo Noel — Développeur Full-Stack",
  description: "Portfolio de Théo Noel, développeur full-stack spécialisé Next.js, React et TypeScript. En recherche d'alternance CDA 2026-2027.",
  openGraph: {
    title: "Théo Noel — Développeur Full-Stack",
    description: "Portfolio de Théo Noel, développeur full-stack. Projets : crypto trading bot, sites web, app mobile IA.",
    url: "https://portfolio-moderne.vercel.app",
    siteName: "Portfolio Théo Noel",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <Header />
        <main className="pt-20"> {/* Padding top pour compenser la hauteur du header fixe */}
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}