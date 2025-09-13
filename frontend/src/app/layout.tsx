import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../conponents/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SBYJ",
  description: "Plataforma de apoyo para el estres laboral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Contenido principal */}
        <main className="flex-1 container mx-auto mt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white p-4 text-center">
          <p>© {new Date().getFullYear()} SVYJ. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
