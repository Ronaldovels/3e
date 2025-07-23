import React from 'react';

// 'open' é uma função que será passada pelo Lightbox para abrir a imagem
export default function ImageWithCaption({ src, caption, open }) {
  return (
    <figure className="my-6">
      <img
        src={src}
        alt={caption || 'Imagem do post'}
        className="w-full h-auto rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
        onClick={open} // Abre o lightbox ao clicar
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}