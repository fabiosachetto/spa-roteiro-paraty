"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex justify-center w-full border border-red-600">

        <Link href="nav"></Link>

        <nav className="w-2/5 py-2">
          <div className="flex float-left">
            <Image
              src={`https://scontent-gru2-2.cdninstagram.com/v/t51.2885-19/462109955_403320775974846_3982317904369396721_n.jpg?stp=dst-jpg_tt6&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=106&_nc_ohc=KGmVfDzbR48Q7kNvgFi4OG9&_nc_gid=1c3e7670e07a4b25836df826ace8552b&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AYBXR2teEBsJgQKTdUS9a50vdkwxQAabc2ivbdu2FjIkNg&oe=674FF550&_nc_sid=22de04`}
              alt="Seu Roteiro em Paraty!"
              width={50}
              height={50}
            />
          </div>

          <ol className="mt-3 flex float-right text-xl font-bold">
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

