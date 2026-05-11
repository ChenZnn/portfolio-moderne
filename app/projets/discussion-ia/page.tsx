import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application de Discussion IA — Théo Noel",
  description: "Application mobile Flutter permettant de discuter avec des personnages IA issus d'univers fictifs.",
};

const screenshots: { src: string; alt: string }[] = [
  // Ajoutez vos screenshots ici :
  // { src: "/images/discussion-ia/screen1.jpg", alt: "Écran d'accueil" },
  // { src: "/images/discussion-ia/screen2.jpg", alt: "Conversation" },
  // { src: "/images/discussion-ia/screen3.jpg", alt: "Sélection de personnage" },
];

export default function DiscussionIA() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-purple-900 text-center px-6">
        <Link href="/#projets" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Retour aux projets
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Application de Discussion IA
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Application mobile permettant de discuter avec des personnages issus de différents univers fictifs, propulsée par l&apos;intelligence artificielle.
        </p>
      </section>

      {/* À propos */}
      <section className="py-16 bg-gray-800 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">À propos du projet</h2>
          <div className="text-lg text-gray-300 space-y-4">
            <p>
              Cette application mobile développée avec Flutter permet aux utilisateurs de discuter avec des personnages issus de différents univers fictifs. L&apos;application communique avec une API connectée à une IA pour générer les conversations et les images.
            </p>
            <p>
              Chaque personnage a sa propre personnalité, son style de réponse et son univers visuel. L&apos;utilisateur peut choisir avec qui discuter et l&apos;IA adapte ses réponses en conséquence.
            </p>
          </div>

          {/* Technologies */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Technologies utilisées</h3>
            <div className="flex flex-wrap gap-3">
              {["Flutter", "Dart", "API REST", "Intelligence Artificielle", "Mobile", "UI/UX Design"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-gray-700 text-blue-300 rounded-lg text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Liens */}
          <div className="mt-10 flex gap-4">
            <a
              href="https://github.com/ChenZnn/Mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition"
            >
              Voir le code
            </a>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-16 bg-gray-900 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Captures d&apos;écran</h2>

          {screenshots.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {screenshots.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 bg-gray-800"
                >
                  <Image src={img.src} alt={img.alt} fill className="object-contain" />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">Screenshots à venir…</p>
          )}
        </div>
      </section>
    </div>
  );
}
