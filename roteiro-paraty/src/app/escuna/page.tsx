import Image from "next/image";
import Link from "next/link";

export default function Escuna() {

  return (
    <section id="escuna" className="mt-7 p-7 text-white text-center">

      <h2 className="text-4xl mb-5 uppercase">Escunas</h2>

      <div className="pb-7">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Tradicional
        </h3>
        <div className="inline-block">
          <Image
            src="/assets/images/escuna.jpeg"
            alt="Tradicional: Ilha dos Cocos, Praia da Lula, Ilha da Pescaria e Praia da Conceição."
            title="Tradicional: Ilha dos Cocos, Praia da Lula, Ilha da Pescaria e Praia da Conceição."
            width={500}
            height={333}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p>
          Roteiro: Ilha dos Cocos, Praia da Lula, Ilha da Pescaria e Praia da Conceição.
        </p>

        <div className="mt-5 mb-5">
          <Link href="https://wa.me/+5524998793280" target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
            Reserve já!
          </Link>
        </div>
      </div>

      <div className="py-7 border-t border-double border-t-amber-900">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Tradicional II
        </h3>
        <div className="inline-block">
          <Image
            src="/assets/images/escuna.jpeg"
            alt="Tradicional II: Ilha dos Cocos, Praia da Lula, Lagoa Azul e Praia da Conceição."
            title="Tradicional II: Ilha dos Cocos, Praia da Lula, Lagoa Azul e Praia da Conceição."
            width={500}
            height={333}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p>
          Roteiro: Ilha dos Cocos, Praia da Lula, Lagoa Azul e Praia da Conceição.
        </p>

        <div className="mt-5 mb-5">
          <Link href="https://wa.me/+5524998793280" target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
            Reserve já!
          </Link>
        </div>
      </div>

      <div className="py-7 border-t border-double border-t-amber-900">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Rota das Águas Claras
        </h3>
        <div className="inline-block">
          <Image
            src="/assets/images/escuna.jpeg"
            alt="Rota das Águas Claras: Ilha dos Cocos, Saco da Velha, Enseada da Preguiça e Praia da Conceição."
            title="Rota das Águas Claras: Ilha dos Cocos, Saco da Velha, Enseada da Preguiça e Praia da Conceição."
            width={500}
            height={333}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p>
          Roteiro: Ilha dos Cocos, Saco da Velha, Enseada da Preguiça e Praia da Conceição.
        </p>

        <div className="mt-5 mb-5">
          <Link href="https://wa.me/+5524998793280" target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
            Reserve já!
          </Link>
        </div>
      </div>

      <div className="pt-7 border-t border-double border-t-amber-900">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Escuna de um andar
        </h3>
        <div className="inline-block">
          <Image
            src="/assets/images/escuna.jpeg"
            alt="Escuna de um andar: Ilha dos Cocos, Saco da Velha, Lagoa Azul, Praia da Lula e Ilha Comprida."
            title="Escuna de um andar: Ilha dos Cocos, Saco da Velha, Lagoa Azul, Praia da Lula e Ilha Comprida."
            width={500}
            height={333}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p>
          Roteiro: Ilha dos Cocos, Saco da Velha, Lagoa Azul, Praia da Lula e Ilha Comprida.
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