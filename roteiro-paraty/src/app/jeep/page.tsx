import { AlertIcon, ClockIcon } from "@/components/Icons/Icons";
import infosJeeps from "@/data/infosJeep.json";
import Image from "next/image";
import Link from "next/link";

export default function Jeep() {
  return (
    <section id="jeep" className="mt-7 p-7 text-white text-center">
      <h2 className="text-4xl uppercase">Jeep</h2>
      {infosJeeps.map((infoJeep, index) => {
        return (
          <div key={infoJeep.titulo} className={`pt-7 ${index !== infosJeeps.length - 1 ? "py-7 border-b border-double border-b-white" : ''}`}>
            <h3 className="text-2xl mb-5 uppercase font-bold">
              {infoJeep.titulo}
            </h3>

            <div className="inline-block">
              <Image
                src={`/assets/images/${infoJeep.imagem}`}
                alt={infoJeep.alt_title}
                title={infoJeep.alt_title}
                width={500}
                height={334}
                className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
              <Image
                src={`/assets/images/${infoJeep.imagem}`}
                alt={infoJeep.alt_title}
                title={infoJeep.alt_title}
                width={300}
                height={200}
                className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
            </div>

            <p className="mb-6"><strong>Roteiro:</strong> {infoJeep.roteiro}</p>

            {infoJeep.horario_inicio && (
              <div className="table m-auto">
                <ClockIcon className="w-4 h-4 mr-2 float-left" />
                <strong>Início:</strong> {infoJeep.horario_inicio} | <strong>Retorno:</strong> {infoJeep.horario_retorno}
              </div>
            )}

            {infoJeep.alerta && (
              <div className="mb-6 inline-flex px-0 2xl:px-10">
                <strong className="text-center block"><AlertIcon /> {infoJeep.alerta}</strong>
              </div>
            )}

            <p><strong>Valor:</strong> {infoJeep.valor} por pessoa.</p>

            {infoJeep.alerta_dois && (
              <div className="mb-6 inline-flex px-0 2xl:px-10">
                <strong className="text-center block"><AlertIcon /> {infoJeep.alerta_dois}</strong>
              </div>
            )}

            <div className="mt-5">
              <Link href={infoJeep.contato} target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
                Reserve já!
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

// <div className="py-7 border-t border-double border-t-white">
//   <h3 className="text-2xl mb-5 uppercase font-bold">
//     Trindade
//   </h3>

//   <div className="inline-block">
//     <Image
//       src="/assets/images/trindade.jpeg"
//       alt="Trindade: Praia do Cepilho, Praia dos Ranchos, Praia do Meio, Praia do Cachadaço e Piscinas Naturais."
//       title="Trindade: Praia do Cepilho, Praia dos Ranchos, Praia do Meio, Praia do Cachadaço e Piscinas Naturais."
//       width={500}
//       height={667}
//       className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
//     />
//     <Image
//       src="/assets/images/trindade.jpeg"
//       alt="Trindade: Praia do Cepilho, Praia dos Ranchos, Praia do Meio, Praia do Cachadaço e Piscinas Naturais."
//       title="Trindade: Praia do Cepilho, Praia dos Ranchos, Praia do Meio, Praia do Cachadaço e Piscinas Naturais."
//       width={300}
//       height={400}
//       className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
//     />
//   </div>

//   <p className="mb-6"><strong>Roteiro:</strong> Praia do Cepilho, Praia dos Ranchos, Praia do Meio, Praia do Cachadaço e Piscinas Naturais.</p>

//   <p className="table m-auto">
//     <ClockIcon className="w-4 h-4 mr-2 float-left" />
//     <strong>Início:</strong> 10h | <strong>Retorno:</strong> 16h
//   </p>

//   <p className="mb-6 inline-block">
//     <AlertIcon className="w-5 h-5 float-left" />
//     <strong className="float-left contents">O embarque e desembarque é realizado na hospedagem do cliente. O almoço ocorre no Restaurante Nascer do Sol na Praia dos Ranchos.</strong>
//   </p>

//   <p><strong>Valor:</strong> R$150 por pessoa.</p>

//   <p className="mb-6 inline-block">
//     <AlertIcon className="w-5 h-5 ml-1 float-left" />
//     <strong className="float-left contents">Poderão ser cobradas tarifas adicionais para translado de bote para as Piscinas Naturais.</strong>
//   </p>

//   <div className="mt-5">
//     <Link href="https://api.whatsapp.com/send?phone=5524998793280&text=Olá,%20vim%20do%20site%20e%20tenho%20interesse%20no%20passeio%20de%20Jeep:%20Trindade." target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
//       Reserve já!
//     </Link>
//   </div>
// </div>

// <div className="py-7 border-t border-double border-t-white">
//   <h3 className="text-2xl mb-5 uppercase font-bold">
//     3 em 1 (Ilha do Cedro)
//   </h3>

//   <div className="inline-block">
//     <Image
//       src="/assets/images/jeep-tres-em-um.jpeg"
//       alt="Roteiro 3 em 1 (Ilha do Cedro): Praia do Iriri, Ilha do Cedro e Cachoeira do Iriri."
//       title="Roteiro 3 em 1 (Ilha do Cedro): Praia do Iriri, Ilha do Cedro e Cachoeira do Iriri."
//       width={500}
//       height={667}
//       className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
//     />
//     <Image
//       src="/assets/images/jeep-tres-em-um.jpeg"
//       alt="Roteiro 3 em 1 (Ilha do Cedro): Praia do Iriri, Ilha do Cedro e Cachoeira do Iriri."
//       title="Roteiro 3 em 1 (Ilha do Cedro): Praia do Iriri, Ilha do Cedro e Cachoeira do Iriri."
//       width={300}
//       height={400}
//       className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
//     />
//   </div>

//   <p className="mb-6"><strong>Roteiro:</strong> Praia do Iriri, Ilha do Cedro e Cachoeira do Iriri.</p>

//   <p><strong>Valor:</strong> R$250 por pessoa.</p>

//   <div className="mt-5">
//     <Link href="https://api.whatsapp.com/send?phone=5524998793280&text=Olá,%20vim%20do%20site%20e%20tenho%20interesse%20no%20passeio%20de%20Jeep:%203%20em%201." target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
//       Reserve já!
//     </Link>
//   </div>
// </div>

// <div className="pt-7 border-t border-double border-t-white">
//   <h3 className="text-2xl mb-5 uppercase font-bold">
//     Ilha do Cedro
//   </h3>

//   <div className="inline-block">
//     <Image
//       src="/assets/images/jeep-ilha-cedro.jpeg"
//       alt="Ilha do Cedro: Praia da Pitanga e Ilha do Cedro."
//       title="Ilha do Cedro: Praia da Pitanga e Ilha do Cedro."
//       width={500}
//       height={667}
//       className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
//     />
//     <Image
//       src="/assets/images/jeep-ilha-cedro.jpeg"
//       alt="Ilha do Cedro: Praia da Pitanga e Ilha do Cedro."
//       title="Ilha do Cedro: Praia da Pitanga e Ilha do Cedro."
//       width={300}
//       height={400}
//       className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
//     />
//   </div>

//   <p className="mb-6"><strong>Roteiro:</strong> Praia da Pitanga e Ilha do Cedro.</p>

//   <p><strong>Valor:</strong> R$150 por pessoa.</p>

//   <div className="mt-5">
//     <Link href="https://api.whatsapp.com/send?phone=5524998793280&text=Olá,%20vim%20do%20site%20e%20tenho%20interesse%20no%20passeio%20de%20Jeep:%20Ilha%20do%20Cedro." target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
//       Reserve já!
//     </Link>
//   </div>
// </div>