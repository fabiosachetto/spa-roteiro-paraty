import Image from "next/image";
import Link from "next/link";

export default function Personalizado() {
  return (
    <section id="programas" className="mt-7 p-7 text-white bg-amber-950 text-center">
      <h2 className="text-4xl mb-5 uppercase">Roteiros Personalizados</h2>

      <div className="inline-block">
        <Image
          src="/assets/images/personalizado.png"
          alt="Conheça Nossos Roteiros de Passeios Personalizados"
          title="Conheça Nossos Roteiros de Passeios Personalizados"
          width={300}
          height={303}
          className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
        />
      </div>

      <p className="mb-6"><strong>Estaria procurando por um lugar ou roteiro diferente dos que sugerimos? Conte-nos e te ajudaremos a criar o seu próprio passeio!</strong></p>

      <div className="mt-5">
        <Link href="https://wa.me/+5524998793280" target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-6 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
          Reserve já!
        </Link>
      </div>
    </section>
  );
};