"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex justify-center w-full bg-white bg-opacity-75">

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
          <h1 className="text-3xl text-white">Home</h1>
        </section>

        <section id="roteiros" className="h-80 mt-7 border border-green-600">
          <h1 className="text-3xl text-white">Roteiros</h1>
        </section>

        <section id="sobrenos" className="h-80 mt-7 bg-black bg-opacity-75">
          <h1 className="text-3xl text-white">Sobre Nós</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros tortor, bibendum ac hendrerit et, finibus eu eros. Morbi laoreet quam at rutrum venenatis. Quisque eget orci eu sapien scelerisque efficitur nec auctor sem. Integer scelerisque velit sed mi sollicitudin ornare. Nam rhoncus, sem sit amet suscipit commodo, lorem tortor maximus dolor, et sodales ligula leo in odio. Phasellus feugiat commodo risus quis pharetra. Curabitur lobortis lacus ut eros mollis ultrices. Duis sit amet imperdiet diam. Vivamus volutpat nulla vel dui faucibus semper. Sed rhoncus diam quis orci hendrerit rutrum. Nam in ante in eros tempus posuere vel vitae arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec facilisis tortor.

            Nunc at purus et libero consectetur volutpat. Sed tempor bibendum porttitor. Donec finibus vitae magna ac condimentum. Nulla vitae blandit est. Donec pretium facilisis augue, ac venenatis lacus cursus vel. Sed ut rhoncus sapien, vitae porta velit. Proin vel dolor et tellus luctus hendrerit. Donec eu mi quis purus porttitor posuere et ac neque. Nullam elementum egestas orci eu scelerisque.

            Praesent quis nibh vitae justo imperdiet ultricies eget ut ex. Maecenas venenatis, felis et elementum ullamcorper, est arcu blandit neque, sit amet rutrum justo diam non ipsum. Suspendisse sed aliquet magna. Quisque rutrum ligula eu turpis porttitor finibus. Proin accumsan est ac dictum dapibus. Sed ultrices purus quis finibus dignissim. Maecenas ornare, ipsum ac facilisis mollis, ipsum velit imperdiet orci, sit amet scelerisque mauris leo at enim. Phasellus sodales sapien in neque tempus, eget blandit urna elementum. Sed sit amet neque sit amet justo vulputate dictum eget et risus. Cras gravida elit ut elit tempor efficitur.

            In lacinia turpis at metus aliquet pretium. Donec feugiat, nisl non scelerisque egestas, ligula nunc facilisis velit, ac maximus diam augue quis erat. Duis iaculis augue feugiat, feugiat est vel, molestie est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Suspendisse potenti. Donec at consequat sapien.
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

