import { User } from '@/types/user'
import React from 'react'
import CardGeneric from './CardGeneric'
import Link from 'next/link'
import ButtonGeneric from './Button'

type Props = {
    data: User[]
}

export default function Section({ data }: Props) {

    return (
        <>
            <section className='flex w-full justify-center py-16'>
                <div className="container">
                    <h2 className='text-2xl text-center font-bold mb-6'>Painel de Usuários</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-3 p-4  gap-6'>
                        {
                            data.map((user) => (
                                <CardGeneric user={user} key={user.id} type='generic' />
                            ))
                        }
                    </div>

                    <div className='w-full flex justify-center'>
                        <Link href={'/'}>
                            <ButtonGeneric text="Voltar" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
