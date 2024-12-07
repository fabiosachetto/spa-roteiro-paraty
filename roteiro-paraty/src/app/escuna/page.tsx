import Image from "next/image";
import Link from "next/link";

export default function Escuna() {

  return (
    <section id="escuna" className="mt-7 p-7 text-white text-center">

      <h2 className="text-4xl mb-5 uppercase">Escunas</h2>

      <div>

        <div className="flex gap-3 mb-5">

          <div>
            <Image
              src="/assets/images/escuna.jpeg"
              alt="Tradicional: Ilha dos Cocos, Praia da Lula, Ilha da Pescaria e Praia da Conceição."
              title="Tradicional: Ilha dos Cocos, Praia da Lula, Ilha da Pescaria e Praia da Conceição."
              width={1280}
              height={853}
              className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
            />

            <div>
              <h3 className="text-2xl mb-5 uppercase font-bold">
                Tradicional
              </h3>
              <p>
                Roteiro: Ilha dos Cocos, Praia da Lula, Ilha da Pescaria e Praia da Conceição.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/assets/images/escuna.jpeg"
              alt="Tradicional II: Ilha dos Cocos, Praia da Lula, Lagoa Azul e Praia da Conceição."
              title="Tradicional II: Ilha dos Cocos, Praia da Lula, Lagoa Azul e Praia da Conceição."
              width={1280}
              height={853}
              className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
            />

            <div>
              <h3 className="text-2xl mb-5 uppercase font-bold">
                Tradicional II
              </h3>
              <p>
                Roteiro: Ilha dos Cocos, Praia da Lula, Lagoa Azul e Praia da Conceição.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/assets/images/escuna.jpeg"
              alt="Rota das Águas Claras: Ilha dos Cocos, Saco da Velha, Enseada da Preguiça e Praia da Conceição."
              title="Rota das Águas Claras: Ilha dos Cocos, Saco da Velha, Enseada da Preguiça e Praia da Conceição."
              width={1280}
              height={853}
              className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
            />

            <div>
              <h3 className="text-2xl mb-5 uppercase font-bold">
                Rota das Águas Claras
              </h3>
              <p>
                Roteiro: Ilha dos Cocos, Saco da Velha, Enseada da Preguiça e Praia da Conceição.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/assets/images/escuna.jpeg"
              alt="Escuna de um andar: Ilha dos Cocos, Saco da Velha, Lagoa Azul, Praia da Lula e Ilha Comprida."
              title="Escuna de um andar: Ilha dos Cocos, Saco da Velha, Lagoa Azul, Praia da Lula e Ilha Comprida."
              width={1280}
              height={853}
              className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
            />

            <div>
              <h3 className="text-2xl mb-5 uppercase font-bold">
                Escuna de um andar
              </h3>
              <p>
                Roteiro: Ilha dos Cocos, Saco da Velha, Lagoa Azul, Praia da Lula e Ilha Comprida.
              </p>
            </div>
          </div>
        </div>
        <Link href="https://wa.me/+5524998793280" target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
          Reserve já!
        </Link>
      </div>

      {/* <div>
        <div className="mb-5">
          <h3 className="text-2xl mb-5 uppercase font-bold">
            Tradicional II
          </h3>
          <p>
            Roteiro: Ilha dos Cocos, Praia da Lula, Lagoa Azul e Praia da Conceição.
          </p>
        </div>

        <div className="overflow-hidden mb-5">
          <div className="overflow-hidden flex items-center justify-center p-4">
            <div className="flex w-full max-w-7xl h-[30vh] gap-3 items-center justify-center">
              {sliding.map((panel, index) => (
                <div key={index} onClick={() => handleClick(index)} className={`h-full rounded-2xl cursor-pointer transition-all duration-300 ease-in-out overflow-hidden ${expandedIndex === index ? "w-[30%]" : "w-[10%]"} min-w-40px block`}>
                  <Image
                    src={panel.image}
                    alt="Slider"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-top transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link href="https://wa.me/+5524998793280" target="_blank" className="bg-white text-black font-bold rounded-lg cursor-pointer p-2">
          Reserve já!
        </Link>
      </div> */}



      {/* <div className="clear-both block">
        <p className="float-left border border-black">
          Tradicional: <br />Roteiro: Ilha dos Cocos, Praia da Lula, Ilha da Pescaria e Praia da Conceição.
          <br />
          FOTOS FOTOS FOTOS FOTOS
          <br />
          <Link href="https://wa.me/+5524998793280" target="_blank">
            Botão Reserve já!
          </Link>
        </p>
        <p className="float-left border border-black">
          Tradicional II: <br />Roteiro: Ilha dos Cocos, Praia da Lula, Lagoa Azul e Praia da Conceição.
          <br />
          FOTOS FOTOS FOTOS FOTOS
          <br />
          <Link href="https://wa.me/+5524998793280" target="_blank">
            Botão Reserve já!
          </Link>
        </p>
        <p className="float-left border border-black">
          Rota das Águas Claras: <br />Roteiro: Ilha dos Cocos, Saco da Velha, Enseada da Preguiça e Praia da Conceição.
          <br />
          FOTOS FOTOS FOTOS FOTOS
          <br />
          <Link href="https://wa.me/+5524998793280" target="_blank">
            Botão Reserve já!
          </Link>
        </p>
        <p className="float-left border border-black">
          Escuna de um andar: <br />Roteiro: Ilha dos Cocos, Saco da Velha, Lagoa Azul, Praia da Lula e Ilha Comprida.
          <br />
          FOTOS FOTOS FOTOS FOTOS
          <br />
          <Link href="https://wa.me/+5524998793280" target="_blank">
            Botão Reserve já!
          </Link>
        </p>
      </div> */}
    </section>
  )
}