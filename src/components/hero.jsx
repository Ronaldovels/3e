
export default function hero() {

    return (
        <div className="flex flex-row h-[405px]">
            <div className="flex flex-col gap-5 pl-5 pt-10">
                <h1 className='max-sm:text-5xl text-7xl font-extrabold  lg:w-[90%] xl:w-[100%]'>CONCRETIZE SUA IDEIA  
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[var(--medium-blue)] to-[var(--navy-blue)]'> COM A 3E
                        </span>!</h1>
                <p className="max-w-[90%] pl-1.5 font-[Lato] text-[var(--medium-blue)] font-bold text-[1.3em] md:text-[1.5em] lg:text-[1.7em] lg:w-[45%]">A 3E Unicamp está há mais de 30 anos tornando sonhos em realidade através da prototipagem eletrônica!</p>
                <button className="border w-50 h-10 rounded-full bg-[var(--royal-blue)] text-white hover:scale-110 duration-300 ease-in-out font-bold  active:scale-110 ">FALE CONOSCO</button>
            </div>
        </div>
    )

}