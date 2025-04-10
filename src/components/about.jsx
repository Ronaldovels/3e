import Foto2 from '../assets/f2.jpg'



export default function about() {
    return (
        <div className="w-[100%] grid grid-cols-3">

            <div className="col-span-2  border h-full w-full hidden lg:block">
                <img src={Foto2} alt="" className="h-full w-full object-cover" />
            </div>

            <div className="col-span-3 lg:col-span-1 w-full p-6 ">
                <h1 className="text-4xl font-extrabold text-center pb-10 text-black">QUEM SOMOS</h1>
                <p>Somos a primeira Empresa Júnior de Engenharia Elétrica do Brasil. Temos mais de 30 anos de mercado e mais de 150 projetos realizados. Somos movidos a atender as necessidades do mercado, oferecendo serviços diferenciados, personalizados e de custo reduzido.</p>
            </div>
           



        </div>
    )
}