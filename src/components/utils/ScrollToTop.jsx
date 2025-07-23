import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // Extrai o 'pathname' (ex: "/blog/post-slug") do objeto de localização atual
  const { pathname } = useLocation();

  // Este efeito será executado toda vez que o 'pathname' mudar
  useEffect(() => {
    // Rola a janela para as coordenadas (0, 0) - o topo da página
    window.scrollTo(0, 0);
  }, [pathname]); // O array de dependências garante que o efeito só rode na mudança de URL

  // Este componente não renderiza nada na tela
  return null;
}