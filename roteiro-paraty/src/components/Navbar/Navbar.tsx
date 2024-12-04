import { cn } from "@/helpers/cn";
import Image from "next/image";
import Link from "next/link";

type NavbarProps = React.ComponentProps<"nav">;
type NavbarOLProps = React.ComponentProps<"ol">;
type NavbarLIProps = React.ComponentProps<"li">;

const NavbarOL = ({ children, className, ...props }: NavbarOLProps) => {
  return (
    <ol className={cn("mt-3 float-right text-xl font-bold", className)} {...props}>
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

      <header className="flex py-2 mx-8 text-center bg-black bg-opacity-50 rounded-xl">


        <div className="ml-3 float-left">
          <Image
            src="/assets/images/logo-roteiro.png"
            alt="Seu Roteiro em Paraty!"
            width={100}
            height={100}
          />
        </div>
        <Link href="nav"></Link>

        <nav className={cn("py-2 float-left", className)} {...props}>

          <NavbarOL>

            <NavbarLI>
              <Link href="#escuna">
                Escuna
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="#jeep">
                Jeep
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="#van">
                Van
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="#lancha">
                Lancha
              </Link>
            </NavbarLI>

            <NavbarLI>
              <Link href="#traineira">
                Traineira
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="#veleiro">
                Veleiro
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="#programas">
                Programas <br />Personalizados
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="#quemsomosnos">
                Quem Somos Nós
              </Link>
            </NavbarLI>
            <NavbarLI>
              <Link href="https://wa.me/+5524998793280" target="_blank">
                Contate-nos <br />e crie seu próprio roteiro!
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