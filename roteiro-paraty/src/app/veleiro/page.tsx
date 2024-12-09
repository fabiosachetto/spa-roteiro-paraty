import Image from "next/image";
import Link from "next/link";

export default function Veleiro() {
  return (
    <section id="veleiro" className="mt-7 pt-7 text-white text-center">
      <h2 className="text-4xl mb-5 uppercase">Veleiro</h2>

      <div className="pb-7">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Privativo
        </h3>
        <div className="inline-block">
          <Image
            src="/assets/images/veleiro.png"
            alt="Conheça Nossos Roteiros de Veleiro"
            title="Conheça Nossos Roteiros de Veleiro"
            width={500}
            height={333}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Consultar por disponibilidade.</strong></p>

        <div className="mt-5">
          <Link href="https://wa.me/+5524998793280" target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
            Reserve já!
          </Link>
        </div>
      </div>
    </section>
  )
}