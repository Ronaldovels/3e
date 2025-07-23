import React from 'react';
import { mockPosts } from '../../data/post.js';
import BlogPostCard from './BlogPostCard'; 

export default function RelatedPosts({ currentPostSlug, category }) {
  const related = mockPosts.filter(
    post => post.category === category && post.slug !== currentPostSlug
  ).slice(0, 2); 

  if (related.length === 0) return null;

  return (
    <section className="mt-20 border-t pt-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-[var(--navy-blue)]">Posts Relacionados</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {related.map(post => (
          <BlogPostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            mainImageUrl={post.mainImageUrl}
            stats={post.stats}              // <-- A PROP QUE FALTAVA
          />
        ))}
      </div>
    </section>
  );
}