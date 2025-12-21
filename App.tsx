
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AICustomizer from './components/AICustomizer';
import AboutSection from './components/AboutSection';
import SocialSection from './components/SocialSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <AICustomizer />
        <MenuSection />
        <AboutSection />
        <SocialSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
