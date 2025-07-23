const PALAVRAS_POR_MINUTO = 225;

/**
 * Calcula o tempo de leitura estimado de um post.
 * @param {Array} contentArray - O array de conteúdo do post.
 * @returns {number} - O tempo de leitura em minutos.
 */
export function calculateReadTime(contentArray) {
  if (!contentArray) return 0;

  // Filtra apenas os blocos de texto (parágrafos e títulos) e junta tudo.
  const textoCompleto = contentArray
    .filter(block => block.type === 'paragraph' || block.type === 'heading')
    .map(block => block.text)
    .join(' ');

  // Remove espaços extras e conta as palavras.
  const numeroDePalavras = textoCompleto.trim().split(/\s+/).length;

  // Calcula e arredonda os minutos para cima.
  const minutos = Math.ceil(numeroDePalavras / PALAVRAS_POR_MINUTO);
  
  return minutos;
}