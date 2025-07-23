import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

import '../index.css';
import Logo3E from '../assets/3EW.svg';


export default function Footer() {
  const iconStyle = "h-5 w-5 text-white transition-transform duration-200 group-hover:scale-110";
  const linkStyle = "flex items-center gap-2 text-white hover:text-gray-300 group";

  return (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-8 bg-[var(--navy-blue)] p-8 text-white relative z-4">
      
      {/* Coluna da Logo */}
      <div className="col-span-1 md:col-span-3">
        <div className='flex items-center gap-4'>
          <img src={Logo3E} alt="Logo da 3E Unicamp em branco" className="h-20 w-30 lg:h-24" width={30} height={20}/>
          <h1 className='text-3xl font-bold'>3E <br />UNICAMP</h1>
        </div>
        <div className='mt-6 text-xs text-gray-400'>
          <p>© 2025 3E Unicamp. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Coluna de Contato e Endereço */}
      <div className='col-span-1 md:col-span-5 flex flex-col md:flex-row justify-start gap-10'>
        {/* Contatos */}
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-bold mb-2'>CONTATO</h2>
          <a className={linkStyle} href="mailto:contato@3eunicamp.com" target='_blank' rel="noopener noreferrer">
            <FaEnvelope className={iconStyle} />
            contato@3eunicamp.com
          </a>
          <a className={linkStyle} href="https://wa.me/message/AN7CBTXY3WWXO1" target='_blank' rel="noopener noreferrer">
            <FaWhatsapp className={iconStyle} />
            (19) 3521-3843
          </a>
          <a className={linkStyle} href="https://www.instagram.com/3e.unicamp/" target='_blank' rel="noopener noreferrer">
            <FaInstagram className={iconStyle} />
            3e.unicamp
          </a>
          <a className={linkStyle} href="https://www.facebook.com/jr3eunicamp/" target='_blank' rel="noopener noreferrer">
            <FaFacebookF className={iconStyle} />
            jr3eunicamp
          </a>
          <a className={linkStyle} href="https://www.linkedin.com/company/3e-unicamp/" target='_blank' rel="noopener noreferrer">
            <FaLinkedinIn className={iconStyle} />
            3e-unicamp
          </a>
        </div>
        
        {/* Endereço */}
        <div className='flex flex-col'>
          <h2 className='text-2xl font-bold mb-2'>ENDEREÇO</h2>
          <a href="https://maps.app.goo.gl/uX3f2Z8VbYJv9n9j7" target='_blank' rel="noopener noreferrer" className='max-w-xs hover:text-gray-300 w-60'>
            R. Josué de Castro, 123 - Cidade Universitária, Campinas - SP, 13083-861
          </a>
        </div>
      </div>
      
    </div>
  );
}