import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
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
            className="hidden md:block object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
          <Image
            src="/assets/images/escuna.jpeg"
            alt="Conheça Nossos Roteiros de Escunas"
            title="Conheça Nossos Roteiros de Escunas"
            width={300}
            height={200}
            className="block md:hidden object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <div className="mt-4">
          <Link href="/escunas" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
            Saiba Mais
          </Link>
        </div>
      </section>

      <section id="jeep" className="mt-7 p-7 text-white">
        <h2 className="text-4xl mb-5 uppercase">Jeep</h2>
        <div className="inline-block">
          <Image
            src="/assets/images/jeep.jpeg"
            alt="Conheça Nossos Roteiros de Jeep"
            title="Conheça Nossos Roteiros de Jeep"
            width={500}
            height={333}
            className="hidden md:block object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
          <Image
            src="/assets/images/jeep.jpeg"
            alt="Conheça Nossos Roteiros de Jeep"
            title="Conheça Nossos Roteiros de Jeep"
            width={300}
            height={200}
            className="block md:hidden object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <div className="mt-4">
          <Link href="/jeep" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
            Saiba Mais
          </Link>
        </div>
      </section>

      <section id="privativos" className="mt-7 p-7 text-white">
        <h2 className="text-4xl mb-5 uppercase">Privativos</h2>

        <h3 className="text-2xl mb-5 uppercase font-bold">
          Lanchas, Veleiros e Mais
        </h3>

        <div className="inline-block">
          <Image
            src="/assets/images/lancha.png"
            alt="Conheça Nossos Roteiros Privativos"
            title="Conheça Nossos Roteiros Privativos"
            width={500}
            height={376}
            className="hidden md:block object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
          <Image
            src="/assets/images/lancha.png"
            alt="Conheça Nossos Roteiros Privativos"
            title="Conheça Nossos Roteiros Privativos"
            width={300}
            height={226}
            className="block md:hidden object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <div className="mt-4">
          <Link href="/privativos" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
            Saiba Mais
          </Link>
        </div>
      </section>

      {/* <section id="van" className="mt-7 p-7 text-white">
        <h2 className="text-4xl mb-5 uppercase">Van (Trindade)</h2>
        <div className="inline-block">
          <Image
            src="/assets/images/van.jpg"
            alt="Conheça Nossos Roteiros de Van"
            title="Conheça Nossos Roteiros de Van"
            width={300}
            height={400}
            className="object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <div className="mt-4">
          <Link href="/van" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
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
            width={300}
            height={226}
            className="object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <div className="mt-4">
          <Link href="/lancha" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
            Saiba Mais
          </Link>
        </div>
      </section>

      <section id="traineira" className="mt-7 p-7 text-white">
        <h2 className="text-4xl mb-5 uppercase">Traineira (Privativa)</h2>
        <div className="inline-block">
          <Image
            src="/assets/images/traineira.jpeg"
            alt="Conheça Nossos Roteiros de Traineira"
            title="Conheça Nossos Roteiros de Traineira"
            width={300}
            height={400}
            className="object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <div className="mt-4">
          <Link href="/traineira" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
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
            width={300}
            height={214}
            className="object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <div className="mt-4">
          <Link href="/veleiro" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
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
            width={300}
            height={303}
            className="object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <div className="mt-4">
          <Link href="/personalizado" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
            Saiba Mais
          </Link>
        </div>
      </section>

      {/* <section id="quemsomosnos" className="mt-7 p-7 bg-lime-200">
        <h2 className="text-4xl uppercase">Quem Somos Nós</h2>
        <p>
          Somos uma agência online criada para fazer você ter momentos incríveis na cidade de Paraty. Entre em contato conosco, tire suas dúvidas, compartilhe suas expectativas e te ajudaremos a encontrar o passeio perfeito para você.
        </p>
      </section> */}
    </div>
  );
};

