import Logo3E from '../assets/logo.avif'




export default function hero() {

    return (
        <div className="flex flex-row h-[405px]">
            <div className="flex flex-col gap-5 pl-5 pt-10">
                <h1 className='text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#94C3E9] to-[#1A5F99] lg:w-[90%] xl:w-[100%]'>CONCRETIZE SUA IDEIA COM A 3E!</h1>
                <p className="w-100 pl-1.5 font-[Lato] text-[#676767] font-bold text-[1.3em] md:text-[1.5em] lg:text-[1.7em] lg:w-[45%]">A 3E Unicamp está há mais de 30 anos tornando sonhos em realidade através da prototipagem eletrônica!</p>
                <button className="border w-50 h-10 rounded-full bg-[#011C6B] text-white hover:scale-110 duration-300 ease-in-out font-bold">FALE CONOSCO</button>
            </div>
            
        </div>
    )

}