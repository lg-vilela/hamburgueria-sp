
import React, { useState } from 'react';
import { Menu, X, Beef as BurgerIcon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/40 backdrop-blur-xl border-b border-white/5 transition-all">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="text-primary transform group-hover:rotate-12 transition-transform">
            <BurgerIcon size={34} strokeWidth={2.5} />
          </div>
          <h1 className="text-xl font-black tracking-tight text-white">Brasa Nobre</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <a 
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-gray-300 hover:text-primary transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block py-2.5 px-8 bg-primary hover:bg-red-700 text-white text-sm font-black rounded-full transition-all shadow-lg shadow-primary/20">
            Peça Online
          </button>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300">
          {NAV_LINKS.map(link => (
            <a 
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-2 text-xl font-bold text-white hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <button className="w-full py-4 bg-primary text-white font-black rounded-full">
            Peça Online
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
