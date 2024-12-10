import { AlertIcon, ClockIcon } from "@/components/Icons/Icons";
import Image from "next/image";
import Link from "next/link";

export default function Van() {
  return (

    <section id="van" className="mt-7 pt-7 text-white text-center">
      <h2 className="text-4xl mb-5 uppercase">Van</h2>

      <div className="pb-7">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Trindade
        </h3>
        <div className="inline-block">
          <Image
            src="/assets/images/van-trindade.jpeg"
            alt="Trindade: Praia do Cepilho, Praia dos Ranchos, Praia do Meio, Praia do Cachadaço e Piscinas Naturais."
            title="Trindade: Praia do Cepilho, Praia dos Ranchos, Praia do Meio, Praia do Cachadaço e Piscinas Naturais."
            width={350}
            height={467}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Roteiro:</strong> Praia do Cepilho, Praia dos Ranchos, Praia do Meio, Praia do Cachadaço e Piscinas Naturais.</p>

        <p className="inline-block">
          <ClockIcon className="w-4 h-4 mr-2 float-left" />
          <strong>Início:</strong> 10h | <strong>Retorno:</strong> 16h
        </p>

        <div>
          <p className="mb-6 inline-block">
            <AlertIcon className="w-5 h-5 mr-2 float-left" />
            <strong className="float-left contents">OBS: O embarque e desembarque é realizado na hospedagem do cliente. O almoço ocorre no Restaurante Nascer do Sol na Praia dos Ranchos.</strong>
          </p>
        </div>

        <p><strong>Valor:</strong> R$150 por pessoa.</p>

        <p className="mb-6 inline-block">
          <AlertIcon className="w-5 h-5 mr-2 float-left" />
          <strong className="float-left contents">OBS: (Poderão ser cobradas tarifas adicionais para translado de bote para as Piscinas Naturais.)</strong>
        </p>

        <div className="mt-5">
          <Link href="https://wa.me/+5524998793280" target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
            Reserve já!
          </Link>
        </div>
      </div>
    </section>
  )
}