
import React from 'react';
import { Verified, Leaf, Croissant } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black/40 border-y border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[120px]" />
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 transform rotate-1 hover:rotate-0 transition-all duration-1000">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcxSED_EO6W4DrscrHVkEUqzUSZiWJDnEX3nuBcJ_JzL_d4iMAthKHJQfDwtHH79WsOfMtfJxm682RL2fIeACbucgnvq2hzDLC-Rf9eD-QG86MBLKTHBS420ezNHoDHwoON1oL7x_CFEqXj6hosjulXxnVe_nQh_3xsRDqnVJQkij7mJltXY7ZcvXPk8jMM0-ZYvSsdipX4LCXa59PThvJCQVj6L0kW6aRGj35qcwAnFC34MKiuMlZka1HamaxlzgBr8U2sbuAILBK" 
              alt="Chef making burger"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
            />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm block mb-4">Nossa História</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">Ingredientes Frescos, Alma Paulistana</h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              Acreditamos que um ótimo hambúrguer começa com ótimos ingredientes. Por isso, nossa carne vem diariamente de fazendas selecionadas do interior de São Paulo.
            </p>
          </div>

          <div className="grid gap-8 mt-4">
            {[
              { icon: <Verified className="w-7 h-7" />, text: "100% Carne Angus Certificada" },
              { icon: <Leaf className="w-7 h-7" />, text: "Vegetais Orgânicos e Selecionados" },
              { icon: <Croissant className="w-7 h-7" />, text: "Pães Artesanais Assados Diariamente" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 group">
                <div className="p-4 bg-white/5 text-primary rounded-2xl border border-white/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <span className="font-bold text-xl text-gray-200 group-hover:text-white transition-colors">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
