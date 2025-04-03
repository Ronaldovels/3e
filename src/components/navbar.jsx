import Logo3E from '../assets/logo.avif'
import { use, useState } from 'react'
export default function navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="sticky top-0 z-10 shadow-md text-lg px-10 sticky bg-white">
            <div className="flex items-center justify-between w-full h-20 ">
                <div className="flex justify-start flex-1 lg:flex-3">
                    <a href="#"><img src={Logo3E} alt="Logo" className="h-15 rounded-lg" /></a>
                </div>

                <div className="hidden md:flex gap-6 flex-1 text-sm">
                    <a href="#" className=''>Pagina Inicial</a>
                    <a href="#">Quem Somos</a>
                    <a href="#">Nossas Soluções</a>
                    <a href="#">Contato</a>
                    <a href="#">Blog</a>
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

            <div className={`md:hidden w-full h-120 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
                <div className="flex flex-col items-center py-4 space-y-4 text-base">
                    <a href="#" className='nav-hover-mob'>Pagina Inicial</a>
                    <a href="#" className='nav-hover-mob'>Quem Somos</a>
                    <a href="#" className='nav-hover-mob'>Nossas Soluções</a>
                    <a href="#" className='nav-hover-mob'>Contato</a>
                    <a href="#" className='nav-hover-mob'>Blog</a>
                </div>
            </div>
        </div>
    )
}

