// import Image from "next/image";
import { InstagramIcon, WhatsappIcon, EmailIcon } from "@/components/Icons/Icons";
import Link from "next/link";

export const Footer = () => {
  return (
    // <footer id="contato" className="w-full mt-7 p-7 overflow-auto bg-black bg-opacity-50">
    //   <div className="border overflow-auto">
    //     <ol className="float-left text-white">
    //       <li className="mb-4">
    //         <h2 className="text-4xl uppercase">
    //           Contato
    //         </h2>
    //       </li>
    //       <li className="mb-4 hover:text-orange-400 clear-both">
    //         <Link href="https://instagram.com/seuroteiroemparaty" target="_blank" className="float-left">
    //           <FooterIcon /> Instagram
    //         </Link>
    //       </li>
    //       <li className="mb-4 hover:text-orange-400 clear-both">
    //         <Link href="https://wa.me/+5524998793280" target="_blank" className="float-left">
    //           <FooterIcon /> WhatsApp
    //         </Link>
    //       </li>
    //       <li className="mb-4 hover:text-orange-400 clear-both">
    //         <Link href="mailto:seuroteiroemparaty@gmail.com" className="float-left">
    //           <FooterIcon /> E-Mail
    //         </Link>
    //       </li>
    //     </ol>
    //   </div>
    // </footer>
    <footer id="contato" className="w-full mt-7 p-7 bg-black bg-opacity-50 overflow-auto flex justify-center">
      <div className="overflow-auto max-w-md">
        <ol className="text-white">
          <li className="mb-4">
            <h2 className="text-4xl uppercase">
              Contato
            </h2>
          </li>
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
    </footer>
  )
}