import { AlertIcon, ClockIcon } from "@/components/Icons/Icons";
import Image from "next/image";
import Link from "next/link";

export default function Jeep() {
  return (
    <section id="jeep" className="mt-7 p-7 text-white text-center">
      <h2 className="text-4xl mb-5 uppercase">Jeep</h2>

      <div className="pb-7">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Cachoeiras e Alambiques
        </h3>

        <div className="inline-block">
          <Image
            src="/assets/images/jeep.jpeg"
            alt="Cachoeiras e Alambiques: Alambique Paratiana, Cachoeira da Usina + Cachoeira da Pedra Branca, Alambique Pedra Branca, Poço do Tarzan + Cachoeira do Tobogã, Casa de Farinha e Queijaria."
            title="Cachoeiras e Alambiques: Alambique Paratiana, Cachoeira da Usina + Cachoeira da Pedra Branca, Alambique Pedra Branca, Poço do Tarzan + Cachoeira do Tobogã, Casa de Farinha e Queijaria."
            width={300}
            height={200}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Roteiro:</strong> Alambique Paratiana, Cachoeira da Usina + Cachoeira da Pedra Branca, Alambique Pedra Branca, Poço do Tarzan + Cachoeira do Tobogã, Casa de Farinha e Queijaria.</p>

        <p className="inline-block">
          <ClockIcon className="w-4 h-4 mr-2 float-left" />
          <strong>Início:</strong> 11h | <strong>Retorno:</strong> 17h
        </p>

        <div>
          <p className="mb-6 inline-block">
            <AlertIcon className="w-5 h-5 mr-2 float-left" />
            <strong className="float-left contents">O embarque e desembarque é realizado na hospedagem do cliente. O almoço ocorre no Restaurante do Poço do Tarzan. <br />Há degustação de cachaça gratuita nos alambiques, além de visita guiada.</strong>
          </p>
        </div>

        <p><strong>Valor:</strong> R$150 por pessoa.</p>

        <p className="mb-6 inline-block">
          <AlertIcon className="w-5 h-5 mr-2 float-left" />
          <strong className="float-left contents">É cobrado R$10 por pessoa na entrada da Cachoeira da Pedra Branca que deve ser pago na portaria ao ingressar.</strong>
        </p>

        <div className="mt-5">
          <Link href="https://wa.me/+5524998793280" target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
            Reserve já!
          </Link>
        </div>
      </div>

      <div className="py-7 border-t border-double border-t-white">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Trindade
        </h3>

        <div className="inline-block">
          <Image
            src="/assets/images/van-trindade.jpeg"
            alt="Trindade: Praia do Cepilho, Praia dos Ranchos, Praia do Meio, Praia do Cachadaço e Piscinas Naturais."
            title="Trindade: Praia do Cepilho, Praia dos Ranchos, Praia do Meio, Praia do Cachadaço e Piscinas Naturais."
            width={300}
            height={400}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Roteiro:</strong> Praia do Cepilho, Praia dos Ranchos, Praia do Meio, Praia do Cachadaço e Piscinas Naturais.</p>

        <p className="table m-auto">
          <ClockIcon className="w-4 h-4 mr-2 float-left" />
          <strong>Início:</strong> 10h | <strong>Retorno:</strong> 16h
        </p>

        <p className="mb-6 inline-block">
          <AlertIcon className="w-5 h-5 float-left" />
          <strong className="float-left contents">O embarque e desembarque é realizado na hospedagem do cliente. O almoço ocorre no Restaurante Nascer do Sol na Praia dos Ranchos.</strong>
        </p>

        <p><strong>Valor:</strong> R$150 por pessoa.</p>

        <p className="mb-6 inline-block">
          <AlertIcon className="w-5 h-5 ml-1 float-left" />
          <strong className="float-left contents">Poderão ser cobradas tarifas adicionais para translado de bote para as Piscinas Naturais.</strong>
        </p>

        <div className="mt-5">
          <Link href="https://wa.me/+5524998793280" target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
            Reserve já!
          </Link>
        </div>
      </div>

      <div className="py-7 border-t border-double border-t-white">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Roteiro 3 em 1 (Ilha do Cedro)
        </h3>

        <div className="inline-block">
          <Image
            src="/assets/images/jeep-tres-em-um.jpeg"
            alt="Roteiro 3 em 1 (Ilha do Cedro): Praia do Iriri, Ilha do Cedro e Cachoeira do Iriri."
            title="Roteiro 3 em 1 (Ilha do Cedro): Praia do Iriri, Ilha do Cedro e Cachoeira do Iriri."
            width={300}
            height={400}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Roteiro:</strong> Praia do Iriri, Ilha do Cedro e Cachoeira do Iriri.</p>

        <p><strong>Valor:</strong> R$250 por pessoa.</p>

        <div className="mt-5">
          <Link href="https://wa.me/+5524998793280" target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
            Reserve já!
          </Link>
        </div>
      </div>

      <div className="pt-7 border-t border-double border-t-white">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Ilha do Cedro
        </h3>

        <div className="inline-block">
          <Image
            src="/assets/images/jeep-ilha-cedro.jpeg"
            alt="Ilha do Cedro: Praia da Pitanga e Ilha do Cedro."
            title="Ilha do Cedro: Praia da Pitanga e Ilha do Cedro."
            width={300}
            height={400}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Roteiro:</strong> Praia da Pitanga e Ilha do Cedro.</p>

        <p><strong>Valor:</strong> R$150 por pessoa.</p>

        <div className="mt-5">
          <Link href="https://wa.me/+5524998793280" target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
            Reserve já!
          </Link>
        </div>
      </div>
    </section>
  );
};