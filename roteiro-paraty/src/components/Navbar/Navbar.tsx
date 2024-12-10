"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {
    let menuClasses = [];

    if (isOpen) {
      menuClasses = [
        "flex absolute top-28 bg-gray-800 w-full p-4 left-0 gap-4 flex-col"
      ];
    } else {
      menuClasses = [
        "hidden md:flex"
      ];
    };

    return menuClasses.join("");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* <a href="/" className="text-2xl font-bold">
          Seu Roteiro
        </a> */}

        <Link href="/">
          <div className="ml-3 float-left">
            <Image
              src="/assets/images/logo-roteiro.png"
              alt="Seu Roteiro em Paraty!"
              width={100}
              height={100}
            />
          </div>
        </Link>

        <div className={getMenuClasses()}>
          <Link href="/" className="mx-3 hover:text-gray-300">
            Home
          </Link>
          <Link href="/escuna" className="mx-3 hover:text-gray-300">
            Escunas
          </Link>
          <Link href="/jeep" className="mx-3 hover:text-gray-300">
            Jeep
          </Link>
          <Link href="/van" className="mx-3 hover:text-gray-300">
            Van
          </Link>
          <Link href="/lancha" className="mx-3 hover:text-gray-300">
            Lancha
          </Link>
          <Link href="/traineira" className="mx-3 hover:text-gray-300">
            Traineira
          </Link>
          <Link href="/veleiro" className="mx-3 hover:text-gray-300">
            Veleiro
          </Link>
          <Link href="/personalizado" className="mx-3 hover:text-gray-300">
            Roteiros Personalizados
          </Link>
          <Link href="/quemsomos" className="mx-3 hover:text-gray-300">
            Quem Somos Nós
          </Link>
          <Link href="https://wa.me/+5524998793280" target="_blank" className="mx-3 hover:text-gray-300">
            Contate-nos e crie seu próprio roteiro!
          </Link>
          <Link href="/contato" className="mx-3 hover:text-gray-300">
            Contato
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => {
            setIsOpen(!isOpen);
          }}
          >
            <svg height="24" id="Layer_1" viewBox="0 0 512 512" width="24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              {isOpen ? (
                <path fill="#ffffff" d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
              ) : (
                <><path fill="#ffffff" d="M441.13,166.52h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" /><path fill="#ffffff" d="M441.13,279.72h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" /><path fill="#ffffff" d="M441.13,392.92h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" /></>
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}