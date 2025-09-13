"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">SBYJ</h1>
        <ul className="flex space-x-6">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/nosotros">Nosotros</Link></li>
          <li><Link href="/testimonios">Testimonios</Link></li>
          <li><Link href="/tarifas">Tarifas</Link></li>
          <li><Link href="/eventos">Eventos</Link></li>
          <li><Link href="/auth/login">Login</Link></li>
          <li><Link href="/auth/register">Registro</Link></li>
        </ul>
      </nav>
    </header>
  );
}
