import React from 'react';
import NavBar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import BlogPostCard from '../components/Blog/BlogPostCard.jsx';
import { mockPosts } from '../data/post.js';

export default function Blog() {
  return (
    <>
      <NavBar />
      <main className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[var(--navy-blue)]">Nosso Blog</h1>
          <p className="text-lg text-gray-600 mt-4">Artigos, notícias e insights sobre o mundo da engenharia elétrica e inovação.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <BlogPostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              mainImageUrl={post.mainImageUrl} // <-- Passando a prop correta
              stats={post.stats}              // <-- Passando as estatísticas
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}