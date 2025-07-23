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
    <a
        href="https://wa.me/message/AN7CBTXY3WWXO1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg z-50 duration-300 ease-in-out"
      >
        <span className="sr-only">Fale conosco no WhatsApp</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M20.52 3.48A11.79 11.79 0 0 0 2.18 17.63L1 22.5l4.97-1.31A11.77 11.77 0 0 0 12 23a11.86 11.86 0 0 0 8.38-20.38zM12 21a9.77 9.77 0 0 1-5-1.35l-.36-.21-2.95.78.79-2.88-.23-.37A9.78 9.78 0 1 1 12 21zm5.48-7.35c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15-.77.96-.95 1.16-.35.22-.64.07a7.9 7.9 0 0 1-2.34-1.44 8.68 8.68 0 0 1-1.61-2c-.17-.29 0-.45.13-.6s.3-.35.45-.52a2 2 0 0 0 .3-.5.55.55 0 0 0 0-.52c-.07-.15-.67-1.62-.91-2.21s-.48-.5-.67-.51h-.57a1.1 1.1 0 0 0-.79.37 3.3 3.3 0 0 0-1 2.44 5.71 5.71 0 0 0 1.2 2.95A13.09 13.09 0 0 0 13.3 17a4.6 4.6 0 0 0 2.69.87A2.77 2.77 0 0 0 18 17a2.28 2.28 0 0 0 .49-1.35c0-.18-.14-.27-.3-.35z" />
        </svg>
      </a>
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