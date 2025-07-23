import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/utils/ScrollToTop';
import LoadingIndicator from './components/utils/LoadingIndicator';


const Home = React.lazy(() => import('./pages/home'));
const Sobre = React.lazy(() => import('./pages/about'));
const Contato = React.lazy(() => import('./pages/contact'));
const Blog = React.lazy(() => import('./pages/blog'));
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={<LoadingIndicator />}>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;