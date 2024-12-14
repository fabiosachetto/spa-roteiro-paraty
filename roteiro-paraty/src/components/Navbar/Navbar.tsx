"use client";
import { InstagramIcon, WhatsappIcon } from "@/components/Icons/Icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (isOpen: unknown) => {
    setIsOpen(!isOpen);
  };

  return (
    // <nav className="bg-blue-500 text-white py-5 px-5 sm:py-5 sm:px-64 md:flex md:justify-between md:items-center fixed">
    <nav className="top-0 sm:top-0 bg-blue-500 text-white md:flex md:justify-between md:items-center fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-2 sm:px-52">

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

        <div className={isOpen ? "flex absolute top-24 bg-blue-500 w-full p-4 left-0 gap-4 flex-col" : "hidden md:flex"}>
          <Link href="/" className="mx-1 transition delay-150 duration-300 ease-in-out font-bold py-1 px-2 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/escunas" className="mx-1 transition delay-150 duration-300 ease-in-out font-bold py-1 px-2 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800" onClick={toggleMenu}>
            Escunas
          </Link>
          <Link href="/jeep" className="mx-1 transition delay-150 duration-300 ease-in-out font-bold py-1 px-2 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800" onClick={toggleMenu}>
            Jeep
          </Link>
          <Link href="/privativos" className="mx-1 transition delay-150 duration-300 ease-in-out font-bold py-1 px-2 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800" onClick={toggleMenu}>
            Privativos
          </Link>
          {/* <Link href="/lancha" className="mx-1 transition delay-150 duration-300 ease-in-out font-bold py-1 px-2 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800" onClick={toggleMenu}>
            Lancha
          </Link>
          <Link href="/traineira" className="mx-1 transition delay-150 duration-300 ease-in-out font-bold py-1 px-2 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800" onClick={toggleMenu}>
            Traineira
          </Link>
          <Link href="/veleiro" className="mx-1 transition delay-150 duration-300 ease-in-out font-bold py-1 px-2 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800" onClick={toggleMenu}>
            Veleiro
          </Link>
          <Link href="/personalizado" className="mx-1 transition delay-150 duration-300 ease-in-out font-bold py-1 px-2 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800" onClick={toggleMenu}>
            Roteiros Personalizados
          </Link> */}
          <Link href="/quemsomos" className="mx-1 transition delay-150 duration-300 ease-in-out font-bold py-1 px-2 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800" onClick={toggleMenu}>
            Quem Somos Nós
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=5524998793280" target="_blank" className="flex items-center mx-1 transition delay-150 duration-300 ease-in-out font-bold py-1 px-2 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
            <WhatsappIcon className="mr-2 w-5 h-5" />
            Contate-nos!
          </Link>
          <Link href="https://instagram.com/seuroteiroemparaty" target="_blank" className="flex items-center mx-1 transition delay-150 duration-300 ease-in-out font-bold py-1 px-2 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-800">
            <InstagramIcon className="mr-2 w-5 h-5" />
            Siga-nos no Instagram!
          </Link>
        </div>

        <div className="md:hidden flex items-center mr-2">
          <button onClick={() => {
            setIsOpen(!isOpen);
          }}
          >
            <svg height="24" id="Layer_1" viewBox="0 0 512 512" width="24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              {isOpen ? (
                <path fill="#ffffff" d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
              ) : (
                <g fill="#ffffff"><path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32   C448,238.3,434.3,224,417.4,224z" /><path d="M417.4,96H94.6C77.7,96,64,110.3,64,128c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32   C448,110.3,434.3,96,417.4,96z" /><path d="M417.4,352H94.6C77.7,352,64,366.3,64,384c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32   C448,366.3,434.3,352,417.4,352z" /></g>
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav >
  )
}

