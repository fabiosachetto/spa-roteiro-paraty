"use client";
import { InstagramIcon, WhatsappIcon } from "@/components/Icons/Icons";
import { cn } from "@/helpers/cn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavbarNavProps = React.ComponentProps<"nav">;
type NavbarListProps = React.ComponentProps<"div">;
type NavbarListItemProps = React.ComponentProps<"span">;
type NavbarListItemLinkProps = React.ComponentProps<typeof Link>;

export const Navbar = () => {
  // export const Navbar = ({ className, ...props }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (isOpen: unknown) => {
    setIsOpen(!isOpen);
  };

  const NavbarNav = ({ children, className, ...props }: NavbarNavProps) => {
    return (
      <nav className={cn("top-0 sm:top-0 bg-blue-500 text-white md:flex md:justify-between md:items-center fixed w-full z-50", className)} {...props}>
        {children}
      </nav>
    );
  };

  const NavbarList = ({ children, className, ...props }: NavbarListProps) => {
    return (
      <div className={cn(isOpen ? "flex absolute top-24 bg-blue-500 w-full p-4 left-0 gap-4 flex-col" : "hidden md:flex", className)} {...props}>
        {children}
      </div>
    );
  };

  const NavbarListItem = ({ children, className, ...props }: NavbarListItemProps) => {
    return (
      <span className={cn("mx-1 transition delay-150 duration-300 ease-in-out font-bold py-1 px-4 rounded-full cursor-pointer hover:bg-[#0CC0DF]", className)} {...props} onClick={toggleMenu}>
        {children}
      </span>
    );
  };

  const NavbarListItemLink = ({ href, children, className, ...props }: NavbarListItemLinkProps) => {
    return (
      <NavbarListItem className={cn("", className)}>
        <Link href={href} className="block" {...props}>
          {children}
        </Link>
      </NavbarListItem>
    );
  };

  return (
    <NavbarNav>
      {/* <nav className={cn("top-0 sm:top-0 bg-blue-500 text-white md:flex md:justify-between md:items-center fixed w-full z-50", className)} {...props}> */}

      <div className="container mx-auto flex justify-between items-center py-2 px-2 sm:px-52">

        <Link href="/" onClick={toggleMenu}>
          <div className="ml-3 float-left">
            <Image
              src="/assets/images/logo-roteiro.png"
              alt="Seu Roteiro em Paraty!"
              title="Seu Roteiro em Paraty!"
              width={100}
              height={84}
            />
          </div>
        </Link>

        <NavbarList>
          <NavbarListItemLink href="/">
            Home
          </NavbarListItemLink>
          <NavbarListItemLink href="/escunas">
            Escunas
          </NavbarListItemLink>
          <NavbarListItemLink href="/jeep">
            Jeep
          </NavbarListItemLink>
          <NavbarListItemLink href="/privativos">
            Privativos
          </NavbarListItemLink>
          <NavbarListItemLink href="/quemsomos">
            Quem Somos Nós
          </NavbarListItemLink>
          <NavbarListItemLink href="https://api.whatsapp.com/send?phone=5524998793280&text=Vim%20do%20Site%20e%20cliquei%20em%20Contate-nos!" target="_blank">
            <WhatsappIcon className={"inline-block -mt-[3px] mr-2 w-5 h-5"} />
            Contate-nos!
          </NavbarListItemLink>
          <NavbarListItemLink href="https://instagram.com/seuroteiroemparaty" target="_blank">
            <InstagramIcon className={"inline-block -mt-[4px] mr-2 w-5 h-5"} />
            Siga-nos no Instagram!
          </NavbarListItemLink>
          {/* <NavbarListItem>
            <Link href="/" className="block">
              Home
            </Link>
          </NavbarListItem> 
          <NavbarListItem>
            <Link href="/escunas" className="block">
              Escunas
            </Link>
          </NavbarListItem>
          <NavbarListItem>
            <Link href="/jeep" className="block">
              Jeep
            </Link>
          </NavbarListItem>
          <NavbarListItem>
            <Link href="/privativos" className="block">
              Privativos
            </Link>
          </NavbarListItem>
          <NavbarListItem>
            <Link href="/quemsomos" className="block">
              Quem Somos Nós
            </Link>
          </NavbarListItem>
          <NavbarListItem>
            <Link href="https://api.whatsapp.com/send?phone=5524998793280&text=Vim%20do%20Site%20e%20cliquei%20em%20Contate-nos!" target="_blank" className={"flex items-center"}>
              <WhatsappIcon className="mr-2 w-5 h-5" />
              Contate-nos!
            </Link>
          </NavbarListItem>
          <NavbarListItem>
            <Link href="https://instagram.com/seuroteiroemparaty" target="_blank" className={"flex items-center"}>
              <InstagramIcon className="mr-2 w-5 h-5" />
              Siga-nos no Instagram!
            </Link>
          </NavbarListItem>*/}
        </NavbarList>

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
    </NavbarNav>
  );
};

