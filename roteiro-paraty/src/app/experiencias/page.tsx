import { AlertIcon, ClockIcon, WifiIcon } from "@/components/Icons/Icons";
import Image from "next/image";
import Link from "next/link";
import infosExperiencias from "@/data/infosExperiencias.json";

export default function Experiencias() {
  return (
    <section id="expericeias" className="mt-7 p-7 text-center">
      <h2 className="text-4xl uppercase">Experiências</h2>
      {infosExperiencias.map((infoExperiencia, index) => {
        return (
          <div
            key={infoExperiencia.titulo}
            className={`pt-7 ${
              index !== infosExperiencias.length - 1
                ? "py-7 border-b border-double border-b-amber-900"
                : ""
            }`}>
            <h3 className="text-2xl mb-5 uppercase font-bold">
              {infoExperiencia.titulo}
            </h3>

            <div className="inline-block">
              <Image
                src={`/assets/images/${infoExperiencia.imagem}`}
                alt={infoExperiencia.alt_title}
                title={infoExperiencia.alt_title}
                width={500}
                height={332}
                className="hidden md:block mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
              <Image
                src={`/assets/images/${infoExperiencia.imagem}`}
                alt={infoExperiencia.alt_title}
                title={infoExperiencia.alt_title}
                width={300}
                height={199}
                className="block md:hidden mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
              />
            </div>

            <p className="mb-5">
              <strong>Roteiro:</strong> {infoExperiencia.roteiro}
            </p>

            <p className="table mb-5 m-auto">
              <strong>
                <ClockIcon className="w-5 h-5 mr-2 float-left" /> Início:
              </strong>
              {infoExperiencia.horario_inicio} | <strong>Retorno: </strong>
              {infoExperiencia.horario_retorno}
            </p>

            <p className="mb-5">
              <strong>Serviços:</strong> {infoExperiencia.servicos}
            </p>

            {infoExperiencia.wifi && (
              <p className="table mb-5 m-auto">
                <strong>
                  <WifiIcon className="w-5 h-5 mr-2 float-left" />
                  {infoExperiencia.wifi}
                </strong>
              </p>
            )}

            <p className="table mb-5 m-auto">
              <strong>
                <AlertIcon className="w-6 h-6 mr-2 float-left" />
                {infoExperiencia.alerta}
              </strong>
            </p>

            <p className="mb-5">
              <strong>Valor:</strong> {infoExperiencia.valor} por pessoa.
            </p>

            <div className="mt-5">
              <Link
                href={infoExperiencia.contato}
                target="_blank"
                className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
                Reserve já!
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
