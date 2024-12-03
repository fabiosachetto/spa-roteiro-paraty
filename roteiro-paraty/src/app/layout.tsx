import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const openSans = localFont({
  src: "./fonts/OpenSans-Regular.ttf",
  // variable: "--font-geist-sans",
  weight: "100 900",
});
const stella = localFont({
  src: "./fonts/Stella.ttf",
  // variable: "--font-geist-mono",
  weight: "100 900",
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
      {/* <body className="bg-white"> */}
      <body className={(`${openSans} ${stella}`)}>
        {/* <body className={`bg-[url("https://euamoparaty.com.br/wp-content/uploads/2016/05/paraty-2.jpg")]`}> */}
        {children}
      </body>
    </html>
  );
}
