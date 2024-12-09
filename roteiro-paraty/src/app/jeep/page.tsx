import Image from "next/image";
import Link from "next/link";

export default function Jeep() {
  return (

    <section id="jeep" className="mt-7 p-7 text-white text-center">
      <h2 className="text-4xl mb-5 uppercase">Jeep</h2>
      <div className="inline-block">
        <Image
          src="/assets/images/jeep.jpeg"
          alt="Conheça Nossos Roteiros de Jeep"
          title="Conheça Nossos Roteiros de Jeep"
          width={500}
          height={333}
          className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
        />
      </div>

      <p className="mb-6"><strong>Roteiro:</strong> Alambique Paratiana, Cachoeira da Usina + Cachoeira da Pedra Branca, Alambique Pedra Branca, Poço do Tarzan + Cachoeira do Tobogã, Casa de Farinha e Queijaria.</p>

      <p><strong>Início:</strong> 11h | <strong>Retorno:</strong> 17h</p>

      <p className="mb-6"><strong>O embarque e desembarque é realizado na hospedagem do cliente. O almoço ocorre no Restaurante do Poço do Tarzan. Há degustação de cachaça gratuita nos alambiques, além de visita guiada.</strong></p>

      <p><strong>Valor:</strong> R$100 por pessoa.</p>
      <p><strong>(é cobrado R$10 por pessoa na entrada da Cachoeira da Pedra Branca que deve ser pago na portaria ao ingressar)</strong></p>

      <div className="mt-5 mb-5">
        <Link href="https://wa.me/+5524998793280" target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
          Reserve já!
        </Link>
      </div>
    </section>
  )
}