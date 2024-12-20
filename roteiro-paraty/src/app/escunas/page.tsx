import { AlertIcon, ClockIcon } from "@/components/Icons/Icons";
import infosEscunas from "@/data/infosEscunas.json";
import Image from "next/image";
import Link from "next/link";

export default function Escunas() {
  return (
    <section id="escuna" className="mt-7 p-7 text-white text-center">
      <h2 className="text-4xl uppercase">Escunas</h2>
      {infosEscunas.map((infoEscuna, index) => {
        return (
          <div key={infoEscuna.titulo} className={`pt-7 ${index !== infosEscunas.length - 1 ? "py-7 border-b border-double border-b-amber-900" : ''}`}>
            <h3 className="text-2xl mb-5 uppercase font-bold">
              {infoEscuna.titulo}
            </h3>

            <div className="inline-block">
              <Image
                src={`/assets/images/${infoEscuna.imagem}`}
                alt={infoEscuna.alt_title}
                title={infoEscuna.alt_title}
                width={500}
                height={332}
                className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
              <Image
                src={`/assets/images/${infoEscuna.imagem}`}
                alt={infoEscuna.alt_title}
                title={infoEscuna.alt_title}
                width={300}
                height={199}
                className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
            </div>

            <p className="mb-6"><strong>Roteiro:</strong> {infoEscuna.roteiro}</p>

            <p className="table m-auto">
              <ClockIcon className="w-4 h-4 mr-2 float-left" />
              <strong>Início:</strong> {infoEscuna.horario_inicio} | <strong>Retorno:</strong> {infoEscuna.horario_retorno}
            </p>

            <p><strong>Serviços:</strong> {infoEscuna.servicos}</p>

            <div className="mb-6 inline-flex px-0 2xl:px-10">
              <div className="">
                <AlertIcon />
              </div>
              <strong className="text-justify inline-flex">{infoEscuna.alerta}</strong>
            </div>

            <p><strong>Valor:</strong> {infoEscuna.valor} por pessoa.</p>

            <div className="mt-5">
              <Link href={infoEscuna.contato} target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
                Reserve já!
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};