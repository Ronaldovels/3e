import bg from "../assets/f.webp"

export default function Hero() {
    return (
        <div className="relative h-[405px] bg-black z-5">
            
            <div
                className="absolute inset-0 bg-cover bg-center opacity-35" // A classe de URL foi removida daqui
                style={{ backgroundImage: `url(${bg})` }} // E adicionada aqui como estilo inline
            ></div>

            {/* Conteúdo nítido por cima */}
            <div className="relative z-10 flex flex-row h-full">
                <div className="flex flex-col gap-5 pl-5 pt-10">
                    <h1 className='text-5xl md:text-7xl font-extrabold text-white lg:w-[90%] xl:w-[100%]'>
                        CONCRETIZE SUA IDEIA
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[var(--medium-blue)] to-[var(--deep-blue)]'>
                            {' '}COM A 3E!
                        </span>
                    </h1>
                    <p className="max-w-[90%] pl-1.5 mb-5 text-white font-bold text-[1.3em] md:text-[1.5em] lg:text-[1.7em] lg:w-[45%]">Há mais de 30 anos tornando sonhos em realidade!</p>
                    {/* CORREÇÃO: Adicionado o Link do React Router para navegação interna sem recarregar a página */}
                    <a href="/Contato" className="w-50 h-10 flex items-center justify-center rounded-full bg-[var(--royal-blue)] text-white hover:scale-110 duration-300 ease-in-out font-bold active:scale-110">
                        FALE CONOSCO
                    </a>
                </div>
            </div>
        </div>
    )
}