import { Footer } from "@/components/Footer/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics/GoogleAnalytics";
import { Navbar } from "@/components/Navbar/Navbar";
// import { Analytics } from "@vercel/analytics/next";
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
    <html lang="pt-BR">
      <body className={`${openSans} ${stella}`} cz-shortcut-listen="false">
        <GoogleAnalytics />
        <main className="mt-32 sm:mt-32 relative">
          <Navbar />

          {children}

          <Footer />
        </main>
        {/* <Analytics /> */}
        {/* <!-- Google Tag Manager (noscript) -->
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TBHXDD3C"
            height="0" width="0" className="hidden invisible"></iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </html>
  );
};