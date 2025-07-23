import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram, FaLinkedin } from 'react-icons/fa';

const corIcone = "#091c6b";

export default function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg h-full">
      <h3 className="text-2xl font-bold text-[var(--navy-blue)] mb-6">Informações de Contato</h3>
      <div className="space-y-4 text-gray-700">
        <a href="https://www.google.com/maps?client=opera-gx&hs=22z&sca_esv=edec2e4b4572a4c0&output=search&q=R.+Josué+de+Castro,+123+-+Cidade+Universitária,+Campinas+-+SP,+13083-861&source=lnms&fbs=ABzOT_BYhiZpMrUAF0c9tORwPGlssxTeO7BMOlalbdyQXag72r1qnNd-MghSp-MLF7ZupKLNJpA1I8VZ0HfUeA-4UgdX-97nDf7oc7TtZEVlTkuMpD2c3ypTiXj-VdV8V1i81GToPWFJj16s_daCO8XAB8WhxVoKtlC84nPvJRz2PVQ0NiGclmRPxu70wVG1PsEVa9qmnOofHkcQ37xRKFhWG2YDw03wzg&entry=mc&ved=1t:200715&ictx=111" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:text-[var(--royal-blue)]">
          <FaMapMarkerAlt size={20} color={corIcone} className="mt-1" />
          <span>R. Josué de Castro, 123 - Cidade Universitária, Campinas - SP, 13083-861</span>
        </a>
        <a href="mailto:contato@3eunicamp.com" className="flex items-center gap-4 hover:text-[var(--royal-blue)]">
          <FaEnvelope size={20} color={corIcone} />
          <span>contato@3eunicamp.com</span>
        </a>
        <a href="https://wa.me/message/AN7CBTXY3WWXO1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[var(--royal-blue)]">
          <FaPhone size={20} color={corIcone} />
          <span>(19) 3521-3843</span>
        </a>
      </div>
      <div className="mt-8 pt-6 border-t">
        <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-4">Redes Sociais</h3>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/3e.unicamp/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--royal-blue)]">
            <FaInstagram size={28} />
          </a>
          <a href="https://www.linkedin.com/company/3e-unicamp/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--royal-blue)]">
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}