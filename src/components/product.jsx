import { useState } from "react";
import {
  FaCamera,       // câmera
  FaWifi,         // wifi
  FaMicrochip,    // circuito
  FaLightbulb,    // lâmpada
  FaCog           // engrenagem
} from "react-icons/fa";

export default function Product() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  const corIcone = "#091c6b";

  const servicos = [
    {
      titulo: "Sistemas de Monitoramento",
      icone: <FaCamera size={40} color={corIcone} />,
      conteudo: (
        <>
          <p className="mb-2">
            Os Sistemas de Monitoramento são projetados para ambientes industriais, de segurança, ambientais, etc., oferecendo dados para decisões em tempo real.
          </p>
          <ul className="list-disc pl-5 text-sm text-justify">
            <li>Coleta de dados por sensores e dispositivos eletrônicos.</li>
            <li>Monitoram variáveis como temperatura, umidade e pressão.</li>
            <li>Informações essenciais para decisões rápidas.</li>
          </ul>
        </>
      ),
    },
    {
      titulo: "Internet das Coisas (IoT)",
      icone: <FaWifi size={40} color={corIcone} />,
      conteudo: (
        <p>
          A IoT conecta dispositivos à internet, permitindo controle remoto e troca de dados. Pode ser aplicada em sistemas novos ou existentes, trazendo automação e análise de dados em tempo real.
        </p>
      ),
    },
    {
      titulo: "Dispositivos Eletrônicos",
      icone: <FaMicrochip size={40} color={corIcone} />,
      conteudo: (
        <p>
          Desenvolvimento de sistemas embarcados, como wearables ou controladores industriais, incluindo projeto, prototipagem e implementação.
        </p>
      ),
    },
    {
      titulo: "Projetos Fotovoltaicos",
      icone: <FaLightbulb size={40} color={corIcone} />,
      conteudo: (
        <p>
          Soluções para integrar placas solares em residências ou empresas, com projetos detalhados e instalação completa, focando na eficiência energética.
        </p>
      ),
    },
    {
      titulo: "Eficiência de Maquinário Aprimorada",
      icone: <FaCog size={40} color={corIcone} />,
      conteudo: (
        <p>
          Integra sensores e inteligência para melhorar o desempenho e manutenção de máquinas industriais.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full h-full lg:min-h-[700px] flex flex-wrap justify-center gap-6 p-6 mb-10 bg-white"> 
    <h1 className="text-5xl lg:text-7xl w-full font-extrabold text-center text-[var(--navy-blue)]">NOSSOS SERVIÇOS</h1>
      {servicos.map((servico, index) => (
        <div
          key={index}
          className="grid grid-rows-3 w-[300px] h-[300px] rounded overflow-hidden shadow-lg bg-white"
        >
          <div className="bg-white flex items-center justify-center border-2 border-b-0 border-[var(--navy-blue)] rounded-t-xl">
            {servico.icone}
          </div>
          <div className="bg-[var(--royal-blue)] row-span-2 flex flex-col items-center justify-center text-white px-4 py-6 gap-4 rounded-b-xl">
            <h1 className="text-center font-bold text-xl">{servico.titulo}</h1>
            <button
              onClick={() => {
                setServicoSelecionado(servico);
                setIsOpen(true);
              }}
              className="px-4 py-2 bg-white text-[var(--royal-blue)] font-bold rounded hover:bg-gray-100 transition"
            >
              Ver mais
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      {isOpen && servicoSelecionado && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full text-black">
            <h2 className="text-2xl font-bold mb-4">{servicoSelecionado.titulo}</h2>
            <div className="text-sm">{servicoSelecionado.conteudo}</div>
            <div className="mt-6 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-[var(--royal-blue)] text-white rounded hover:bg-blue-700 transition"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
     


    </div>
  );
}
