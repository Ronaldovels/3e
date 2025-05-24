


export default function Form(){
    

    return (
        
        <form className="col-span-4 max-w-4xl lg:col-span-4 xl:col-span-3 placeholder-gray ">
        <div className="flex justify-between mb-3">
          <div className=''>
            <label htmlFor="nome" className="block text-sm mb-1">
              Nome <span>*</span>
            </label>
            <input 
              type="text" 
              id="nome" 
              className=" w-40 sm:w-70 lg:w-55 xl:w-55 2xl:w-80 p-2 border border-blue-500  hover:border-[var(-deep-blue)] duration-300 ease-in-out hover:scale-[1.05]" 
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
              className=" w-40 sm:w-70 lg:w-55 xl:w-55 2xl:w-80 p-2 border border-blue-500  hover:border-[var(-deep-blue)] duration-300 ease-in-out hover:scale-[1.05]" 
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
            className="w-full p-2 border border-blue-500  hover:border-[var(-deep-blue)] duration-300 ease-in-out hover:scale-[1.05]" 
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
            className="w-full p-2 border border-blue-500  hover:border-[var(-deep-blue)] duration-300 ease-in-out hover:scale-[1.05]" 
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="projeto" className="block text-sm mb-1">
            Descreva brevemente seu projeto <span className>*</span>
          </label>
          <textarea 
            id="projeto" 
            className="w-full p-2 border border-blue-500  h-24 hover:border-[var(-deep-blue)] duration-300 ease-in-out hover:scale-[1.05]" 
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
              className=" w-40 sm:w-70 lg:w-55 xl:w-55 2xl:w-80 p-2 border border-blue-500 hover:border-blue-900 text-black duration-300 ease-in-out hover:scale-[1.05]" 
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
              className="w-40 sm:w-70 lg:w-55 xl:w-55 2xl:w-80 p-2 border border-blue-500  hover:border-blue-900 text-black duration-300 ease-in-out hover:scale-[1.05]" 
              placeholder="Tempo em meses"
              required
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full mt-5 bg-[var(--royal-blue)] text-white py-3 font-medium  duration-300 hover:bg-blue-500 ease-in-out hover:scale-[1.05]"
        >
          Enviar
        </button>
      </form>
    )
}