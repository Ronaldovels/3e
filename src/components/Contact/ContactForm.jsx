import React from 'react';

export default function ContactForm() {
  
  // A função de envio continua a mesma. Ela já é flexível o suficiente
  // para capturar todos os novos campos do formulário automaticamente.
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Dados do formulário:", data);
    alert("Obrigado pelo seu contato! (Isso é uma demonstração)");
    event.target.reset();
  };

  const RequiredStar = () => <span className="text-red-600">*</span>;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg h-full">
      <h3 className="text-2xl font-bold text-[var(--navy-blue)] mb-6">Envie uma Mensagem</h3>
      
      <form onSubmit={handleSubmit} className="text-gray-700">
        
        {/* --- NOME E SOBRENOME --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-semibold mb-1">
              Nome <RequiredStar />
            </label>
            <input 
              type="text" 
              id="nome" 
              name="nome"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--royal-blue)] focus:border-transparent transition-all" 
              required
            />
          </div>
          <div>
            <label htmlFor="sobrenome" className="block text-sm font-semibold mb-1">
              Sobrenome <RequiredStar />
            </label>
            <input 
              type="text" 
              id="sobrenome" 
              name="sobrenome"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--royal-blue)] focus:border-transparent transition-all" 
              required
            />
          </div>
        </div>
        
        {/* --- TELEFONE --- */}
        <div className="mb-4">
          <label htmlFor="telefone" className="block text-sm font-semibold mb-1">
            Telefone <RequiredStar />
          </label>
          <input 
            type="tel" 
            id="telefone" 
            name="telefone"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--royal-blue)] focus:border-transparent transition-all" 
            required
          />
        </div>
        
        {/* --- EMAIL --- */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email <RequiredStar />
          </label>
          <input 
            type="email" 
            id="email" 
            name="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--royal-blue)] focus:border-transparent transition-all" 
            required
          />
        </div>
        
        {/* --- DESCRIÇÃO DO PROJETO --- */}
        <div className="mb-4">
          <label htmlFor="projeto" className="block text-sm font-semibold mb-1">
            Descreva brevemente seu projeto <RequiredStar />
          </label>
          <textarea 
            id="projeto" 
            name="projeto"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--royal-blue)] focus:border-transparent transition-all" 
            required
          ></textarea>
        </div>
        
        {/* --- ORÇAMENTO E PRAZO --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="orcamento" className="block text-sm font-semibold mb-1">
              Orçamento Esperado (R$) <RequiredStar />
            </label>
            <input 
              type="text" 
              id="orcamento" 
              name="orcamento"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--royal-blue)] focus:border-transparent transition-all" 
              placeholder="Ex: 5.000"
              required
            />
          </div>
          <div>
            <label htmlFor="prazo" className="block text-sm font-semibold mb-1">
              Prazo Esperado (meses) <RequiredStar />
            </label>
            <input 
              type="text" 
              id="prazo"
              name="prazo"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--royal-blue)] focus:border-transparent transition-all" 
              placeholder="Ex: 3"
              required
            />
          </div>
        </div>
        
        {/* --- BOTÃO DE ENVIO --- */}
        <button 
          type="submit" 
          className="w-full mt-2 bg-[var(--royal-blue)] text-white py-3 font-bold rounded-lg duration-300 hover:bg-[var(--deep-blue)] ease-in-out hover:scale-[1.02] active:scale-100"
        >
          Enviar Proposta
        </button>
      </form>
    </div>
  );
}