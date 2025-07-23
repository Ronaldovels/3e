import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaThumbsUp, FaComment } from 'react-icons/fa'; // Importando ícones

// O componente agora recebe 'mainImageUrl' e 'stats' como props
export default function BlogPostCard({ title, excerpt, mainImageUrl, slug, stats }) {
  return (
    <Link to={`/blog/${slug}`} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group h-full">
      {/* Imagem do Card */}
      <div className="h-48 overflow-hidden">
        {/* CORREÇÃO: Usando mainImageUrl */}
        <img src={mainImageUrl} alt={`Imagem para ${title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed flex-grow">{excerpt}</p>
        
        {/* NOVO: Seção de Estatísticas */}
        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center text-gray-500 text-xs">
          <div className="flex items-center gap-1"><FaThumbsUp /> <span>{stats.likes}</span></div>
          <div className="flex items-center gap-1"><FaComment /> <span>{stats.comments}</span></div>
          <div className="flex items-center gap-1"><FaEye /> <span>{stats.views}</span></div>
        </div>
      </div>
    </Link>
  );
}