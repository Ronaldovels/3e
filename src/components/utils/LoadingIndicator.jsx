import React from 'react';

import Logo3E from '../../assets/3Ev1.svg'; 

export default function LoadingIndicator() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <div className="text-center">
        
        <img 
          src={Logo3E} 
          alt="Logo da 3E Unicamp" 
          className="h-24 w-24 mx-auto animate-pulse"
        />
        <p className="mt-4 text-lg font-semibold text-[var(--navy-blue)]">
          Carregando...
        </p>
      </div>
    </div>
  );
}