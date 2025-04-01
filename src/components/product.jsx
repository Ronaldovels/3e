



export default function product() {

    return (
        <div className="flex flex-col items-center border md:h-[600px] pt-10">
            <h1 className="text-4xl font-bold text pb-10">NOSSOS SERVIÇOS</h1>

            <div className="flex flex-col gap-10  md:flex-row">
                <div className="flex flex-col items-center gap-10 card ">
                    <h1 className="text-blue-900 font-bold text-2xl pt-5">Sistemas de Monitoramento</h1>
                    <p className="text-center"> Os Sistemas de Monitoramento são projetados para coletar dados a partir de sensores e dispositivos eletrônicos, permitindo o acompanhamento em tempo real de variáveis como temperatura, umidade, pressão, entre outros. Esses sistemas podem ser aplicados em ambientes industriais, de segurança, ambientais, entre outros proporcionando informações vitais para tomadas de decisão.</p>
                </div>
                <div className="card">
                    <h1>Dispositivos eletrônicos</h1>
                    <p>O Desenvolvimento de Dispositivos Eletrônicos abrange a criação de sistemas embarcados, que são combinações de hardware e software incorporados em produtos.Estes podem ser desde dispositivos vestíveis, como smartwatches, até sistemas de controle industrial, como controladores de máquinas e equipamentos, envolvendo o projeto, prototipagem e implementação de soluções eletrônicas.</p>
                </div>
                <div className="card">

                <h1>Melhora de Eficiência de Maquinário</h1>
                <p>A Melhora de Eficiência de Maquinário envolve a aplicação de sistemas embarcados para otimizar o desempenho, produtividade e a qualidade de equipamentos industriais.Através da integração de sensores, atuadores e algoritmos inteligentes, é possível monitorar o funcionamento das máquinas, identificar padrões de uso e realizar ajustes.</p>

                </div>
            </div>

        </div>
    )

}