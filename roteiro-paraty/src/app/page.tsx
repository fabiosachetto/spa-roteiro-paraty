"use client";
// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>

        <nav className="w-full border border-red-600">
          <Link href="nav"></Link>
          <ol className="h-8 flex justify-center text-xl font-bold">
            <li className="float-left mr-3 hover:text-orange-400">
              <Link href="#home">
                Home
              </Link>
            </li>
            <li className="float-left mr-3 hover:text-orange-400">
              <Link href="#roteiros">
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
          <h1 className="text-3xl">Home</h1>
        </section>

        <section id="roteiros" className="h-80 mt-7 border border-green-600">
          <h1 className="text-3xl">Roteiros</h1>
        </section>

        <section id="sobrenos" className="h-80 mt-7 border border-orange-500">
          <h1 className="text-3xl">Sobre Nós</h1>
        </section>
      </div>

      <footer id="contatos" className="min-h-40 mt-5 border border-amber-300 overflow-hidden">
        <ol className="text-center">
          <li className="mb-4">
            <h2 className="text-3xl mb-3">
              Contatos
            </h2>
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
          <li className="mb-4 hover:text-orange-400">
            <Link href="https://www.google.com/maps/dir//Casa+Poema+Paraty+-+Av.+Candido+Portinari,+156+-+Portal+das+Artes,+Paraty+-+RJ,+23970-000/@-23.2171147,-44.8145765,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9d6d026d6383e3:0xc8d0d9c9bfcdbb9!2m2!1d-44.7321799!2d-23.2171372?hl=pt-BR&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" target="_blank">
              Endereço
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

