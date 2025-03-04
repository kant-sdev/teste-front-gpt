"use client"

import ButtonGeneric from "@/components/layout/Button";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <main className="w-full flex justify-center items-center h-screen">
        <div className=" grid grid-cols-1 place-items-center space-y-2">
          <h2 className="text-2xl font-bold">Teste front-end </h2>
          <p className="text-md">Uso da api do Json Placeholder</p>
          <p className="text-md">Com complemento com components reutilizaveis</p>
          <Link href={'/users'}>
            <ButtonGeneric text="Ir para Usuarios" />
          </Link>
        </div>
      </main>
    </>
  );
}
