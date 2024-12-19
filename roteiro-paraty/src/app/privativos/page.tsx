import Image from "next/image";
import Link from "next/link";

export default function Privativo() {
  return (
    <section id="privativos" className="mt-7 p-7 text-white text-center">
      <h2 className="text-4xl mb-5 uppercase">Privativos</h2>

      <div className="pb-7">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Lancha
        </h3>
        <div className="inline-block">
          <Image
            src="/assets/images/lancha.png"
            alt="Lancha Privativa: Roteiros e horários definidos pelo cliente."
            title="Lancha Privativa: Roteiros e horários definidos pelo cliente."
            width={500}
            height={376}
            className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
          <Image
            src="/assets/images/lancha.png"
            alt="Lancha Privativa: Roteiros e horários definidos pelo cliente."
            title="Lancha Privativa: Roteiros e horários definidos pelo cliente."
            width={300}
            height={226}
            className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Roteiros e horários definidos pelo cliente.</strong></p>

        <p className="mb-6"><strong>Disponibilizamos:</strong> Churrasqueira, cooler, gelo, água, frutas, flutuadores e snorkel.</p>

        <p><strong>Valores:</strong> À partir de R$1.500 (Capacidade para até 7 pessoas.)</p>

        <div className="mt-5">
          <Link href="https://api.whatsapp.com/send?phone=5524998793280&text=Olá,%20vim%20do%20site%20e%20tenho%20interesse%20no%20passeio%20Privativo%20de%20Lancha." target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 lg:px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
            Reserve já!
          </Link>
        </div>
      </div>

      <div className="py-7 border-t border-double border-t-white">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Veleiro
        </h3>
        <div className="inline-block">
          <Image
            src="/assets/images/veleiro.png"
            alt="Conheça Nossos Roteiros de Veleiro"
            title="Conheça Nossos Roteiros de Veleiro"
            width={500}
            height={357}
            className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
          <Image
            src="/assets/images/veleiro.png"
            alt="Conheça Nossos Roteiros de Veleiro"
            title="Conheça Nossos Roteiros de Veleiro"
            width={300}
            height={214}
            className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Consultar por disponibilidade.</strong></p>

        <div className="mt-5">
          <Link href="https://api.whatsapp.com/send?phone=5524998793280&text=Olá,%20vim%20do%20site%20e%20tenho%20interesse%20no%20passeio%20Privativo%20de%20Veleiro." target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 lg:px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
            Reserve já!
          </Link>
        </div>
      </div>

      <div className="py-7 border-t border-double border-t-white">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Traineira
        </h3>
        <div className="inline-block">
          <Image
            src="/assets/images/traineira.jpeg"
            alt="Traineira Privativa: Roteiros e horários definidos pelo cliente."
            title="Traineira Privativa: Roteiros e horários definidos pelo cliente."
            width={500}
            height={627}
            className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
          <Image
            src="/assets/images/traineira.jpeg"
            alt="Traineira Privativa: Roteiros e horários definidos pelo cliente."
            title="Traineira Privativa: Roteiros e horários definidos pelo cliente."
            width={300}
            height={376}
            className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Roteiros e horários definidos pelo cliente.</strong></p>

        <p className="mb-6"><strong>Disponibilizamos:</strong> Churrasqueira, cooler, gelo, água, frutas, flutuadores, snorkel e ducha de água doce.</p>

        <p><strong>Valores:</strong> À partir de R$1.000 (Capacidade para até 25 pessoas.)</p>

        <div className="mt-5">
          <Link href="https://api.whatsapp.com/send?phone=5524998793280&text=Olá,%20vim%20do%20site%20e%20tenho%20interesse%20no%20passeio%20Privativo%20de%20Traineira." target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 lg:px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
            Reserve já!
          </Link>
        </div>
      </div>

      <div className="pt-7 border-t border-double border-t-white">

        <h3 className="text-2xl mb-5 uppercase font-bold">
          Roteiros Personalizados
        </h3>

        <div className="inline-block">
          <Image
            src="/assets/images/roteiros-personalizados.png"
            alt="Conheça Nossos Roteiros de Passeios Personalizados."
            title="Conheça Nossos Roteiros de Passeios Personalizados."
            width={500}
            height={298}
            className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
          <Image
            src="/assets/images/roteiros-personalizados.png"
            alt="Conheça Nossos Roteiros de Passeios Personalizados."
            title="Conheça Nossos Roteiros de Passeios Personalizados."
            width={300}
            height={179}
            className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Estaria procurando por um lugar ou roteiro diferente dos que sugerimos? Conte-nos e te ajudaremos a criar o seu próprio passeio!</strong></p>

        <div className="mt-5">
          <Link href="https://api.whatsapp.com/send?phone=5524998793280&text=Olá,%20vim%20do%20site%20e%20tenho%20interesse%20em%20saber%20sobre%20Roteiros%20Personalizados." target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 lg:px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
            Reserve Já!
          </Link>
        </div>
      </div>
    </section>
  );
};