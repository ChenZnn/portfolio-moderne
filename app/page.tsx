import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  // Données de projets (à personnaliser)
  const projects = [
    {
      title: "Portfolio Moderne",
      description: "Un portfolio personnel développé avec Next.js et Tailwind CSS, présentant mes compétences et projets.",
      imageUrl: "/images/portfolio.jpg", // Ajoutez une image dans le dossier public/images
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      codeLink: "https://github.com/username/portfolio",
      demoLink: "https://portfolio.example.com"
    },
    {
      title: "Application E-commerce",
      description: "Une plateforme e-commerce complète avec panier d'achat, paiement et gestion des commandes.",
      imageUrl: "/images/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      codeLink: "https://github.com/username/ecommerce",
      demoLink: "https://ecommerce.example.com"
    },
    {
      title: "Dashboard Analytics",
      description: "Un tableau de bord interactif pour visualiser et analyser des données complexes.",
      imageUrl: "/images/dashboard.jpg",
      tags: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"],
      codeLink: "https://github.com/username/dashboard",
      demoLink: "https://dashboard.example.com"
    }
  ];

  return (
    <>
      {/* Section Héros */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-fade-in-down">
          Bonjour, je suis Théo
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl animate-fade-in-up">
          Développeur Web Full-Stack. Je transforme des idées en expériences numériques innovantes et performantes.
        </p>
        <a
          href="#projets"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up"
        >
          Découvrir mes projets
        </a>
      </section>

      {/* Section À Propos */}
      <section id="a-propos" className="py-16 sm:py-24 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-blue-400">À Propos de Moi</h2>
          <div className="max-w-3xl mx-auto text-left space-y-6 text-gray-300">
            <p className="text-lg">
              Passionné par le développement web et les nouvelles technologies, je m'efforce de créer des applications web qui sont non seulement fonctionnelles et robustes, mais aussi esthétiques et agréables à utiliser.
            </p>
            <p className="text-lg">
              Mon parcours m'a permis d'acquérir une solide expérience avec des technologies modernes telles que React, Next.js, Node.js, TypeScript, et bien sûr, Tailwind CSS pour un design rapide et responsive.
            </p>
            <p className="text-lg">
              Je suis toujours à la recherche de nouveaux défis et opportunités pour apprendre et grandir en tant que développeur.
            </p>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="py-16 sm:py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-blue-400">Mes Projets Récents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                codeLink={project.codeLink}
                demoLink={project.demoLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-16 sm:py-24 bg-gray-800">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-blue-400">Contactez-moi</h2>
          <p className="text-lg text-gray-300 mb-10">
            Une question, une proposition de projet, ou simplement envie de discuter ? N'hésitez pas à m'envoyer un message !
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}