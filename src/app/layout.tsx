import type { Metadata } from "next";
import { Handlee, Nunito, Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  subsets: ['latin', ],
  variable: '--font-montserrat',
  weight: '400',
});

const handlee = Handlee({
  subsets: ['latin'],
  variable: '--font-handlee',
  weight: '400',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: "Catalisadores: Fatores que podem interferir na rapidez dos processos químicos",
  description: "Química Ciências da Natureza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${nunito.variable} ${handlee.variable}`}>{children}</body>
    </html>
  );
}
