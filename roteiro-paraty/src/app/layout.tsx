import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const openSans = localFont({
  src: "./fonts/OpenSans-Regular.ttf",
});
const stella = localFont({
  src: "./fonts/Stella.ttf",
});
export const metadata: Metadata = {
  title: "Seu Roteiro em Paraty",
  description: "Seu Passeio Garantido em Paraty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans} ${stella}`}>
        <main className="">
          <Navbar />

          {children}

          <Footer />
        </main>
      </body>
    </html >
  );
};