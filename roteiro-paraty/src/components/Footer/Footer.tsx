// import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="contato" className="w-full mt-7 p-7 bg-black bg-opacity-50">
      <ol className="text-center text-white">
        <li className="mb-4">
          <h2 className="text-4xl uppercase">
            Contato
          </h2>
        </li>
        <li className="mb-4 hover:text-orange-400">
          <Link href="https://instagram.com/seuroteiroemparaty" target="_blank">
            Instagram
          </Link>
        </li>
        <li className="mb-4 hover:text-orange-400">
          <Link href="https://wa.me/+5524998793280" target="_blank">
            WhatsApp
          </Link>
        </li>
        <li className="mb-4 hover:text-orange-400">
          <Link href="mailto:seuroteiroemparaty@gmail.com">
            E-Mail
          </Link>
        </li>
      </ol>
    </footer>
  )
}