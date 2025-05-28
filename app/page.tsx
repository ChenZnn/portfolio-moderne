import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";

export default function Home() {
  // Données de projets (à personnaliser)
  const projects = [
    {
      title: "Portfolio Moderne (En Dev)",
      description: "Un portfolio personnel développé avec Next.js et Tailwind CSS, présentant mes compétences et projets de manière élégante et responsive.",
      imageUrl: "/images/portfolio.jpg", // Ajoutez une image dans le dossier public/images
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      codeLink: "https://github.com/ChenZnn/portfolio-moderne",
      demoLink: "https://portfolio.example.com"
    },
    {
      title: "Site de l'Association Coop 5 pour 100 (En dev)",
      description: "Plateforme complète pour l'association Coop 5 pour 100 avec un backend permettant la gestion dynamique des contenus (textes et images) par les administrateurs.",
      imageUrl: "/images/coop5pour100.jpg",
      tags: ["NextJS", "Strapi", "TailwindCSS", "TypeScript"],
      codeLink: "https://github.com/ChenZnn/coop5pour100",
      demoLink: "https://coop5pour100.org"
    },
    {
      title: "Site de Coiffure (En dev)",
      description: "Site vitrine élégant pour un salon de coiffure, avec présentation des services, galerie de réalisations et système de prise de rendez-vous.",
      imageUrl: "/images/coiffure.jpg",
      tags: ["NextJS", "TailwindCSS", "Responsive Design"],
      codeLink: "https://github.com/ChenZnn/sitecoiffeur",
      demoLink: "https://sitecoiffeur.vercel.app/"
    },
    {
      title: "Application de Discussion IA",
      description: "Application mobile développée avec Flutter permettant aux utilisateurs de discuter avec des personnages issus de différents univers fictifs. L'application communique avec une API connectée à une IA pour générer les conversations et les images.",
      imageUrl: "/images/chat-app.jpg",
      tags: ["Flutter", "Dart", "API", "Intelligence Artificielle", "Mobile"],
      codeLink: "https://github.com/ChenZnn/Mobile",
      demoLink: "https://sitecoiffeur.vercel.app/"
    }
  ];

  return (
    <>
      {/* Section Héros */}
      {/* Section Héros */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 relative overflow-hidden">
        {/* Arrière-plan avec effet de particules */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 z-0">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("/images/grid-pattern.svg")', backgroundSize: '30px 30px' }}></div>
        </div>
        
        {/* Cercles décoratifs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Contenu principal */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
            <p className="text-blue-300 font-medium">Développeur Web Full-Stack</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-fade-in-down">
            Bonjour, je suis Théo
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
            Je transforme des idées en expériences numériques innovantes et performantes, en combinant créativité et expertise technique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <a
              href="#projets"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              Découvrir mes projets
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>

      {/* Section À Propos */}
      <section id="a-propos" className="py-16 sm:py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-blue-400">À Propos de Moi</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            {/* Colonne de gauche - Photo et infos rapides */}
            <div className="flex flex-col items-center md:items-end">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl mb-6">
                {/* Remplacez par votre photo */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-5xl font-bold">
                  T
                </div>
              </div>
              
              <div className="space-y-3 text-center md:text-right">
                <div className="flex items-center justify-center md:justify-end space-x-2">
                  <span className="text-blue-300">Localisation:</span>
                  <span className="text-gray-300">Normandie, France</span>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-2">
                  <span className="text-blue-300">Spécialité:</span>
                  <span className="text-gray-300">Développement Full-Stack</span>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-2">
                  <span className="text-blue-300">Disponibilité:</span>
                  <span className="text-green-400 font-medium">Disponible pour projets</span>
                </div>
              </div>
            </div>
            
            {/* Colonne de droite - Bio et compétences */}
            <div className="space-y-6 text-left">
              <p className="text-lg text-gray-300">
                Développeur <span className="text-blue-400 font-semibold">passionné</span> et <span className="text-blue-400 font-semibold">créatif</span>, je conçois des expériences web qui allient esthétique moderne et fonctionnalités avancées. Mon approche combine une solide expertise technique avec un sens aigu du design et de l&apos;expérience utilisateur.
              </p>
              
              <p className="text-lg text-gray-300">
                Spécialisé dans les technologies <span className="text-blue-400">Next.js</span>, <span className="text-blue-400">React</span> et <span className="text-blue-400">TypeScript</span>, je développe des applications web performantes, accessibles et évolutives. J&apos;accorde une attention particulière à l&apos;optimisation et aux bonnes pratiques de développement.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Compétences Techniques</h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "TailwindCSS", "Node.js", "Strapi", "Git", "Responsive Design"].map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-gray-700 text-blue-300 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
            Une question, une proposition de projet, ou simplement envie de discuter ? Voici comment me joindre directement :
          </p>
          <ContactInfo />
        </div>
      </section>

      <Footer />
    </>
  );
}