import Foto2 from '../assets/f2.jpg'



export default function AboutSection() {
    return (
        <div className="w-[100%] h-[683px] grid grid-cols-4">

            <div className="col-span-4 lg:col-span-2 xl:col-span-2 h-full w-full lg:block overflow-hidden">
                <img src={Foto2} alt="" className="w-full h-full object-cover rounded" />
            </div>

            <div className="col-span-4 lg:col-span-2 xl:col-span-2 w-full p-6 flex flex-col items-center">
                <h1 className="text-4xl font-extrabold pb-4 text-[var(--navy-blue)]">CONHEÇA A 3E UNICAMP</h1>
                <h2 className="text-xl font-extrabold pb-10 text-center text-[var(--navy-blue)] w-90">Contribuindo para o desenvolvimento de estudantes de engenharia elétrica desde 1990</h2>
                <p className='w-90 text-justify text-lg'>Somos a primeira Empresa Júnior de Engenharia Elétrica do Brasil. Temos mais de 30 anos de mercado e mais de 150 projetos realizados. Somos movidos a atender as necessidades do mercado, oferecendo serviços diferenciados, personalizados e de custo reduzido.</p>
                
            </div>

        </div>
    )
}