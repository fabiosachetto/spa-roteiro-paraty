import { AlertIcon, ClockIcon } from "@/components/Icons/Icons";
import Image from "next/image";
import Link from "next/link";

export default function Escunas() {
  return (
    <section id="escuna" className="mt-7 p-7 text-white text-center">
      <h2 className="text-4xl mb-5 uppercase">Escunas</h2>

      <div className="pb-7">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Tradicional
        </h3>

        <div className="inline-block">
          <Image
            src="/assets/images/escuna-tradicional.jpeg"
            alt="Tradicional: Ilha dos Cocos, Praia da Lula, Ilha da Pescaria (Lagoa Azul) e Praia Vermelha."
            title="Tradicional: Ilha dos Cocos, Praia da Lula, Ilha da Pescaria (Lagoa Azul) e Praia Vermelha."
            width={300}
            height={199}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Roteiro:</strong> Ilha dos Cocos, Praia da Lula, Ilha da Pescaria (Lagoa Azul) e Praia Vermelha.</p>

        <p className="inline-block">
          <ClockIcon className="w-4 h-4 mr-2 float-left" />
          <strong>Início:</strong> 11h | <strong>Retorno:</strong> 17h
        </p>

        <p><strong>Serviços:</strong> Bar e restaurante a bordo, música ao vivo, fotógrafo profissional, escorregador e ducha de água doce.</p>

        <p className="mb-6 inline-block">
          <AlertIcon className="w-5 h-5 mr-2 float-left" />
          <strong className="float-left contents">Não é permitido embarcar com cooler e caixa de som!</strong>
        </p>

        <p><strong>Valor:</strong> R$150 por pessoa.</p>

        <div className="mt-5">
          <Link href="https://api.whatsapp.com/send?phone=5524998793280&text=Olá,%20vim%20do%20site%20e%20tenho%20interesse%20no%20passeio%20de%20Escuna:%20Tradicional." target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
            Reserve já!
          </Link>
        </div>
      </div>

      <div className="py-7 border-t border-double border-t-amber-900">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Tradicional II
        </h3>
        <div className="inline-block">
          <Image
            src="/assets/images/escuna-tradicional-ii.jpeg"
            alt="Tradicional II: Ilha dos Cocos, Praia da Conceição, Lagoa Azul e Praia da Lula."
            title="Tradicional II: Ilha dos Cocos, Praia da Conceição, Lagoa Azul e Praia da Lula."
            width={300}
            height={169}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Roteiro:</strong> Ilha dos Cocos, Praia da Conceição, Lagoa Azul e Praia da Lula.</p>

        <p className="inline-block">
          <ClockIcon className="w-4 h-4 mr-2 float-left" />
          <strong>Início:</strong> 11h | <strong>Retorno:</strong> 17h
        </p>

        <p><strong>Serviços:</strong> Bar e restaurante a bordo, música ao vivo e fotógrafo profissional.</p>

        <p className="mb-6 inline-block">
          <AlertIcon className="w-5 h-5 mx-2 float-left" />
          <strong className="float-left contents">Não é permitido embarcar com cooler e caixa de som!</strong>
        </p>

        <p><strong>Valor:</strong> R$110 por pessoa.</p>

        <div className="mt-5">
          <Link href="https://api.whatsapp.com/send?phone=5524998793280&text=Olá,%20vim%20do%20site%20e%20tenho%20interesse%20no%20passeio%20de%20Escuna:%20Tradicional%20II." target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
            Reserve já!
          </Link>
        </div>
      </div>

      <div className="py-7 border-t border-double border-t-amber-900">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Rota das Águas Claras
        </h3>

        <div className="inline-block">
          <Image
            src="/assets/images/escuna-aguas.jpeg"
            alt="Rota das Águas Claras: Ilha dos Cocos, Praia do Saco da Velha, Lagoa Azul e Praia da Conceição."
            title="Rota das Águas Claras: Ilha dos Cocos, Praia do Saco da Velha, Lagoa Azul e Praia da Conceição."
            width={300}
            height={169}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Roteiro:</strong> Ilha dos Cocos, Praia do Saco da Velha, Lagoa Azul e Praia da Conceição.</p>

        <p className="inline-block">
          <ClockIcon className="w-4 h-4 mr-2 float-left" />
          <strong>Início:</strong> 11h | <strong>Retorno:</strong> 17h
        </p>

        <p><strong>Serviços:</strong> Bar e restaurante a bordo, música ao vivo, fotógrafo profissional, escorregador e ducha de água doce.</p>

        <p className="mb-6 inline-block">
          <AlertIcon className="w-5 h-5 mx-2 float-left" />
          <strong className="float-left contents">Não é permitido embarcar com cooler e caixa de som!</strong>
        </p>

        <p><strong>Valor:</strong> R$150 por pessoa.</p>

        <div className="mt-5">
          <Link href="https://api.whatsapp.com/send?phone=5524998793280&text=Olá,%20vim%20do%20site%20e%20tenho%20interesse%20no%20passeio%20de%20Escuna:%20Rota%20das%20Águas%20Claras." target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
            Reserve já!
          </Link>
        </div>
      </div>

      <div className="py-7 border-t border-double border-t-amber-900">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Escuna de um andar
        </h3>
        <div className="inline-block">
          <Image
            src="/assets/images/escuna-um-andar.jpeg"
            alt="Escuna de um andar: Ilha dos Cocos, Praia da Lula, Lagoa Azul, Praia Vermelha e Ilha Comprida."
            title="Escuna de um andar: Ilha dos Cocos, Praia da Lula, Lagoa Azul, Praia Vermelha e Ilha Comprida."
            width={300}
            height={169}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Roteiro:</strong> Ilha dos Cocos, Praia da Lula, Lagoa Azul, Praia Vermelha e Ilha Comprida.</p>

        <p className="inline-block">
          <ClockIcon className="w-4 h-4 mr-2 float-left" />
          <strong>Início:</strong> 9h30 | <strong>Retorno:</strong> 15h30
        </p>

        <p><strong>Serviços:</strong> Bar e restaurante a bordo, música ao vivo e fotógrafo profissional.</p>

        <p className="mb-6 inline-block">
          <AlertIcon className="w-5 h-5 mx-2 float-left" />
          <strong className="float-left contents">Não é permitido embarcar com cooler e caixa de som!</strong>
        </p>

        <p><strong>Valor:</strong> R$100 por pessoa.</p>

        <div className="mt-5">
          <Link href="https://api.whatsapp.com/send?phone=5524998793280&text=Olá,%20vim%20do%20site%20e%20tenho%20interesse%20no%20passeio%20de%20Escuna:%20De%20um%20Andar." target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
            Reserve já!
          </Link>
        </div>
      </div>

      <div className="pt-7 border-t border-double border-t-amber-900">
        <h3 className="text-2xl mb-5 uppercase font-bold">
          Passeio Alternativo
        </h3>
        <div className="inline-block">
          <Image
            src="/assets/images/escuna-alternativo.jpeg"
            alt="Passeio Alternativo: Ilha Comprida, Ilha da Pescaria e Praia Vermelha."
            title="Passeio Alternativo: Ilha Comprida, Ilha da Pescaria e Praia Vermelha."
            width={300}
            height={400}
            className="mb-5 object-cover transition duration-500 hover:scale-105 rounded-lg border-4 border-white"
          />
        </div>

        <p className="mb-6"><strong>Roteiro:</strong> Ilha Comprida, Ilha da Pescaria e Praia Vermelha.</p>

        <p className="inline-block">
          <ClockIcon className="w-4 h-4 mr-2 float-left" />
          <strong>Início:</strong> 12h | <strong>Retorno:</strong> 17h
        </p>

        <p><strong>Serviços:</strong> Bar a bordo, música ambiente e flutuadores disponíveis.</p>

        <p className="mb-6 inline-block">
          <AlertIcon className="w-5 h-5 mx-2 float-left" />
          <strong className="float-left contents">O almoço ocorrerá em um restaurante fora da embarcação.</strong>
        </p>

        <p><strong>Valor:</strong> R$120 por pessoa.</p>

        <div className="mt-5">
          <Link href="https://api.whatsapp.com/send?phone=5524998793280&text=Olá,%20vim%20do%20site%20e%20tenho%20interesse%20no%20passeio%20de%20Escuna:%20Alternativo." target="_blank" className="transition delay-150 duration-300 ease-in-out uppercase font-bold py-2 px-12 rounded-full cursor-pointer bg-[#0CC0DF] hover:bg-blue-500">
            Reserve já!
          </Link>
        </div>
      </div>
    </section>
  );
};