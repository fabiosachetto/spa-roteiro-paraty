"use client";
import { Navbar } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <Navbar />

      <div className="text-center">



        <section id="escuna" className="flex mt-7 p-7 text-white">
          <h2 className="text-4xl uppercase">Escuna</h2>
          <div className="clear-both block">
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
              Tradicional II: <br />Ilha dos Cocos, Praia da Lula, Lagoa Azul e Praia da Conceição.
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
              Escuna de um andar: <br />Ilha dos Cocos, Saco da Velha, Lagoa Azul, Praia da Lula e Ilha Comprida.
              <br />
              FOTOS FOTOS FOTOS FOTOS
              <br />
              <Link href="https://wa.me/+5524998793280" target="_blank">
                Botão Reserve já!
              </Link>
            </p>
          </div>
        </section>

        <section id="jeep" className="mt-7 p-7 text-white">
          <h2 className="text-4xl uppercase">Jeep (Cachoeiras)</h2>
          <p>
            Cachoeiras e Alambiques: Alambique Paratiana, Cachoeira da Usina + Cachoeira da Pedra Branca, Alambique Pedra Branca, Poço do Tarzan + Cachoeira do Tobogã e Queijaria.
          </p>
        </section>

        <section id="van" className="mt-7 p-7 text-white">
          <h2 className="text-4xl uppercase">Van (Trindade)</h2>
          <p>
            Trindade: Praia do Cepilho, Praia dos Ranchos, Praia do Meio, Praia do Cachadaço e Piscinas Naturais
          </p>
        </section>

        <section id="lancha" className="mt-7 p-7">
          <h2 className="text-4xl uppercase">Lancha (Privativa)</h2>
          <p>
            Colocar imagens futuramente
          </p>
        </section>

        <section id="traineira" className="mt-7 p-7 text-white">
          <h2 className="text-4xl uppercase">Traineira (Privativa)</h2>
          <p>
            Colocar imagens futuramente
          </p>
        </section>

        <section id="veleiro" className="mt-7 p-7 text-white">
          <h2 className="text-4xl uppercase">Veleiro (Privativo)</h2>
          <p>
            Colocar imagens futuramente
          </p>
        </section>

        <section id="programas" className="mt-7 p-7 text-white">
          <h2 className="text-4xl uppercase">Programas Personalizados</h2>
          <p>
            Colocar imagens futuramente
          </p>
        </section>

        <section id="quemsomosnos" className="mt-7 p-7">
          <h2 className="text-4xl uppercase">Quem Somos Nós</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros tortor, bibendum ac hendrerit et, finibus eu eros. Morbi laoreet quam at rutrum venenatis. Quisque eget orci eu sapien scelerisque efficitur nec auctor sem. Integer scelerisque velit sed mi sollicitudin ornare. Nam rhoncus, sem sit amet suscipit commodo, lorem tortor maximus dolor, et sodales ligula leo in odio. Phasellus feugiat commodo risus quis pharetra. Curabitur lobortis lacus ut eros mollis ultrices. Duis sit amet imperdiet diam. Vivamus volutpat nulla vel dui faucibus semper. Sed rhoncus diam quis orci hendrerit rutrum. Nam in ante in eros tempus posuere vel vitae arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec facilisis tortor.
          </p>
        </section>
      </div>

      <footer id="contato" className="mt-7 p-7 overflow-hidden bg-black bg-opacity-50">
        <ol className="text-center text-white">
          <li className="mb-4">
            <h2 className="text-4xl uppercase">
              Contato
            </h2>
          </li>
          <li className="mb-4 hover:text-orange-400">
            <Link href="https://instagram.com/seuroteiroemparaty" target="_blank">
              Instagram
            </Link>
          </li>
          <li className="mb-4 hover:text-orange-400">
            <Link href="https://wa.me/+5524998793280" target="_blank">
              WhatsApp
            </Link>
          </li>
          <li className="mb-4 hover:text-orange-400">
            <Link href="mailto:seuroteiroemparaty@gmail.com">
              E-Mail
            </Link>
          </li>
        </ol>
      </footer>
      <div className="text-2xl fixed bottom-3 right-12 text-orange-400 font-bold">
        <Link href="#nav">
          Clique aqui para <br />
          Voltar ao Topo
        </Link>
      </div>
    </div>

  );
};

