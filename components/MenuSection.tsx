
import React from 'react';
import { BURGERS } from '../constants';
import { ArrowRight } from 'lucide-react';

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-24 max-w-[1280px] mx-auto px-4 sm:px-8">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Nosso Cardápio</span>
        <h2 className="text-4xl md:text-5xl font-black mb-4">Os Favoritos</h2>
        <p className="text-gray-400 max-w-lg mx-auto text-lg">
          Feitos à mão com paixão e servidos com nossos acompanhamentos exclusivos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BURGERS.map(burger => (
          <div 
            key={burger.id}
            className="group flex flex-col bg-white/5 backdrop-blur-sm rounded-3xl border border-white/5 overflow-hidden hover:shadow-[0_20px_50px_rgba(236,37,19,0.15)] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src={burger.image} 
                alt={burger.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            <div className="p-8 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">{burger.name}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {burger.description}
                </p>
              </div>
              <button className="w-full py-4 bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white group-hover:border-transparent rounded-full font-bold transition-all duration-300">
                Peça pelo Delivery
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button className="inline-flex items-center gap-2 font-bold text-xl text-gray-300 hover:text-primary transition-all group">
          Ver Cardápio Completo <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default MenuSection;
