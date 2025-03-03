import React from 'react'
import { Button } from '../ui/button'

type Props = {
    text: string,
    onClick?: () => void,
    disabled?: boolean,
}

export default function ButtonGeneric({text, onClick, disabled} : Props) {
    return (
        <>
            <Button onClick={onClick} className='px-8 py-6 text-lg mt-4'>
                {text}
            </Button>
        </>
    )
}
