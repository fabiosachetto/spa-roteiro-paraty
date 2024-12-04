import { cn } from "@/helpers/cn";
import Image from "next/image";
import Link from "next/link";

type NavbarProps = React.ComponentProps<"nav">;
type NavbarOLProps = React.ComponentProps<"ol">;
type NavbarLIProps = React.ComponentProps<"li">;

const NavbarOL = ({ children, className, ...props }: NavbarOLProps) => {
  return (
    <ol className={cn("mt-3 flex float-right text-xl font-bold", className)} {...props}>
      {children}
    </ol>
  )
};

const NavbarLI = ({ children, className, ...props }: NavbarLIProps) => {
  return (
    <li className={cn("float-left mr-3 hover:text-orange-400", className)} {...props}>
      {children}
    </li>
  )
}

export const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <main>

      <header className="flex justify-center w-full bg-black bg-opacity-50">

        <Link href="nav"></Link>
        <div className="flex float-left">
          <Image
            src="/assets/images/logo-roteiro.png"
            alt="Seu Roteiro em Paraty!"
            width={100}
            height={100}
          />
        </div>
        <nav className={cn("py-2 float-left", className)} {...props}>

          <NavbarOL>
            <NavbarLI>
              <Link href="#quemsomosnos">
                Quem Somos Nós
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="#escuna">
                Escuna
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="#lancha">
                Lancha Privativa
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="#programas">
                Programas Personalizados
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="#veleiro">
                Veleiro Privativo
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="#jeep">
                Jeep
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="#clientes">
                Clientes
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="#feedback">
                Feedback
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="#contato">
                Contato
              </Link>
            </NavbarLI>
          </NavbarOL>
        </nav>


      </header>
    </main>
  )
}