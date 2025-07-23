import { calculateReadTime } from '../utils/calculatedReadTime.js';

import casaInteligenteImg from '../assets/casa-inteligente.jpg';
import diagramaIotImg from '../assets/diagrama-iot.jpg';
import tensoesImg from '../assets/casa-inteligente.jpg';
import medidorEnergiaImg from '../assets/casa-inteligente.jpg';
import nvidiaLogoImg from '../assets/nvidia-logo.jpg';
import geforceImg from '../assets/casa-inteligente.jpg';
import cudaImg from '../assets/casa-inteligente.jpg';

const rawPosts = [
  // POST 1: Casa Inteligente com IoT
  {
    slug: 'casa-inteligente-com-iot',
    category: 'IoT',
    title: 'Como Realizamos o Sonho de uma Casa Inteligente com IoT',
    author: 'Equipe 3E Unicamp',
    date: '11 de Abril, 2024',
    mainImageUrl: casaInteligenteImg,
    excerpt: 'A automação residencial, antes um conceito de ficção científica, hoje é uma realidade acessível graças à Internet das Coisas (IoT).',
    stats: {
      views: 1342,
      likes: 95,
      comments: 18,
    },
    content: [
      {
        type: 'paragraph',
        text: 'A automação residencial, antes um conceito de ficção científica, hoje é uma realidade acessível graças à Internet das Coisas (IoT). Recentemente, a 3E Unicamp teve o prazer de transformar a residência de um cliente em uma verdadeira casa inteligente, e queremos compartilhar como esse processo funciona.'
      },
      {
        type: 'heading',
        text: 'O Desafio'
      },
      {
        type: 'paragraph',
        text: 'O principal desafio era integrar diversos dispositivos de diferentes marcas — lâmpadas, tomadas inteligentes, sensores de temperatura e câmeras de segurança — em um único sistema coeso e fácil de usar. O cliente desejava controlar tudo pelo smartphone e por comandos de voz, além de criar rotinas automatizadas, como "acender as luzes do jardim ao anoitecer".'
      },
      {
        type: 'heading',
        text: 'A Solução da 3E'
      },
      {
        type: 'paragraph',
        text: 'Nossa abordagem foi desenvolver um hub centralizador customizado. Em vez de depender de múltiplos aplicativos, criamos uma solução baseada em Home Assistant, uma poderosa plataforma open-source de automação.'
      },
      {
        type: 'image',
        src: diagramaIotImg,
        caption: 'Diagrama simplificado da arquitetura do sistema implementado.'
      },
      {
        type: 'paragraph',
        text: 'Utilizamos microcontroladores ESP32 para criar "pontes" de comunicação entre os dispositivos que não se falavam nativamente. Isso nos permitiu unificar o controle de todos os equipamentos sob a mesma interface, garantindo uma experiência de usuário fluida e intuitiva.'
      },
      {
        type: 'heading',
        text: 'Resultados'
      },
      {
        type: 'paragraph',
        text: 'Ao final do projeto, o cliente passou a ter controle total de sua casa na palma da mão. Rotinas como "Modo Cinema", que diminuem as luzes e fecham as cortinas com um único comando, tornaram-se parte do dia a dia, trazendo mais conforto, segurança e eficiência energética para o lar.'
      },
    ]
  }, {
    slug: 'sensores-inteligentes-eficiencia',
    category: 'IoT', // Mesma categoria do post acima
    title: 'Sensores Inteligentes: Os Olhos e Ouvidos da Eficiência',
    author: 'Equipe 3E Unicamp',
    date: '15 de Julho, 2025',
    mainImageUrl: medidorEnergiaImg, // Usando uma imagem placeholder existente
    excerpt: 'Muito além de acender luzes, os sensores de IoT são peças-chave na coleta de dados para otimização de recursos e segurança.',
    stats: {
      views: 450,
      likes: 35,
      comments: 8,
    },
    content: [
      {
        type: 'paragraph',
        text: 'Quando falamos em IoT, a automação de tarefas visíveis como acender luzes é apenas a ponta do iceberg. O verdadeiro poder reside na capacidade de coletar e analisar dados do ambiente em tempo real através de sensores inteligentes.'
      },
      {
        type: 'heading',
        text: 'Tipos Comuns e Suas Aplicações'
      },
      {
        type: 'paragraph',
        text: 'Sensores de presença podem otimizar o uso de ar-condicionado em salas vazias, sensores de umidade no solo podem automatizar a irrigação de jardins de forma precisa, e sensores de qualidade do ar podem garantir um ambiente mais saudável. Cada dado coletado é uma oportunidade para tomar decisões mais inteligentes e eficientes.'
      }
    ]
  },

  // POST 2: 110V ou 220V
  {
    slug: '110v-ou-220v-diferenca-tensao',
    category: 'Projetos Elétricos',
    title: '110V ou 220V? Por que diferentes regiões do Brasil adotam diferentes padrões de tensão?',
    author: 'Equipe 3E Unicamp',
    date: '26 de Março, 2024',
    mainImageUrl: tensoesImg,
    excerpt: 'Quem já viajou pelo Brasil ou precisou comprar um eletrodoméstico sabe que uma pergunta é crucial: a tomada é 110V ou 220V?',
    stats: {
      views: 2891,
      likes: 210,
      comments: 41,
    },
    content: [
      {
        type: 'paragraph',
        text: 'Quem já viajou pelo Brasil ou precisou comprar um eletrodoméstico sabe que uma pergunta é crucial: a tomada é 110V ou 220V? Essa dualidade, que confunde muitos brasileiros, tem raízes históricas e técnicas profundas. Vamos desvendar por que nosso país não adota um padrão único.'
      },
      {
        type: 'heading',
        text: 'A Origem da Diferença'
      },
      {
        type: 'paragraph',
        text: 'No início do século XX, a eletrificação do Brasil foi feita por diferentes companhias, a maioria de origem estrangeira. Empresas canadenses e americanas, como a Light, implementaram a tensão de 110V (padrão em seus países) em regiões como Rio de Janeiro e São Paulo. Já companhias de origem europeia trouxeram o padrão 220V para outras áreas. Com o tempo, essa infraestrutura inicial se consolidou, criando a “colcha de retalhos” elétrica que temos hoje.'
      },
      {
        type: 'heading',
        text: 'Vantagens e Desvantagens'
      },
      {
        type: 'paragraph',
        text: '110V: É considerada mais segura em caso de choque elétrico, pois a corrente que percorre o corpo humano tende a ser menor. A desvantagem é que, para uma mesma potência, exige o dobro da corrente, o que demanda fios mais grossos e resulta em maiores perdas de energia na fiação.'
      },
      {
        type: 'paragraph',
        text: '220V: Por exigir menos corrente para a mesma potência, permite o uso de fios mais finos, o que barateia a instalação elétrica. É mais eficiente em termos de transmissão. A desvantagem é o maior risco em caso de choque.'
      },
      {
        type: 'image',
        src: medidorEnergiaImg,
        caption: 'O consumo de um aparelho é medido em kWh e não depende diretamente da tensão.'
      },
      {
        type: 'heading',
        text: 'Mito: 220V gasta menos energia?'
      },
      {
        type: 'paragraph',
        text: 'Não! Um aparelho com a mesma potência (medida em Watts) consumirá a mesma quantidade de energia, independentemente de ser 110V ou 220V. A conta de luz não virá mais barata só pela mudança de tensão. A eficiência do 220V está na instalação e na transmissão, não no consumo do aparelho em si.'
      },
    ]
  },

  // POST 3: NVIDIA
  {
    slug: 'nvidia-empresa-mais-valiosa',
    category: 'Hardware',
    title: 'Do Silício ao Topo: Como o Poder do Hardware Levou a NVIDIA a se Tornar a Empresa Mais Valiosa do Mundo',
    author: 'Equipe 3E Unicamp',
    date: '20 de Junho, 2024',
    mainImageUrl: nvidiaLogoImg,
    excerpt: 'Em junho de 2024, um feito histórico sacudiu o mercado de tecnologia: a NVIDIA ultrapassou gigantes como Microsoft e Apple.',
    stats: {
      views: 5820,
      likes: 512,
      comments: 76,
    },
    content: [
      {
        type: 'paragraph',
        text: 'Em junho de 2024, um feito histórico sacudiu o mercado de tecnologia: a NVIDIA ultrapassou gigantes como Microsoft e Apple, tornando-se a empresa de capital aberto mais valiosa do mundo. Mas como uma companhia conhecida por suas placas de vídeo para games alcançou esse patamar? A resposta está na visão estratégica e em uma revolução silenciosa chamada computação paralela.'
      },
      {
        type: 'heading',
        text: 'Os Primeiros Passos: Dominando os Gráficos'
      },
      {
        type: 'paragraph',
        text: 'Fundada em 1993, a NVIDIA se consolidou no mercado de PCs ao criar Unidades de Processamento Gráfico (GPUs) cada vez mais poderosas. A linha GeForce se tornou sinônimo de performance para gamers, capazes de renderizar mundos virtuais complexos em tempo real. Por muitos anos, esse foi seu principal negócio.'
      },
      {
        type: 'image',
        src: geforceImg,
        caption: 'A linha GeForce foi fundamental para popularizar a NVIDIA entre os gamers.'
      },
      {
        type: 'heading',
        text: 'A Virada de Jogo: CUDA e a Computação Paralela'
      },
      {
        type: 'paragraph',
        text: 'A grande virada ocorreu em 2006 com o lançamento do CUDA (Compute Unified Device Architecture). A NVIDIA percebeu que a arquitetura de suas GPUs, projetada para processar thousands de pixels simultaneamente (em paralelo), poderia ser usada para muito mais do que apenas jogos. O CUDA permitiu que desenvolvedores utilizassem o poder massivo de processamento paralelo das GPUs para tarefas científicas e de computação de alta performance.'
      },
      {
        type: 'image',
        src: cudaImg,
        caption: 'A arquitetura CUDA abriu as portas das GPUs para o processamento de dados em massa.'
      },
      {
        type: 'heading',
        text: 'A Explosão da Inteligência Artificial'
      },
      {
        type: 'paragraph',
        text: 'Essa capacidade de processamento paralelo era exatamente o que os modelos de Inteligência Artificial precisavam. Treinar redes neurais envolve cálculos matemáticos massivos e repetitivos, uma tarefa perfeita para as GPUs. Enquanto outras empresas focavam em CPUs, a NVIDIA já tinha o hardware ideal para a revolução da IA. Hoje, seus chips são a espinha dorsal dos data centers que treinam e executam os modelos de IA mais avançados do mundo, da OpenAI à Meta.'
      },
    ]
  },
];


export const mockPosts = rawPosts.map(post => {
  return {
    ...post,
    readTimeInMinutes: calculateReadTime(post.content),
  };
});