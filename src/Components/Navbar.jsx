import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md px-6 py-4 font-poppins text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-extrabold tracking-widest">Ashley</div>

        {/* Hamburger Icon */}
        <button
          className="w-10 h-10 flex flex-col justify-center items-center relative group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`h-0.5 w-6 bg-white absolute transition-all duration-300 ${menuOpen ? 'rotate-45 top-2.5' : '-translate-y-2'}`} />
          <span className={`h-0.5 w-6 bg-white absolute transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`h-0.5 w-6 bg-white absolute transition-all duration-300 ${menuOpen ? '-rotate-45 top-2.5' : 'translate-y-2'}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 text-white flex flex-col items-center justify-center space-y-10 text-4xl font-light tracking-wide transition-transform duration-700 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {['Home', 'Portfolio', 'Services', 'News', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="hover:text-ashleyGold transition duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
}
