import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Vous pouvez choisir une autre police
import Header from "../components/Header"; // Chemin relatif au lieu de l'alias @/
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mon Portfolio Moderne | Théo",
  description: "Portfolio de Théo, développeur web passionné.",
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