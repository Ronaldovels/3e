import React from 'react';
import { FaBullseye, FaEye, FaGem } from 'react-icons/fa';

const Card = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="text-[var(--royal-blue)] inline-block p-4 bg-gray-100 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-[var(--navy-blue)] mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

export default function MissionVisionValues() {
  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card icon={<FaBullseye size={32} />} title="Missão">
          Encantar clientes prototipando seus sonhos de forma inovadora e personalizada.
        </Card>
        <Card icon={<FaEye size={32} />} title="Visão">
          Ser uma empresa sustentável até 2027.
        </Card>
        <Card icon={<FaGem size={32} />} title="Valores">
          Ser família, transparência, comprometimento, autonomia e inconformismo.
        </Card>
      </div>
    </div>
  );
}