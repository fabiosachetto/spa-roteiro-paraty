import Image from "next/image";
import Link from "next/link";

const NavbarOL = ({ children, className }) => {
  return (
    <ol className={`mt-3 flex float-right text-xl font-bold ${className}`}>
      {children}
    </ol>
  )
};

const NavbarLI = ({ children, className }) => {
  return (
    <li className={`float-left mr-3 hover:text-orange-400 ${className}`}>
      {children}
    </li>
  )
}

export const Navbar = () => {
  return (
    <nav className="w-2/5 py-2">
      <div className="flex float-left">
        <Image
          src="/assets/images/logo-roteiro.png"
          alt="Seu Roteiro em Paraty!"
          width={50}
          height={50}
        />
      </div>

      <NavbarOL>
        <NavbarLI>
          <Link href="#sobrenos">
            Quem Somos Nós
          </Link>
        </NavbarLI>
        <NavbarLI>
          <Link href="#home">
            Nossas Atividades
          </Link>
        </NavbarLI>
        <NavbarLI>
          <Link href="#roteiros">
            Roteiros
          </Link>
        </NavbarLI>
        <NavbarLI>
          <Link href="#contatos">
            Contatos
          </Link>
        </NavbarLI>
      </NavbarOL>
    </nav>
  )
}