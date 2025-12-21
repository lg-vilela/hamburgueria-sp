
import React from 'react';
import { MapPin, Clock, Store } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 max-w-[1280px] mx-auto px-4 sm:px-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Map Placeholder */}
        <div className="w-full lg:w-1/2 min-h-[500px] relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLPs8fMwf62C-LmNRcTIIHkK2M6Ckr-jcSnMZA8wIab7oVv5uaVRkEnnsoG-83lSyZ-VLZmAMdBWfY3FhZQ27X5NSrM_OErkPTKaq6RJr0TyJ3jZEq1KoPkLEFKpNO2jOwTN-6LTeE9H4j96yavM-L1gBCslPYCbPs1gAu_H_sdl6jnLMOzCGSFxzmZheqkU4kOBxhm2ay4fVYVUrA17dRS7ixjmykGM_LwKfdtCDfkIxfMnTl_oaoTIQHCSYdc6yJngxBpC3UGBJy")`
            }}
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex flex-col items-center">
              <MapPin className="w-16 h-16 text-primary drop-shadow-[0_0_20px_rgba(236,37,19,0.8)] animate-bounce" fill="currentColor" />
              <div className="w-10 h-3 bg-black/40 rounded-full blur-md" />
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="w-full lg:w-1/2 bg-white/5 backdrop-blur-md p-10 md:p-16 rounded-[2.5rem] border border-white/10 shadow-sm flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-black mb-10 text-white">Visite-nos</h2>
            
            <div className="flex gap-6 mb-12 group">
              <div className="p-4 bg-primary/20 text-primary rounded-2xl h-fit border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                <Store size={26} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Hamburgueria SP</h4>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Rua Augusta, 1234<br />
                  São Paulo - SP, 01304-001
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="p-4 bg-primary/20 text-primary rounded-2xl h-fit border border-primary/20">
                <Clock size={26} />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-6 text-white">Horários</h4>
                <div className="grid gap-4 text-gray-400 text-lg">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="font-medium">Segunda</span>
                    <span className="text-primary font-black uppercase text-sm tracking-widest">Fechado</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Terça - Quinta</span>
                    <span className="text-gray-200">18:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Sexta - Sábado</span>
                    <span className="text-gray-200">18:00 - 01:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="text-gray-200">18:00 - 23:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="flex-1 py-4 px-6 border-2 border-primary text-primary font-black rounded-full hover:bg-primary hover:text-white transition-all text-lg uppercase tracking-wider">
              Como Chegar
            </button>
            <button className="flex-1 py-4 px-6 bg-primary text-white font-black rounded-full hover:bg-red-700 transition-all shadow-xl shadow-primary/30 text-lg uppercase tracking-wider">
              Reservar Mesa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
