import React from 'react';

export default function HistorySection() {
  return (
    <div className="py-16 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--navy-blue)] mb-6">
          Nossa História
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Fundada em 1990, a 3E Unicamp é a primeira empresa júnior de Engenharia Elétrica do Brasil. Ao longo de mais de 30 anos, acumulamos uma vasta experiência, combinando a excelência acadêmica da UNICAMP com uma mentalidade inovadora para entregar soluções de alto impacto.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Nossa missão é transformar ideias em realidade através de projetos eletrônicos personalizados, ao mesmo tempo que contribuímos para a formação de engenheiros mais capacitados e preparados para os desafios do mercado.
        </p>
      </div>
    </div>
  );
}