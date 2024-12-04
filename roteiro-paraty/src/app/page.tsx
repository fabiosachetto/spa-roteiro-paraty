"use client";
import { Navbar } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <Navbar />

      <div className="text-center">

        <section id="quemsomosnos" className="mt-7 p-7">
          <h2 className="text-4xl uppercase">Quem Somos Nós</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros tortor, bibendum ac hendrerit et, finibus eu eros. Morbi laoreet quam at rutrum venenatis. Quisque eget orci eu sapien scelerisque efficitur nec auctor sem. Integer scelerisque velit sed mi sollicitudin ornare. Nam rhoncus, sem sit amet suscipit commodo, lorem tortor maximus dolor, et sodales ligula leo in odio. Phasellus feugiat commodo risus quis pharetra. Curabitur lobortis lacus ut eros mollis ultrices. Duis sit amet imperdiet diam. Vivamus volutpat nulla vel dui faucibus semper. Sed rhoncus diam quis orci hendrerit rutrum. Nam in ante in eros tempus posuere vel vitae arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec facilisis tortor.
          </p>
        </section>

        <section id="escuna" className="mt-7 p-7">
          <h2 className="text-4xl text-white uppercase">Escuna</h2>
        </section>

        <section id="lancha" className="mt-7 p-7">
          <h2 className="text-4xl text-white uppercase">Lancha Privativa</h2>
        </section>

        <section id="programas" className="mt-7 p-7">
          <h2 className="text-4xl text-white uppercase">Programas Personalizados</h2>
        </section>

        <section id="veleiro" className="mt-7 p-7">
          <h2 className="text-4xl text-white uppercase">Veleiro Privativo</h2>
        </section>

        <section id="jeep" className="mt-7 p-7">
          <h2 className="text-4xl text-white uppercase">Jeep (Cachoeiras)</h2>
        </section>

        <section id="clientes" className="mt-7 p-7">
          <h2 className="text-4xl text-white uppercase">Clientes</h2>
        </section>

        <section id="feedback" className="mt-7 p-7">
          <h2 className="text-4xl text-white uppercase">Feedback</h2>
        </section>
      </div>

      <footer id="contato" className="mt-7 p-7 overflow-hidden">
        <ol className="text-center">
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

