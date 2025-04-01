



export default function about() {

    return (
        <div className="flex items-center h-[600px] bg-gradient-to-r from-[#94C3E9] to-[#1A5F99] border md:h-[600px]">
            <div>
                <img src="https://static.wixstatic.com/media/5310d1_681f157d4d234ea3b90f3038df998712~mv2.jpg/v1/fill/w_499,h_615,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5310d1_681f157d4d234ea3b90f3038df998712~mv2.jpg" className="h-150 w-90 md:h-150 md:w-150  "  alt="" />
            </div>
            <div className="text-center flex flex-col items-center w-80 h-[100%] pt-10 md:w-90 ">
                <h1 className='text-4xl font-bold text-white'>Conheça a 3E Unicamp</h1>
                <p className="pt-5 text-wrap border w-70 text-xl text-justify">Somos a primeira Empresa Júnior de Engenharia Elétrica do Brasil. Temos mais de 30 anos de mercado e mais de 150 projetos realizados. Somos movidos a atender as necessidades do mercado, oferecendo serviços diferenciados, personalizados e de custo reduzido.</p>
            </div>
            
        </div>
    )

}