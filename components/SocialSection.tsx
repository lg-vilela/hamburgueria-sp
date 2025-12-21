
import React from 'react';
import { Instagram, MessageCircle, Heart, Share2 } from 'lucide-react';

const SOCIAL_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    likes: '1.2k',
    comments: '42'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=500',
    likes: '850',
    comments: '18'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=600',
    likes: '2.4k',
    comments: '95'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=500',
    likes: '1.1k',
    comments: '31'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=800',
    likes: '3.2k',
    comments: '120'
  }
];

const SocialSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black/20">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <Instagram size={24} />
              <span className="font-bold tracking-[0.3em] uppercase text-sm">Comunidade SP</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              #HamburgueriaSP <br />no seu Feed
            </h2>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-sm">
            Onde a gastronomia encontra o estilo. Compartilhe sua experiência e faça parte do nosso mural.
          </p>
        </div>

        {/* Grid Mosaico Criativo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {SOCIAL_POSTS.map((post, idx) => (
            <div
              key={post.id}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition-all duration-700 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_40px_rgba(236,37,19,0.15)] 
                ${idx === 0 ? 'col-span-2 row-span-2' : ''}
                ${idx === 2 ? 'md:row-span-2' : ''}
                ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}
              `}
            >
              <div className="w-full h-full bg-neutral-900 animate-pulse absolute inset-0 -z-10" />
              <img 
                src={post.image} 
                alt="Burger social moment"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay de Interação */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center gap-6 text-white font-bold">
                  <div className="flex items-center gap-2">
                    <Heart size={20} className="text-primary fill-primary" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={20} />
                    <span>{post.comments}</span>
                  </div>
                  <div className="ml-auto">
                    <Share2 size={20} className="hover:text-primary cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Chamada para Ação */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <button className="group relative px-12 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-black text-xl overflow-hidden transition-all hover:border-primary/50">
            <span className="relative z-10 flex items-center gap-3 text-white">
              Siga @HamburgueriaSP <Instagram size={24} />
            </span>
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
