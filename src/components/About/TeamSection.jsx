import React from 'react';
// Use fotos reais da equipe ou placeholders
import placeholder from '../../assets/f.jpg'; // Reutilizando sua foto como placeholder

const teamMembers = [
  { name: 'Nome do Presidente', role: 'Presidente', image: placeholder },
  { name: 'Nome do Diretor(a)', role: 'Diretor(a) de Projetos', image: placeholder },
  { name: 'Nome do Diretor(a)', role: 'Diretor(a) de Marketing', image: placeholder },
  { name: 'Nome do Gerente', role: 'Gerente de Projetos', image: placeholder },
  { name: 'Nome do Membro', role: 'Consultor(a) de Projetos', image: placeholder },
  { name: 'Nome do Membro', role: 'Consultor(a) de Projetos', image: placeholder },
];

export default function TeamSection() {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--navy-blue)] mb-12">
          Conheça Nossa Equipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300">
              <img
                src={member.image}
                alt={`Foto de ${member.name}`}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-[var(--royal-blue)]">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}