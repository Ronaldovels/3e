import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/home.jsx'; 
import Sobre from './pages/about.jsx';
import Contato from './pages/contact.jsx';
import Blog from './pages/blog.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx'; 
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Home />} />

        {/* Rotas para as outras páginas */}
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />

        {/* Rota para a lista de posts do blog */}
        <Route path="/blog" element={<Blog />} />

        {/* A ROTA MÁGICA: A página de um post específico */}
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;