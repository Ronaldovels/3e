import { useState } from "react";
import Foto from '../assets/f.jpg'

export default function AccordionSimples() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const servicos = [
        {
            titulo: "Sistemas de Monitoramento",
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
            conteudo: (
                <p>
                    A IoT conecta dispositivos à internet, permitindo controle remoto e troca de dados. Pode ser aplicada em sistemas novos ou existentes, trazendo automação e análise de dados em tempo real.
                </p>
            ),
        },
        {
            titulo: "Dispositivos Eletrônicos",
            conteudo: (
                <p>
                    Desenvolvimento de sistemas embarcados, como wearables ou controladores industriais, incluindo projeto, prototipagem e implementação.
                </p>
            ),
        },
        {
            titulo: "Projetos Fotovoltaicos",
            conteudo: (
                <p>
                    Soluções para integrar placas solares em residências ou empresas, com projetos detalhados e instalação completa, focando na eficiência energética.
                </p>
            ),
        },
        {
            titulo: "Eficiência de Maquinário Aprimorada",
            conteudo: (
                <p>
                    Integra sensores e inteligência para melhorar o desempenho e manutenção de máquinas industriais.
                </p>
            ),
        },
    ];

    return (
        <div className="w-[100%] h-full lg:h-[980px] grid grid-cols-3 mb-6 lg:mb-0">

            <div className="col-span-3 lg:col-span-1 w-full p-6 ">
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-center pb-10 text-[var(--navy-blue)]">NOSSOS SERVIÇOS</h1>
                    <div className="flex flex-col gap-4 2xl:gap-15 lg:gap-15">
                        {servicos.map((servico, index) => (
                            <div key={index} className="border border-gray-300 rounded overflow-hidden transition-all duration-300">
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-4 py-3 bg-blue-100 hover:bg-blue-200 text-left font-bold text-blue-900 text-lg flex justify-between items-center "
                                >
                                    {servico.titulo}
                                    <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
                                </button>
                                <div
                                    className={`transition-all duration-300 px-4 overflow-hidden ${activeIndex === index ? "max-h-[1000px] py-4" : "max-h-0"
                                        }`}
                                >
                                    <div className="text-sm text-gray-700">{servico.conteudo}</div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="col-span-2 h-full w-full hidden lg:block">
                <img src={Foto} alt="" className="h-full w-full object-cover" />
            </div>
        </div>
    );
}