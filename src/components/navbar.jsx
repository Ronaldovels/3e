import Logo3E from '../assets/3Ev2.svg'
import { useState } from 'react'

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="sticky top-0 z-50 shadow-md text-lg pr-10 pl-5 sticky bg-white">
            <div className="flex items-center justify-between w-full h-20 lg:h-25">
                <div className="flex justify-start flex-1 lg:flex-3">
                    <a href="/"><img src={Logo3E} alt="3E Logo" className="h-19 w-26 lg:h-24 rounded-lg ml-2" width={26} height={19}/></a>
                </div>

                <div className="hidden md:flex gap-6 flex-1 text-sm lg:text-base font-semibold text-[var(--royal-blue)]  text-xs w-[100%]">
                    <a href="/" className='nav-desk w-[100%]'>Pagina Inicial</a>
                    <a href="/Sobre" className='nav-desk w-[100%]'>Quem Somos</a>
                    <a href="/Contato" className='nav-desk w-[100%]'>Contato</a>
                    <a href="/Blog" className='nav-desk w-[100%]'>Blog</a>
                </div>

                <button
                    className="md:hidden flex flex-col justify-center items-center "
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span className={`block w-6 h-0.5 bg-[#011C6B]  mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#011C6B]  mb-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#011C6B]  transition-transform  ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            <div className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-50' : 'max-h-0'}`}>
                <div className="flex flex-col items-center py-4 space-y-4 text-base text-[var(--royal-blue)]">
                    <a href="/" className='nav-hover-mob'>Pagina Inicial</a>
                    <a href="/Sobre" className='nav-hover-mob'>Quem Somos</a>
                    <a href="/Contato" className='nav-hover-mob'>Contato</a>
                    <a href="/Blog" className='nav-hover-mob'>Blog</a>
                </div>
            </div>
        </div>
    )
}

