"use client";
import { Navbar } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex justify-center w-full bg-black bg-opacity-50">

        <Link href="nav"></Link>

        <Navbar />

      </header>

      <div className="text-center">
        <section id="sobrenos" className="mt-7 p-7">
          <h2 className="text-3xl uppercase">Quem Somos Nós</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros tortor, bibendum ac hendrerit et, finibus eu eros. Morbi laoreet quam at rutrum venenatis. Quisque eget orci eu sapien scelerisque efficitur nec auctor sem. Integer scelerisque velit sed mi sollicitudin ornare. Nam rhoncus, sem sit amet suscipit commodo, lorem tortor maximus dolor, et sodales ligula leo in odio. Phasellus feugiat commodo risus quis pharetra. Curabitur lobortis lacus ut eros mollis ultrices. Duis sit amet imperdiet diam. Vivamus volutpat nulla vel dui faucibus semper. Sed rhoncus diam quis orci hendrerit rutrum. Nam in ante in eros tempus posuere vel vitae arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec facilisis tortor.
          </p>
        </section>

        <section id="home" className="h-80 mt-7 border border-blue-500">
          <h2 className="text-3xl text-black uppercase">Nossas Atividades</h2>
        </section>

        <section id="roteiros" className="h-80 mt-7 border border-green-600">
          <h2 className="text-3xl text-black uppercase">Roteiros</h2>
        </section>


      </div>

      <footer id="contatos" className="min-h-40 mt-5 bg-black bg-opacity-75 overflow-hidden text-white">
        <ol className="text-center">
          <li className="mb-4">
            <h2 className="text-3xl mb-3">
              Contatos
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
    </main>

  );
};

