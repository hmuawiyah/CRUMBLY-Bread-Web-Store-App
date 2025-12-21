import React from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

import { LuSave, LuTrash2, LuPlus } from 'react-icons/lu'


export default function ProfilePersonalInfo() {
    return (
        <>
            <Card className='px-2 md:px-4'>
                <CardHeader className='text-xl font-semibold'>Personal Information</CardHeader>

                <CardContent className='space-y-4 px-2 md:px-4'>
                    <label htmlFor='name' className='text-sm'>Name</label>
                    <Input id='name' type='text' placeholder='your name...' />
                    <label htmlFor='email' className='text-sm'>Email</label>
                    <Input id='email' type='email' placeholder='youremail@sample.com' />
                </CardContent>

                <CardFooter className='flex justify-end'>
                    <Button variant='default' className='mt-2 w-fit'><LuSave />Save</Button>
                </CardFooter>
            </Card>
            
        </>
    )
}
