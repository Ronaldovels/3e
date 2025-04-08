import '../index.css'
import instaIcon from '../assets/instagram.png'
import faceIcon from '../assets/facebook.png'
import linkIcon from '../assets/linkedin.png'
import whatIcon from '../assets/whatsapp.png'
import mailIcon from '../assets/mail.png'

export default function Footer() {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-8 gap-15 lg:gap-5 h-[100%] bg-[var(--navy-blue)] p-8 text-white">      
      <form className="col-span-4 max-w-4xl lg:col-span-4 xl:col-span-3 ">
        <div className="flex justify-between">
          <div clas>
            <label htmlFor="nome" className="block text-sm mb-1">
              Nome <span>*</span>
            </label>
            <input 
              type="text" 
              id="nome" 
              className="w-40 sm:w-70 lg:w-65 p-2 border border-blue-500 rounded hover:border-[var(-deep-blue)] duration-300 ease-in-out hover:scale-[1.05]" 
              required
            />
          </div>
          
          <div>
            <label htmlFor="sobrenome" className="block text-sm mb-1">
              Sobrenome <span>*</span>
            </label>
            <input 
              type="text" 
              id="sobrenome" 
              className="w-40 sm:w-70 lg:w-65 p-2 border border-blue-500 rounded hover:border-[var(-deep-blue)] duration-300 ease-in-out hover:scale-[1.05]" 
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="telefone" className="block text-sm mb-1">
            Telefone <span className>*</span>
          </label>
          <input 
            type="tel" 
            id="telefone" 
            className="w-full p-2 border border-blue-500 rounded hover:border-[var(-deep-blue)] duration-300 ease-in-out hover:scale-[1.05]" 
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-1">
            Email <span className>*</span>
          </label>
          <input 
            type="email" 
            id="email" 
            className="w-full p-2 border border-blue-500 rounded hover:border-[var(-deep-blue)] duration-300 ease-in-out hover:scale-[1.05]" 
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="projeto" className="block text-sm mb-1">
            Descreva brevemente seu projeto <span className>*</span>
          </label>
          <textarea 
            id="projeto" 
            className="w-full p-2 border border-blue-500 rounded h-24 hover:border-[var(-deep-blue)] duration-300 ease-in-out hover:scale-[1.05]" 
            required
          ></textarea>
        </div>
        
        <div className="flex justify-between">
          <div>
            <label htmlFor="orcamento" className="block text-sm mb-1">
              Orçamento Esperado <span className>*</span>
            </label>
            <input 
              type="text" 
              id="orcamento" 
              className="w-40 sm:w-70 lg:w-65 p-2 border border-blue-500 rounded hover:border-blue-900 text-white duration-300 ease-in-out hover:scale-[1.05]" 
              placeholder="Valor em reais"
              required
            />
          </div>
          
          <div>
            <label htmlFor="prazo" className="block text-sm mb-1">
              Prazo Esperado <span className>*</span>
            </label>
            <input 
              type="text" 
              id="prazo" 
              className="w-40 sm:w-70 lg:w-65 p-2 border border-blue-500 rounded hover:border-blue-900 text-white duration-300 ease-in-out hover:scale-[1.05]" 
              placeholder="Tempo em meses"
              required
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full mt-5 bg-[var(--royal-blue)] text-white py-3 font-medium rounded duration-300 hover:bg-blue-500 ease-in-out hover:scale-[1.05]"
        >
          Enviar
        </button>
      </form>
      <div className='col-span-4 border lg:col-span-4 xl:col-span-5 flex flex-col gap-10 p-10'>
        <div className='flex flex-col gap-10 md:flex-row'>
          <div className='flex flex-col '>
          
            <h1 className='text-2xl font-bold'>CONTATO</h1>
            <a className='flex gap-1' href="mailto:contato@3eunicamp.com" target='_blank'><img className='h-5' src={mailIcon} alt="" />contato@3eunicamp.com</a>
            <a className="flex gap-1" href="https://wa.me/message/AN7CBTXY3WWXO1" target='_blank'><img className='h-5' src={whatIcon} alt="" />(19) 3521-3843</a>
            <a className='flex gap-1'  href="https://www.instagram.com/3e.unicamp/" target='_blank'>
            <img className='h-5' src={instaIcon} />3e.unicamp</a>
            <a className='flex gap-1' href="https://www.facebook.com/jr3eunicamp/" target='_blank'>
            <img className='h-5' src={faceIcon} alt="" />jr3eunicamp</a>
            <a className='flex gap-1' href="https://www.linkedin.com/company/3e-unicamp/" target='_blank'>
            <img className='h-5' src={linkIcon} alt="" />3e-unicamp</a>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-2xl font-bold'>ENDEREÇO</h1>
            <a href="https://www.google.com/maps?client=opera-gx&hs=22z&sca_esv=edec2e4b4572a4c0&output=search&q=R.+Josué+de+Castro,+123+-+Cidade+Universitária,+Campinas+-+SP,+13083-861&source=lnms&fbs=ABzOT_BYhiZpMrUAF0c9tORwPGlssxTeO7BMOlalbdyQXag72r1qnNd-MghSp-MLF7ZupKLNJpA1I8VZ0HfUeA-4UgdX-97nDf7oc7TtZEVlTkuMpD2c3ypTiXj-VdV8V1i81GToPWFJj16s_daCO8XAB8WhxVoKtlC84nPvJRz2PVQ0NiGclmRPxu70wVG1PsEVa9qmnOofHkcQ37xRKFhWG2YDw03wzg&entry=mc&ved=1t:200715&ictx=111" target='_blank' className='md:w-40'>R. Josué de Castro, 123 - Cidade Universitária, Campinas - SP, 13083-861</a>
          </div>
        </div>
        <div className=''>
        <h2 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--medium-blue)] to-[var(--deep-blue)]'>Contribuindo para o desenvolvimento de estudantes de engenharia elétrica desde 1990</h2>
        </div>

        <div className=' md:pt-35 flex justify-end text-[10px]'>
          <p>© 2025 3E. Todos os direitos reservados.</p>
        </div>

        
      </div>
      
    </div>
  )
}