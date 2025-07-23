import React from 'react';
import NavBar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import HistorySection from '../components/About/HistorySection.jsx';
import TeamSection from '../components/About/TeamSection.jsx';
import MissionVisionValues from '../components/About/MissionVisionValue.jsx';
import LocationSection from '../components/About/LocationSection.jsx';

export default function about() {
  return (
    <>
      <NavBar />
      <main>
        {/* Seção 1: Cabeçalho da página */}
        <div className="bg-white pt-16 pb-12 text-center">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[var(--navy-blue)]">
                Quem Somos
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Conheça a história, os valores e as pessoas que fazem da 3E Unicamp uma referência em projetos de engenharia.
            </p>
        </div>
        
        {/* Seção 2: História */}
        <HistorySection />

        {/* Seção 3: Missão, Visão e Valores */}
        <MissionVisionValues />

        {/* Seção 4: Onde Estamos */}
        <LocationSection />
        
        {/* Seção 5: Equipe */}
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}