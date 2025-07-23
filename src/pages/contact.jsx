import React from 'react';
import NavBar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import ContactInfo from '../components/Contact/ContactInfo.jsx';
import ContactForm from '../components/Contact/ContactForm.jsx';

export default function ContaCT() {
  return (
    <>
      <NavBar />
      <main className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[var(--navy-blue)]">Fale Conosco</h1>
          <p className="text-lg text-gray-600 mt-4">Estamos prontos para ouvir sua ideia. Preencha o formulário ou entre em contato por um dos canais abaixo.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>
      <Footer />
    </>
  );
}