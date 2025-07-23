



export default function Steps() {

    return (
        <div className="flex flex-col items-center h-[100%] p-20  ">
            <h1 className="text-7xl font-extrabold text-center pb-20 text-[var(--navy-blue)]">ETAPAS</h1>



            <div className="flex flex-col gap-10  lg:flex-row text-sm ">
                <div className="relative bg-white rounded-lg shadow-md shadow-blue-900 pt-16 px-6 pb-6 border-t-8  border-[var(--royal-blue)] w-80 sm:w-full max-w-sm mx-auto">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-[var(--royal-blue)] rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="#091c6b" viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm1 7H8V8h7zm0 2H8v1h7zm0 3H8v1h7zm-2-9V3.5L18.5 9H15a1 1 0 0 1-1-1z" />
                        </svg>
                    </div>

                    <h1 className="text-center text-[var(--royal-blue)] font-bold text-xl mb-4">CONSULTORIA</h1>

                    <ol className="list-disc list-inside text-gray-700 space-y-2">
                        <li>FUNCIONALIDADES ESSENCIAS</li>
                        <li>REQUISITOS TÉCNICOS</li>
                        <li>ESCOLHA DE COMPONENTES</li>
                        <li>ARQUIRETURA DO SISTEMA</li>
                        <li>GLUXOGRAMA DA ELETRÔNICA</li>
                        <li>FLUXOGRAMA DO ALGORITMO</li>
                    </ol>
                </div>
                <div className="relative bg-white rounded-lg shadow-md shadow-blue-900 pt-16 px-6 pb-6 border-t-8 border-[var(--royal-blue)] w-80 sm:w-full max-w-sm mx-auto">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-[var(--royal-blue)] rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="#091c6b" viewBox="0 0 24 24">
                            <path d="M12 2a1 1 0 0 0-1 1v1.09A7.004 7.004 0 0 0 5 11v5H4a1 1 0 0 0 0 2h1v1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a1 1 0 0 0 0-2h-1v-5a7.004 7.004 0 0 0-6-6.91V3a1 1 0 0 0-1-1zm-4 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 4h6a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2z" />
                        </svg>
                    </div>

                    <h1 className="text-center text-[var(--royal-blue)] font-bold text-xl mb-4">PROVA DE CONCEITO</h1>

                    <ol className="list-disc list-inside text-gray-700 space-y-2">
                        <li>DESENVOLVIMENTO DO SOFTWARE (MICROCONTROLADOR)</li>
                        <li>TESTE DE BANCADA</li>
                        <li>DIAGRAMA FINAL DE MONTAGEM DO CIRCUITO OU PCB</li>
                    </ol>
                </div>
                <div className="relative bg-white rounded-lg shadow-md shadow-blue-900 pt-16 px-6 pb-6 border-t-8 border-[var(--royal-blue)] w-80 sm:w-full max-w-sm mx-auto">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-[var(--royal-blue)] rounded-full flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="#091c6b"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19.14,12.94a7.86,7.86,0,0,0,.05-.94,7.86,7.86,0,0,0-.05-.94l2.11-1.65a.5.5,0,0,0,.12-.65l-2-3.46a.5.5,0,0,0-.61-.22l-2.49,1a7.28,7.28,0,0,0-1.63-.94l-.38-2.65A.5.5,0,0,0,13.79,3H10.21a.5.5,0,0,0-.5.42L9.33,6.07a7.28,7.28,0,0,0-1.63.94l-2.49-1a.5.5,0,0,0-.61.22l-2,3.46a.5.5,0,0,0,.12.65L4.86,11.06a7.86,7.86,0,0,0-.05.94,7.86,7.86,0,0,0,.05.94L2.75,14.59a.5.5,0,0,0-.12.65l2,3.46a.5.5,0,0,0,.61.22l2.49-1a7.28,7.28,0,0,0,1.63.94l.38,2.65a.5.5,0,0,0,.5.42h3.58a.5.5,0,0,0,.5-.42l.38-2.65a7.28,7.28,0,0,0,1.63-.94l2.49,1a.5.5,0,0,0,.61-.22l2-3.46a.5.5,0,0,0-.12-.65ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                    </div>

                    <h1 className="text-center text-[var(--royal-blue)] font-bold text-xl mb-4">ETAPA FINAL</h1>

                    <ol className="list-disc list-inside text-gray-700 space-y-2">
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