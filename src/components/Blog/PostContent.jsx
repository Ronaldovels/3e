import React from 'react';
import ImageWithCaption from './ImageWithCaption.jsx';

// 'setLightboxIndex' é a função que diz ao lightbox qual imagem abrir
export default function PostContent({ content, setLightboxIndex }) {
  let imageCounter = 0; // Para rastrear o índice das imagens para o lightbox

  return (
    <div className="prose lg:prose-xl max-w-none text-gray-800">
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return <p key={index}>{block.text}</p>;
          case 'heading':
            return <h2 key={index} className="text-2xl font-bold my-4 text-[var(--navy-blue)]">{block.text}</h2>;
          case 'image':
            const currentImageIndex = imageCounter;
            imageCounter++;
            return (
              <ImageWithCaption
                key={index}
                src={block.src}
                caption={block.caption}
                open={() => setLightboxIndex(currentImageIndex)}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}