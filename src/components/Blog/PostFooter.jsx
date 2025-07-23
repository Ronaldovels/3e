import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaLink, FaEye, FaThumbsUp, FaComment, FaInstagram } from 'react-icons/fa';

export default function PostFooter({ postUrl, stats }) {
  const copyLink = () => {
    navigator.clipboard.writeText(postUrl)
      .then(() => alert('Link copiado para a área de transferência!'))
      .catch(err => console.error('Erro ao copiar link: ', err));
  };

  return (
    <div className="mt-12 border-t pt-6">
      {/* Botões de compartilhamento */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <a href={`https://www.facebook.com/jr3eunicamp/`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><FaFacebook size={24} /></a>
        <a href={`https://www.instagram.com/3e.unicamp/`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400"><FaInstagram size={24} /></a>
        <a href={`https://www.linkedin.com/company/3e-unicamp/`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700"><FaLinkedin size={24} /></a>
        <button onClick={copyLink} className="text-gray-500 hover:text-gray-900"><FaLink size={24} /></button>
      </div>
      
      {/* Estatísticas */}
      <div className="flex justify-center items-center gap-8 text-gray-500 text-sm">
        <div className="flex items-center gap-2"><FaEye /> <span>{stats.views}</span></div>
        <div className="flex items-center gap-2"><FaThumbsUp /> <span>{stats.likes}</span></div>
        <div className="flex items-center gap-2"><FaComment /> <span>{stats.comments}</span></div>
      </div>
    </div>
  );
}