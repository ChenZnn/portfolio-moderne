import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800/80 backdrop-blur-md text-white p-4 shadow-lg fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition-colors duration-300">
          Théo
        </Link>
        <ul className="flex space-x-4 sm:space-x-6">
          <li>
            <Link href="/#a-propos" className="hover:text-blue-400 transition-colors duration-300 px-2 py-1 rounded-md">
              À Propos
            </Link>
          </li>
          <li>
            <Link href="/#projets" className="hover:text-blue-400 transition-colors duration-300 px-2 py-1 rounded-md">
              Projets
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-blue-400 transition-colors duration-300 px-2 py-1 rounded-md">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;