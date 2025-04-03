import '../index.css'

export default function Footer() {
  return (
    <div className="container-shape h-[100%] bg-white p-8">      
      <form className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="nome" className="block text-sm mb-1">
              Nome <span className="text-blue-500">*</span>
            </label>
            <input 
              type="text" 
              id="nome" 
              className="w-full p-2 border border-blue-500 rounded hover:border-blue-900 duration-300 ease-in-out hover:scale-[1.05]" 
              required
            />
          </div>
          
          <div>
            <label htmlFor="sobrenome" className="block text-sm mb-1">
              Sobrenome <span className="text-blue-500">*</span>
            </label>
            <input 
              type="text" 
              id="sobrenome" 
              className="w-full p-2 border border-blue-500 rounded hover:border-blue-900 duration-300 ease-in-out hover:scale-[1.05]" 
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="telefone" className="block text-sm mb-1">
            Telefone <span className="text-blue-500">*</span>
          </label>
          <input 
            type="tel" 
            id="telefone" 
            className="w-full p-2 border border-blue-500 rounded hover:border-blue-900 duration-300 ease-in-out hover:scale-[1.05]" 
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-1">
            Email <span className="text-blue-500">*</span>
          </label>
          <input 
            type="email" 
            id="email" 
            className="w-full p-2 border border-blue-500 rounded hover:border-blue-900 duration-300 ease-in-out hover:scale-[1.05]" 
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="projeto" className="block text-sm mb-1">
            Descreva brevemente seu projeto <span className="text-blue-500">*</span>
          </label>
          <textarea 
            id="projeto" 
            className="w-full p-2 border border-blue-500 rounded h-24 hover:border-blue-900 duration-300 ease-in-out hover:scale-[1.05]" 
            required
          ></textarea>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="orcamento" className="block text-sm mb-1">
              Orçamento Esperado <span className="text-blue-500">*</span>
            </label>
            <input 
              type="text" 
              id="orcamento" 
              className="w-full p-2 border border-blue-500 rounded hover:border-blue-900 duration-300 ease-in-out hover:scale-[1.05]" 
              placeholder="Valor em reais"
              required
            />
          </div>
          
          <div>
            <label htmlFor="prazo" className="block text-sm mb-1">
              Prazo Esperado <span className="text-blue-500">*</span>
            </label>
            <input 
              type="text" 
              id="prazo" 
              className="w-full p-2 border border-blue-500 rounded hover:border-blue-900 duration-300 ease-in-out hover:scale-[1.05]" 
              placeholder="Tempo em meses"
              required
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-blue-900 text-white py-3 font-medium rounded duration-300 hover:bg-blue-500 ease-in-out hover:scale-[1.05]"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}