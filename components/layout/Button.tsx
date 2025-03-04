import React from 'react'
import { Button } from '../ui/button'

type Props = {
    text: string,
}

export default function ButtonGeneric({text} : Props) {
    return (
        <>
            <Button  className='px-8 py-6 text-lg mt-4'>
                {text}
            </Button>
        </>
    )
}
