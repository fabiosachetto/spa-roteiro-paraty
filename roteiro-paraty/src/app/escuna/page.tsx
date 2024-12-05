"use client";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useState } from "react";

export default function Escuna() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const sliding = [
    { image: "https://scontent-gru1-2.cdninstagram.com/v/t51.29350-15/462660730_1078718120638464_3224922920941980123_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=oGT8gQvthT4Q7kNvgEXWURy&_nc_gid=0ba90ed7df47458fa1a56bf7308e370a&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ3Njc2MjExNDU3OTIxNzk0NQ%3D%3D.3-ccb7-5&oh=00_AYCbim4OAPzQPMuQkVaC3jYySG5_aJMnS7493Ox4suIScA&oe=6756D5FF&_nc_sid=7a9f4b" },
    { image: "https://scontent-gru1-2.cdninstagram.com/v/t51.29350-15/462660730_1078718120638464_3224922920941980123_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=oGT8gQvthT4Q7kNvgEXWURy&_nc_gid=0ba90ed7df47458fa1a56bf7308e370a&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ3Njc2MjExNDU3OTIxNzk0NQ%3D%3D.3-ccb7-5&oh=00_AYCbim4OAPzQPMuQkVaC3jYySG5_aJMnS7493Ox4suIScA&oe=6756D5FF&_nc_sid=7a9f4b" },
    { image: "https://scontent-gru1-2.cdninstagram.com/v/t51.29350-15/462660730_1078718120638464_3224922920941980123_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=oGT8gQvthT4Q7kNvgEXWURy&_nc_gid=0ba90ed7df47458fa1a56bf7308e370a&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ3Njc2MjExNDU3OTIxNzk0NQ%3D%3D.3-ccb7-5&oh=00_AYCbim4OAPzQPMuQkVaC3jYySG5_aJMnS7493Ox4suIScA&oe=6756D5FF&_nc_sid=7a9f4b" },
    { image: "https://scontent-gru1-2.cdninstagram.com/v/t51.29350-15/462660730_1078718120638464_3224922920941980123_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=oGT8gQvthT4Q7kNvgEXWURy&_nc_gid=0ba90ed7df47458fa1a56bf7308e370a&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ3Njc2MjExNDU3OTIxNzk0NQ%3D%3D.3-ccb7-5&oh=00_AYCbim4OAPzQPMuQkVaC3jYySG5_aJMnS7493Ox4suIScA&oe=6756D5FF&_nc_sid=7a9f4b" },
    { image: "https://scontent-gru1-2.cdninstagram.com/v/t51.29350-15/462660730_1078718120638464_3224922920941980123_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=oGT8gQvthT4Q7kNvgEXWURy&_nc_gid=0ba90ed7df47458fa1a56bf7308e370a&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ3Njc2MjExNDU3OTIxNzk0NQ%3D%3D.3-ccb7-5&oh=00_AYCbim4OAPzQPMuQkVaC3jYySG5_aJMnS7493Ox4suIScA&oe=6756D5FF&_nc_sid=7a9f4b" },
    { image: "https://scontent-gru1-2.cdninstagram.com/v/t51.29350-15/462660730_1078718120638464_3224922920941980123_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=oGT8gQvthT4Q7kNvgEXWURy&_nc_gid=0ba90ed7df47458fa1a56bf7308e370a&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ3Njc2MjExNDU3OTIxNzk0NQ%3D%3D.3-ccb7-5&oh=00_AYCbim4OAPzQPMuQkVaC3jYySG5_aJMnS7493Ox4suIScA&oe=6756D5FF&_nc_sid=7a9f4b" },
  ];

  const handleClick = (index: SetStateAction<number>) => {
    setExpandedIndex(index);
  };
  return (
    <section id="escuna" className="mt-7 p-7 text-white text-center">

      <h2 className="text-4xl mb-5 uppercase">Escuna</h2>

      <div>
        <div className="mb-5">
          <h3 className="text-2xl mb-5 uppercase font-bold">
            Tradicional
          </h3>
          <p>
            Roteiro: Ilha dos Cocos, Praia da Lula, Ilha da Pescaria e Praia da Conceição.
          </p>
        </div>

        <div className="overflow-hidden mb-5">
          <div className="overflow-hidden flex items-center justify-center p-4">
            <div className="flex w-full max-w-7xl h-[30vh] gap-3 items-center justify-center">
              {sliding.map((panel, index) => (
                <div key={index} onClick={() => handleClick(index)} className={`h-full rounded-2xl cursor-pointer transition-all duration-300 ease-in-out overflow-hidden ${expandedIndex === index ? "w-[30%]" : "w-[10%]"} min-w-40px block`}>
                  <Image
                    src={panel.image}
                    alt="Slider"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-top transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link href="https://wa.me/+5524998793280" target="_blank" className="bg-white text-black font-bold rounded-lg cursor-pointer p-2">
          Reserve já!
        </Link>
      </div>

      {/* <div>
        <div className="mb-5">
          <h3 className="text-2xl mb-5 uppercase font-bold">
            Tradicional II
          </h3>
          <p>
            Roteiro: Ilha dos Cocos, Praia da Lula, Lagoa Azul e Praia da Conceição.
          </p>
        </div>

        <div className="overflow-hidden mb-5">
          <div className="overflow-hidden flex items-center justify-center p-4">
            <div className="flex w-full max-w-7xl h-[30vh] gap-3 items-center justify-center">
              {sliding.map((panel, index) => (
                <div key={index} onClick={() => handleClick(index)} className={`h-full rounded-2xl cursor-pointer transition-all duration-300 ease-in-out overflow-hidden ${expandedIndex === index ? "w-[30%]" : "w-[10%]"} min-w-40px block`}>
                  <Image
                    src={panel.image}
                    alt="Slider"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-top transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link href="https://wa.me/+5524998793280" target="_blank" className="bg-white text-black font-bold rounded-lg cursor-pointer p-2">
          Reserve já!
        </Link>
      </div> */}



      {/* <div className="clear-both block">
        <p className="float-left border border-black">
          Tradicional: <br />Roteiro: Ilha dos Cocos, Praia da Lula, Ilha da Pescaria e Praia da Conceição.
          <br />
          FOTOS FOTOS FOTOS FOTOS
          <br />
          <Link href="https://wa.me/+5524998793280" target="_blank">
            Botão Reserve já!
          </Link>
        </p>
        <p className="float-left border border-black">
          Tradicional II: <br />Roteiro: Ilha dos Cocos, Praia da Lula, Lagoa Azul e Praia da Conceição.
          <br />
          FOTOS FOTOS FOTOS FOTOS
          <br />
          <Link href="https://wa.me/+5524998793280" target="_blank">
            Botão Reserve já!
          </Link>
        </p>
        <p className="float-left border border-black">
          Rota das Águas Claras: <br />Roteiro: Ilha dos Cocos, Saco da Velha, Enseada da Preguiça e Praia da Conceição.
          <br />
          FOTOS FOTOS FOTOS FOTOS
          <br />
          <Link href="https://wa.me/+5524998793280" target="_blank">
            Botão Reserve já!
          </Link>
        </p>
        <p className="float-left border border-black">
          Escuna de um andar: <br />Roteiro: Ilha dos Cocos, Saco da Velha, Lagoa Azul, Praia da Lula e Ilha Comprida.
          <br />
          FOTOS FOTOS FOTOS FOTOS
          <br />
          <Link href="https://wa.me/+5524998793280" target="_blank">
            Botão Reserve já!
          </Link>
        </p>
      </div> */}
    </section>
  )
}