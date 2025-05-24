const testimonials = [
    {
        name: 'Carlos Mendes',
        text: 'Profissionalismo e qualidade. Com certeza voltarei a contratar!',
    },
    {
        name: 'Fernanda Costa',
        text: 'Incrível! Muito acima da média em entrega e comunicação.',
    },
    {
        name: 'Luciana Ribeiro',
        text: 'Conseguiram entender exatamente o que eu precisava.',
    },
    
];



export default function Reviews() {


    return (
        <div>
            <h1 className="text-5xl lg:text-[85px] text-center font-extrabold text-[var(--navy-blue)]">DEPOIMENTOS</h1>
            <section className="bg-white py-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white border border-blue-900 rounded-lg p-6 shadow text-center">
                            <p className="text-xl text-blue-900 italic mb-4">“{t.text}”</p>
                            <p className="font-bold text-blue-900">{t.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}