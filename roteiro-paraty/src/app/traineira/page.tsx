import Image from "next/image";
import Link from "next/link";

export default function Traineira() {
  return (
    <section id="traineira" className="mt-7 pt-7 text-white text-center">
      <h2 className="text-4xl mb-5 uppercase">Traineira</h2>

      <div className="pb-7 px-3">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Privativa
        </h3>
        <div className="inline-block">
          <Image
            src="/assets/images/traineira-descricao.jpeg"
            alt="Traineira Privativa: Roteiros e horários definidos pelo cliente."
            title="Traineira Privativa: Roteiros e horários definidos pelo cliente."
            width={300}
            height={400}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Roteiros e horários definidos pelo cliente.</strong></p>

        <p className="mb-6"><strong>Disponibilizamos:</strong> Churrasqueira, cooler, gelo, água, frutas, flutuadores, snorkel e ducha de água doce.</p>

        <p><strong>Valores:</strong> À partir de R$1.000 (Capacidade para até 25 pessoas.)</p>

        <div className="mt-5">
          <Link href="https://wa.me/+5524998793280" target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
            Reserve já!
          </Link>
        </div>
      </div>
    </section>
  )
}