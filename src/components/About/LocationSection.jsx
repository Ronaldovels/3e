import React from 'react';
// TODO: Substituir pela imagem do campus da Unicamp ou da FEEC
import unicampImg from '../../assets/f2.jpg';

export default function LocationSection() {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Coluna de Texto */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--navy-blue)] mb-6">
            Onde estamos?
          </h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              Em 2024, a <strong>Unicamp</strong> foi classificada como a <strong>segunda melhor universidade da América Latina</strong>, segundo o <a href="#" className="text-[var(--royal-blue)] font-semibold hover:underline">Times Higher Education (THE)</a>. Esse DNA é compartilhado com a 3E! Temos acesso a uma grande gama de laboratórios de pesquisa modernos, renomados professores e um ambiente que favorece o desenvolvimento tecnológico, a inovação científica e o empreendedorismo.
            </p>
            <p>
              A <strong>Faculdade de Engenharia Elétrica e de Computação (FEEC)</strong>, nosso querido instituto, nos oferece o <strong>melhor curso de Engenharia Elétrica do Brasil</strong> segundo o <a href="#" className="text-[var(--royal-blue)] font-semibold hover:underline">RUF</a>, e conta hoje com pesquisas nos mais diferentes ramos da Engenharia Elétrica, nos fornecendo orientação e capacitação para desenvolver as melhores e mais impactantes soluções.
            </p>
          </div>
        </div>
        
        {/* Coluna da Imagem */}
        <div className="mt-8 lg:mt-0">
          <img 
            src={unicampImg} 
            alt="Campus da Unicamp" 
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}