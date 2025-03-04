import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '../ui/card'
import { User } from '@/types/user'
import Link from 'next/link';

type Props = {
  user: User,
  type: 'generic' | 'details'
}
export default function CardGeneric({ user, type }: Props) {

  return (
    <>
      {
        type === 'generic' ? (
          <Card className=''>
            <CardContent className='space-y-2 -mb-2'>
              <CardTitle>Name: {user.name}</CardTitle>
              <CardDescription>Email: {user.email}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={`/users/${user.id}`}>Ver detalhes</Link>
            </CardFooter>
          </Card>
        ) : (
          <Card className='flex-1 lg:max-w-xl'>
            <CardContent className='space-y-2 -mb-2'>
              <CardTitle>Name: {user.name}</CardTitle>
              <CardDescription>Email: {user.email}</CardDescription>
              <CardDescription>Phone: {user.phone}</CardDescription>
              <div>
                <h2 className='text-md font-bold'>Address</h2>

                <p className='text-gray-500'>{user.address.street} - {user.address.city}</p>

              </div>
              <div>
                <h2 className='text-md font-bold'>Work</h2>
                <div className='space-y-1'>
                  <p className='text-gray-500'>{user.company.name} </p>
                  <p className='text-gray-500'>{user.company.catchPhrase} </p>
                  <p className='text-gray-500'>{user.company.bs} </p>
                </div>
              </div>
            </CardContent>
          </Card >
        )
      }
    </>
  )
}
