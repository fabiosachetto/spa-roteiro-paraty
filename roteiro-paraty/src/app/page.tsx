import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <div className="text-center">

        <section id="escuna" className="mt-7 p-7 text-white text-center">

          <h2 className="text-4xl mb-5 uppercase">Escunas</h2>

          <div className="inline-block">
            <Image
              src="/assets/images/escuna.jpeg"
              alt="Conheça Nossos Roteiros de Escunas"
              title="Conheça Nossos Roteiros de Escunas"
              width={500}
              height={333}
              className="object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
            />
          </div>

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
          </div>*/}

          <div className="mt-4">
            <Link href="/escuna" className="uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
              Saiba Mais
            </Link>
          </div>
        </section>


        <section id="jeep" className="mt-7 p-7 text-white">
          <h2 className="text-4xl mb-5 uppercase">Jeep (Cachoeiras)</h2>
          <div className="inline-block">
            <Image
              src="/assets/images/jeep.jpeg"
              alt="Conheça Nossos Roteiros de Jeep"
              title="Conheça Nossos Roteiros de Jeep"
              width={500}
              height={333}
              className="object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
            />
          </div>

          <div className="mt-4">
            <Link href="/jeep" className="uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
              Saiba Mais
            </Link>
          </div>
        </section>

        <section id="van" className="mt-7 p-7 text-white">
          <h2 className="text-4xl mb-5 uppercase">Van (Trindade)</h2>
          <div className="inline-block">
            <Image
              src="/assets/images/van.jpeg"
              alt="Conheça Nossos Roteiros de Van"
              title="Conheça Nossos Roteiros de Van"
              width={500}
              height={333}
              className="object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
            />
          </div>

          <div className="mt-4">
            <Link href="/van" className="uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
              Saiba Mais
            </Link>
          </div>
        </section>

        <section id="lancha" className="mt-7 p-7 text-white">
          <h2 className="text-4xl mb-5 uppercase">Lancha (Privativa)</h2>
          <div className="inline-block">
            <Image
              src="/assets/images/lancha.png"
              alt="Conheça Nossos Roteiros de Lancha"
              title="Conheça Nossos Roteiros de Lancha"
              width={500}
              height={333}
              className="object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
            />
          </div>

          <div className="mt-4">
            <Link href="/lancha" className="uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
              Saiba Mais
            </Link>
          </div>
        </section>

        <section id="traineira" className="mt-7 p-7 text-white">
          <h2 className="text-4xl mb-5 uppercase">Traineira (Privativa)</h2>
          <div className="inline-block">
            <Image
              src="/assets/images/traineira.png"
              alt="Conheça Nossos Roteiros de Traineira"
              title="Conheça Nossos Roteiros de Traineira"
              width={500}
              height={333}
              className="object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
            />
          </div>

          <div className="mt-4">
            <Link href="/traineira" className="uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
              Saiba Mais
            </Link>
          </div>
        </section>

        <section id="veleiro" className="mt-7 p-7 text-white">
          <h2 className="text-4xl mb-5 uppercase">Veleiro (Privativo)</h2>
          <div className="inline-block">
            <Image
              src="/assets/images/veleiro.png"
              alt="Conheça Nossos Roteiros de Veleiro"
              title="Conheça Nossos Roteiros de Veleiro"
              width={500}
              height={333}
              className="object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
            />
          </div>

          <div className="mt-4">
            <Link href="/veleiro" className="uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
              Saiba Mais
            </Link>
          </div>
        </section>

        <section id="programas" className="mt-7 p-7 text-white bg-amber-950">
          <h2 className="text-4xl mb-5 uppercase">Programas Personalizados</h2>
          <div className="inline-block">
            <Image
              src="/assets/images/personalizado.png"
              alt="Conheça Nossos Roteiros de Passeios Personalizados"
              title="Conheça Nossos Roteiros de Passeios Personalizados"
              width={500}
              height={333}
              className="object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
            />
          </div>

          <div className="mt-4">
            <Link href="/personalizado" className="uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
              Saiba Mais
            </Link>
          </div>
        </section>

        <section id="quemsomosnos" className="mt-7 p-7 bg-lime-200">
          <h2 className="text-4xl uppercase">Quem Somos Nós</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros tortor, bibendum ac hendrerit et, finibus eu eros. Morbi laoreet quam at rutrum venenatis. Quisque eget orci eu sapien scelerisque efficitur nec auctor sem. Integer scelerisque velit sed mi sollicitudin ornare. Nam rhoncus, sem sit amet suscipit commodo, lorem tortor maximus dolor, et sodales ligula leo in odio. Phasellus feugiat commodo risus quis pharetra. Curabitur lobortis lacus ut eros mollis ultrices. Duis sit amet imperdiet diam. Vivamus volutpat nulla vel dui faucibus semper. Sed rhoncus diam quis orci hendrerit rutrum. Nam in ante in eros tempus posuere vel vitae arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec facilisis tortor.
          </p>
        </section>
      </div>
    </div >

  );
};

