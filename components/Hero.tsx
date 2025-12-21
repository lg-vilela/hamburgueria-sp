
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-8 py-6">
      <div 
        className="relative min-h-[560px] flex flex-col items-center justify-center p-8 text-center bg-cover bg-center rounded-3xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQPg5849pkbDE24qAbFhQh0GlBQWizNqy-8Nvyjo-z50Dph85wiE-1x7HsPWEGOs5o_YZFJttHKBnAjxdk_rv9gm4T9EGirCC84nqkGTRQllvU7Zic1jAtL4xyL81wbS_bpSRvjnWqCFxZGdT19jR3JDf_Vam1M5fZ3DMFXa8STww3sCFuesYHvajf1xqUtEaXvhoEvCHNyTvy7XKfOPUBJ_jld6kragCMr0EDNewcxgLHEzJkJfFX6JNDuPkgoa_tchq2fKnEP7iC")`
        }}
      >
        <div className="max-w-3xl z-10 flex flex-col gap-6">
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-xl">
            O Melhor Hambúrguer de Sampa
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl font-medium max-w-2xl mx-auto drop-shadow-md">
            Blends artesanais, ingredientes locais e sabor inigualável no coração de São Paulo. Experimente o verdadeiro sabor da cidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button className="px-10 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-2xl">
              Peça Agora
            </button>
            <button className="px-10 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 rounded-full font-bold text-lg transition-all">
              Ver Cardápio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
