



export default function steps() {

    return (
        <div className="flex flex-col items-center h-[100%] pb-30 bg-black border">
            <h1 className="text-5xl font-extrabold text-center pb-10 text-black">ETAPAS</h1>

            <div className="flex flex-col gap-10  lg:flex-row text-sm">
                <button className="card ">
                    <h1 className="text-center text-blue-900 font-bold text-2xl pt-5">CONSULTORIA</h1>
                   <ol className="list-decimal">
                        <li>FUNCIONALIDADES ESSENCIAS</li>
                        <li>REQUISITOS TÉCNICOS</li>
                        <li>ESCOLHA DE COMPONENTES</li>
                        <li>ARQUIRETURA DO SISTEMA</li>
                        <li>GLUXOGRAMA DA ELETRÔNICA</li>
                        <li>FLUXOGRAMA DO ALGORITMO</li>
                   </ol>
                </button>
                <div className="card ">
                    <h1 className="text-center text-blue-900 font-bold text-2xl pt-5">PROVA DE CONCEITO</h1>
                    <ol className="list-decimal w-60">
                        <li>DESENVOLVIMENTO DO SOFTWARE (MICROCONTROLADOR)</li>
                        <li>TESTE DE BANCADA</li>
                        <li>DIAGRAMA FINAL DE MONTAGEM DO CIRCUITO OU PCB</li>
                    </ol>
                </div>
                <div className="card ">
                    <h1 className="text-center text-blue-900 font-bold text-2xl pt-5">ETAPA FINAL</h1>
                    <ol className="list-decimal">
                        <li>INTEGRAÇÃO SOFTWARE E HARDWARE</li>
                        <li>TESTE NO HARDWARE FINAL</li>
                        <li>MONTAGEM DO PRODUTO</li>
                        <li>DOCUMENTAÇÃO FINAL DO PROJETO</li>
                   </ol>

                </div>
            </div>
        </div>


    )

}