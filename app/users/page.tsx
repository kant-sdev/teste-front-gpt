import Section from '@/components/layout/Section';
import { getUsers } from '@/services/users'
import { User } from '@/types/user';
import React from 'react'

export default async function page() {

    const users: User[] = await getUsers();

    return (
        <div>
            <Section data={users}/>
        </div>
    )
}
