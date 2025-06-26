import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-3xl font-bold tracking-wide">A.</div>

        {/* Hamburger Icon (for all screen sizes like in Ashley demo) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {menuOpen ? (
            <span className="text-3xl">✕</span>
          ) : (
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-4 h-0.5 bg-white ml-2"></span>
            </div>
          )}
        </button>
      </div>

      {/* Optional Mobile Menu (for later use) */}
      {menuOpen && (
        <nav className="bg-black mt-2 md:hidden">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-lg hover:text-yellow-500 transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
