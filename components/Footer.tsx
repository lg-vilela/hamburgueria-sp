
import React from 'react';
import { Beef as BurgerIcon, Instagram, Facebook, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-md border-t border-white/5 pt-24 pb-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <BurgerIcon className="text-primary" size={36} />
              <span className="text-3xl font-black text-white">Brasa Nobre</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Servindo os melhores hambúrgueres em São Paulo desde 2018. Venha sentir a diferença de um blend real com alma paulistana.
            </p>
            <div className="flex gap-5">
              <a href="#" className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-primary hover:text-white transition-all text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-primary hover:text-white transition-all text-gray-300">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black text-white mb-10 uppercase tracking-widest">Cardápio</h4>
            <ul className="flex flex-col gap-5 text-gray-400 text-lg">
              {['Hambúrgueres', 'Acompanhamentos', 'Bebidas Artesanais', 'Combos Gourmet'].map(item => (
                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black text-white mb-10 uppercase tracking-widest">Links</h4>
            <ul className="flex flex-col gap-5 text-gray-400 text-lg">
              {['Nossa História', 'Trabalhe Conosco', 'Privacidade', 'Termos de Uso'].map(item => (
                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-black text-white uppercase tracking-widest">Clube SP</h4>
            <p className="text-gray-400 text-lg">
              Receba convites para eventos exclusivos e novos lançamentos no seu e-mail.
            </p>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-6 py-4 rounded-full border border-white/10 bg-white/5 text-white focus:outline-primary outline-none transition-all placeholder:text-gray-600"
              />
              <button className="w-full py-4 bg-primary text-white font-black rounded-full flex items-center justify-center gap-3 hover:bg-red-700 transition-all shadow-xl shadow-primary/20">
                Inscrever <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8 text-gray-500 font-medium text-sm">
          <p className="order-2 lg:order-1 text-center lg:text-left">© 2024 Brasa Nobre. Todos os direitos reservados.</p>

          <div className="flex flex-col sm:flex-row items-center gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-2">
              <span>Feito com paixão em São Paulo</span>
              <span className="text-lg">🇧🇷</span>
            </div>

            <div className="h-8 w-px bg-white/10 hidden sm:block"></div>

            <div className="flex items-center gap-5 grayscale hover:grayscale-0 transition-all opacity-90 hover:opacity-100 group">
              <span className="text-[11px] uppercase tracking-[0.2em] font-extrabold opacity-50 group-hover:opacity-100 transition-opacity">Developed by</span>
              <img
                src="https://i.postimg.cc/dQyCY8HG/selo-dev-1-removebg-preview.png"
                alt="Vilela CodeLab"
                className="h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
