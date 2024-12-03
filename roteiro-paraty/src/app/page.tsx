"use client";

import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const openSans = localFont({
  src: "./fonts/OpenSans-Regular.ttf",
  // variable: "--font-geist-sans",
  weight: "100 900",
});
const stella = localFont({
  src: "./fonts/Stella.ttf",
  // variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <main>
      <header className="flex justify-center w-full bg-black bg-opacity-50">

        <Link href="nav"></Link>

        <nav className="w-2/5 py-2">
          <div className="flex float-left">
            <Image
              // src={`https://media-gru1-1.cdn.whatsapp.net/v/t61.24694-24/457793804_1746643146168954_6307120735597528194_n.jpg?ccb=11-4&oh=01_Q5AaIArImlRLoSjTTSa57aZ0U2pRIl22iF-e5pnPvf5EUemR&oe=6757364C&_nc_sid=5e03e0&_nc_cat=103`}
              src="/assets/images/logo-roteiro.png"
              alt="Seu Roteiro em Paraty!"
              width={50}
              height={50}
            />
          </div>

          <ol className="mt-3 flex float-right text-xl font-bold">
            <li className="float-left mr-3 hover:text-orange-400">
              <Link href="#home" className={(`${stella}`)}>
                Nossas Atividades
              </Link>
            </li>
            <li className="float-left mr-3 hover:text-orange-400">
              <Link href="#roteiros" className={(`${openSans}`)}>
                Roteiros
              </Link>
            </li>
            <li className="float-left mr-3 hover:text-orange-400">
              <Link href="#sobrenos">
                Sobre Nós
              </Link>
            </li>
            <li className="float-left hover:text-orange-400">
              <Link href="#contatos">
                Contatos
              </Link>
            </li>
          </ol>
        </nav>
      </header>

      <div className="text-center">
        <section id="home" className="h-80 mt-7 border border-blue-500">
          <h1 className="text-3xl text-black">Nossas Atividades</h1>
        </section>

        <section id="roteiros" className="h-80 mt-7 border border-green-600">
          <h1 className="text-3xl text-black">Roteiros</h1>
        </section>

        <section id="sobrenos" className="h-80 mt-7 bg-black bg-opacity-75">
          <h1 className="text-3xl text-white">Sobre Nós</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros tortor, bibendum ac hendrerit et, finibus eu eros. Morbi laoreet quam at rutrum venenatis. Quisque eget orci eu sapien scelerisque efficitur nec auctor sem. Integer scelerisque velit sed mi sollicitudin ornare. Nam rhoncus, sem sit amet suscipit commodo, lorem tortor maximus dolor, et sodales ligula leo in odio. Phasellus feugiat commodo risus quis pharetra. Curabitur lobortis lacus ut eros mollis ultrices. Duis sit amet imperdiet diam. Vivamus volutpat nulla vel dui faucibus semper. Sed rhoncus diam quis orci hendrerit rutrum. Nam in ante in eros tempus posuere vel vitae arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec facilisis tortor.
          </p>
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

