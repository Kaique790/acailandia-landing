import type { Metadata } from "next";
import { Baloo_2, Poppins } from "next/font/google";

import "./globals.css";
import "keen-slider/keen-slider.min.css";

import { Header } from "@/components/header";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Açailândia",
  description:
    "Nova açaiteria Açailândia em Luis Alves Sergipe. Visite nossos instagram: acai_landia94",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${baloo.variable} font-poppins text-dark max-w-screen overflow-x-hidden pt-40 antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
