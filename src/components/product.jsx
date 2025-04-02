



export default function product() {

    return (
        <div className="flex flex-col items-center h-[100%] md:h-[600px] p-10  bg-[linear-gradient(to_bottom,#1A5F99_-50%,#011C6B_150%)]">
            <h1 className="text-5xl font-extrabold text-center pb-10 text-white">NOSSOS SERVIÇOS</h1>

            <div className="flex flex-col gap-10  md:flex-row">
                <button className="card ">
                    <h1 className="text-blue-900 font-bold text-2xl pt-5">Sistemas de Monitoramento</h1>
                    <p className=""> Os Sistemas de Monitoramento são projetados para serem aplicados em ambientes industriais, de segurança, ambientais, entre outros proporcionando informações vitais para tomadas de decisão
                    </p>
                    <ul className="flex flex-col items-center w-100">
                        <li className="list-disc text-justify ">Coleta de dados por sensores e dispositivos eletrônicos.</li>
                        <li className="list-disc text-justify">Monitoram variáveis como temperatura, umidade e pressão.</li>
                        <li className="list-disc text-justify"> Oferecem informações essenciais para decisões em tempo real.</li>
                    </ul>
                </button>
                <div className="card ">
                    <h1 className="text-blue-900 font-bold text-2xl pt-5">Dispositivos eletrônicos</h1>
                    <p>O Desenvolvimento de Dispositivos Eletrônicos abrange a criação de sistemas embarcados, que são combinações de hardware e software incorporados em produtos.Estes podem ser desde dispositivos vestíveis, como smartwatches, até sistemas de controle industrial, como controladores de máquinas e equipamentos, envolvendo o projeto, prototipagem e implementação de soluções eletrônicas.</p>
                </div>
                <div className="card">

                <h1 className="text-blue-900 font-bold text-2xl pt-5">Melhora de Eficiência de Maquinário</h1>
                <p>A Melhora de Eficiência de Maquinário envolve a aplicação de sistemas embarcados para otimizar o desempenho, produtividade e a qualidade de equipamentos industriais.Através da integração de sensores, atuadores e algoritmos inteligentes, é possível monitorar o funcionamento das máquinas, identificar padrões de uso e realizar ajustes.</p>

                </div>
            </div>

        </div>
    )

}