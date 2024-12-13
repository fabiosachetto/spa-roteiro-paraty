// import Image from "next/image";
import { AmexIcon, BoletoIcon, DinersIcon, EloIcon, EmailIcon, HipercardIcon, InstagramIcon, MastercardIcon, PixIcon, VisaIcon, WhatsappIcon } from "@/components/Icons/Icons";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="contato" className="w-full mt-7 p-7 bg-black bg-opacity-50 overflow-auto ">
      <div className="overflow-auto max-w-md m-auto">
        <h2 className="mb-5 text-4xl uppercase text-white text-center">
          Seu Roteiro em Paraty
        </h2>

        <ol className="text-white justify-center grid">
          <li className="mb-4 hover:text-orange-400 clear-both">
            <Link href="https://instagram.com/seuroteiroemparaty" target="_blank" className="flex items-center">
              <InstagramIcon className="mr-2 w-5 h-5" />
              Instagram
            </Link>
          </li>
          <li className="mb-4 hover:text-orange-400 clear-both">
            <Link href="https://wa.me/+5524998793280" target="_blank" className="flex items-center">
              <WhatsappIcon className="mr-2 w-5 h-5" />
              WhatsApp
            </Link>
          </li>
          <li className="mb-4 hover:text-orange-400 clear-both">
            <Link href="mailto:seuroteiroemparaty@gmail.com" target="_blank" className="flex items-center">
              <EmailIcon className="mr-2 w-5 h-5" />
              E-Mail
            </Link>
          </li>
        </ol>
      </div>

      <div className="overflow-auto max-w-md m-auto text-center mb-4 pt-4 text-white border-t border-double border-t-white">
        <div className="flex">
          <div>
            <Image
              src="/assets/images/turismo-consciente.png"
              alt="Turismo Consciente"
              width={100}
              height={100}
              className="inline-block"
            />
          </div>
          <div className="mx-16">
            <Image
              src="/assets/images/turismo-responsavel.png"
              alt="Turismo Responsável"
              width={100}
              height={89}
              className="inline-block"
            />
          </div>
          <div className="mt-5">
            <Image
              src="/assets/images/unesco.jpg"
              alt="Unesco"
              width={100}
              height={59}
              className="inline-block"
            />
          </div>
        </div>
      </div>

      <div className="overflow-auto max-w-md m-auto text-center pt-4 text-white border-t border-double border-t-white">
        <h3>Aceitamos:</h3>

        <div className="mt-4 mb-5 inline-flex">
          <MastercardIcon />
          <VisaIcon />
          <EloIcon />
          <HipercardIcon />
          <AmexIcon />
          <DinersIcon />
          <BoletoIcon />
          <PixIcon />
        </div>
      </div>

      <div className="overflow-auto max-w-md m-auto text-center pt-4 text-white border-t border-double border-t-white">
        <Link href="/politica-de-privacidade" className="inline-block hover:text-orange-400">
          Política de Privacidade.
        </Link>
      </div>

      <div className="overflow-auto max-w-md m-auto text-center mt-4 pt-4 text-white border-t border-double border-t-white">
        <Link href="https://cadastur.turismo.gov.br/cadastur/#!/public/qrcode/47072440000118" target="_blank">
          <div>
            <Image
              src="/assets/images/cadastur.png"
              alt="Cadastur"
              width={150}
              height={24}
              className="inline-block"
            />
          </div>
        </Link>
      </div>

      <div className="overflow-auto max-w-md m-auto text-center mt-4 pt-4 text-white border-t border-double border-t-white">

        <Link id="link-brain-tech" href="https://wa.me/+5524992815187" target="_blank" className="inline-block text-white px-3 rounded">
          Desenvolvido por
          <Image
            src="/assets/images/logo-brain-tech.png"
            alt="Brain Tech Paraty"
            width={30}
            height={29}
            className="inline-block mx-1"
          />
          Brain Tech Paraty
        </Link>

      </div>
    </footer>
  )
}