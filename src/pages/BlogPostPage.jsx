import React, { useState } from 'react';
import { useParams, Link  } from 'react-router-dom';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaArrowLeft } from 'react-icons/fa'

// Importando nossos dados e componentes
import { mockPosts } from '../data/post.js';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import PostContent from '../components/Blog/PostContent.jsx';
import PostFooter from '../components/Blog/PostFooter.jsx';
import RelatedPosts from '../components/Blog/RelatedPost.jsx';
import CommentsSection from '../components/Blog/CommentsSection.jsx';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = mockPosts.find((p) => p.slug === slug);
  
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  if (!post) {
    return (
      <>
        <NavBar />
        <div className="text-center py-20"><h1 className="text-3xl font-bold">Post não encontrado!</h1></div>
        <Footer />
      </>
    );
  }

  const lightboxImages = post.content
    .filter(block => block.type === 'image')
    .map(block => ({ src: block.src }));

  return (
    <>
      <NavBar />
      <main className="py-12 md:py-20 px-6 bg-white">
        <article className="max-w-3xl mx-auto">

          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-[var(--royal-blue)] hover:underline font-semibold">
              <FaArrowLeft />
              Voltar para o Blog
            </Link>
          </div>



          <header className="mb-8 text-center">
            <p className="text-sm font-semibold text-[var(--royal-blue)] uppercase">{post.category}</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--navy-blue)] my-3">{post.title}</h1>
            <div className="text-gray-500 text-sm">
              <span>Por {post.author}</span> | <span>{post.date}</span> | <span>{post.readTimeInMinutes} min de leitura</span>
            </div>
          </header>
          
          {/* Conteúdo do Post */}
          <PostContent content={post.content} setLightboxIndex={setLightboxIndex} />
          
          {/* Rodapé do Post */}
          <PostFooter postUrl={window.location.href} stats={post.stats} />
        </article>

        {/* Seção de Posts Relacionados */}
        <RelatedPosts currentPostSlug={post.slug} category={post.category} />
        
        {/* Seção de Comentários */}
        <CommentsSection />
      </main>

      {/* Provedor do Lightbox */}
      <Lightbox
        open={lightboxIndex > -1}
        close={() => setLightboxIndex(-1)}
        slides={lightboxImages}
        index={lightboxIndex}
      />
      
      <Footer />
    </>
  );
}