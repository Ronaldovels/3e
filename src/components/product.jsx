



export default function product() {

    return (
        <div className="flex flex-col max-w-full items-center justify-evenly h-full p-10 lg:flex lg:flex-col lg:items-stretch">
            <h1 className="text-5xl font-extrabold text-center pb-10 text-black">NOSSOS SERVIÇOS</h1>

            <div className="flex flex-col gap-10 w-full lg:flex-row lg:flex-wrap lg:justify-center">
                <button className="card w-full lg:w-5/12">
                    <h1 className="text-center text-blue-900 font-bold text-2xl">Sistemas de Monitoramento</h1>
                    <p className="text-center lg:text-sm font-semibold">
                        Os Sistemas de Monitoramento são projetados para serem aplicados em ambientes industriais, de segurança, ambientais, entre outros proporcionando informações vitais para tomadas de decisão
                    </p>
                    <ul className="flex flex-col items-center max-w-full lg:w-auto">
                        <li className="list-disc text-justify lg:text-sm">Coleta de dados por sensores e dispositivos eletrônicos.</li>
                        <li className="list-disc text-justify lg:text-sm">Monitoram variáveis como temperatura, umidade e pressão.</li>
                        <li className="list-disc text-justify lg:text-sm">Oferecem informações essenciais para decisões em tempo real.</li>
                    </ul>
                </button>

                <div className="card w-full lg:w-5/12">
                    <h1 className="text-center text-blue-900 font-bold text-2xl">Internet das Coisas (IOT)
                    </h1>
                    <p className="text-center lg:text-sm font-semibold">
                        A Internet das Coisas (IoT) refere-se à interconexão de dispositivos através da internet, permitindo a troca de dados e o controle remoto.

                        Essa solução pode ser aplicada a dispositivos já existentes ou incorporada em seu projeto, com o objetivo de oferecer funcionalidades inteligentes ao sistema, como monitoramento remoto, para automação e análise de dados em tempo real.

                        Esse tipo de automação permite que erros no sistema sejam identificados de forma mais eficaz, diminuindo prejuízos.
                    </p>
                </div>

                <div className="card w-full lg:w-5/12">
                    <h1 className="text-center text-blue-900 font-bold text-2xl">Dispositivos eletrônicos</h1>
                    <p className="text-center lg:text-sm font-semibold">
                        O Desenvolvimento de Dispositivos Eletrônicos abrange a criação de sistemas embarcados, que são combinações de hardware e software incorporados em produtos.Estes podem ser desde dispositivos vestíveis, como smartwatches, até sistemas de controle industrial, como controladores de máquinas e equipamentos, envolvendo o projeto, prototipagem e implementação de soluções eletrônicas.
                    </p>
                </div>

                <div className="card w-full lg:w-5/12">
                    <h1 className="text-center text-blue-900 font-bold text-2xl">Projetos Fotovoltaicos</h1>
                    <p className="text-center lg:text-sm font-semibold">
                        O desenvolvimento de Soluções Fotovoltaicas compreende a elaboração de projetos para a integração de placas fotovoltaicas em residências e empresas, proporcionando soluções customizadas para atender às necessidades específicas de cada cliente.
                        Nossa abordagem envolve a criação de esquemáticos detalhados e a implementação de sistemas eficientes, visando maximizar a geração de energia solar.
                        Nosso processo abrange desde a concepção do projeto até a instalação prática das placas, assegurando uma transição suave para uma fonte de energia limpa e sustentável.
                    </p>
                </div>

                <div className="card w-full lg:w-5/12">
                    <h1 className="text-center text-blue-900 font-bold text-2xl">Eficiência de Maquinário Aprimorada</h1>
                    <p className="text-center lg:text-sm font-semibold">
                        A Melhora de Eficiência de Maquinário envolve a aplicação de sistemas embarcados para otimizar o desempenho, produtividade e a qualidade de equipamentos industriais.Através da integração de sensores, atuadores e algoritmos inteligentes, é possível monitorar o funcionamento das máquinas, identificar padrões de uso e realizar ajustes.
                    </p>
                </div>
            </div>
        </div>
    )

}