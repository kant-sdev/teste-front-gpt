import ButtonGeneric from "@/components/layout/Button"
import CardGeneric from "@/components/layout/CardGeneric"
import { Button } from "@/components/ui/button"
import { getUserById } from "@/services/users"
import Link from "next/link"

export default async function Page({
    params,
}: {
    params: Promise<{ id: number }>
}) {
    const { id } = await params

    const userData = await getUserById(id)

    return (
        <>
            <section className='flex w-full justify-center py-16'>
                <div className="container">
                    <h2 className='text-2xl text-center font-bold mb-6'>Painel de Usuários</h2>
                    <div className="px-4 flex justify-center w-full">
                        <CardGeneric user={userData} type="details"/>
                    </div>
                    <div className='w-full flex justify-center py-4'>
                        <Link href={'/users'}>
                            <ButtonGeneric text="Voltar" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}