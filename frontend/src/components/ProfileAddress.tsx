import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
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

type Address = {
    addressName: string
    phone: string
    street: string
    city: string
    postal: string
    province: string
}

export default function ProfileAddress() {
    const [addresses, setAddresses] = useState<Address[]>([
        {
            addressName: 'home 1',
            phone: '+1 910 123 123',
            street: '1600 Amphitheatre Parkway',
            city: 'Mountain View',
            postal: '94043',
            province: 'California',
        },
    ])

    const addAddress = () =>
        setAddresses([...addresses, { addressName: '', phone: '', street: '', city: '', postal: '', province: '' }])

    const remove = (i: number) =>
        setAddresses(addresses.filter((_, idx) => idx !== i))

    return (
        <Card className='space-y-6 px-2 md:px-4'>
            <CardHeader className='flex justify-between items-center'>
                <h2 className='text-xl font-semibold'>Address</h2>
                <Button variant='outline' onClick={addAddress}><LuPlus />Add more</Button>
            </CardHeader>

            <CardContent className='space-y-5 mb-3 px-2 md:px-4'>
                {addresses.map((a, i) => (
                    <Card key={i} className='space-y-5'>
                        <CardHeader className='flex justify-between items-center px-2 md:px-4'>
                            <h3 className='text-lg font-medium'>{a.addressName}</h3>
                            {addresses.length > 1 && (
                                <Button variant='ghostDestructive' className='rounded-full min-w-25!' size='sm' onClick={() => remove(i)}>
                                    <LuTrash2 /> Delete
                                </Button>
                            )}
                        </CardHeader>

                        <CardContent className='space-y-4 px-2 md:px-4'>
                            <label htmlFor='addressName' className='text-sm'>Address Name</label>
                            <Input id='addressName' placeholder='Address Name' defaultValue={a.addressName} />

                            <label htmlFor='phone' className='text-sm'>Phone Number</label>
                            <Input id='phone' placeholder='Phone' defaultValue={a.phone} />

                            <label htmlFor='street' className='text-sm'>Street</label>
                            <Input id='street' placeholder='Street' defaultValue={a.street} />

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div>
                                    <label htmlFor='City' className='text-sm'>City</label>
                                    <Input id='City' placeholder='City' defaultValue={a.city} />
                                </div>
                                <div>
                                    <label htmlFor='postalCode' className='text-sm'>Postal Code</label>
                                    <Input id='postalCode' placeholder='Postal Code' defaultValue={a.postal} />
                                </div>
                            </div>

                            <label htmlFor='province' className='text-sm'>Province</label>
                            <Input id='province' placeholder='Province' defaultValue={a.province} />


                            {i !== addresses.length - 1 && <Separator />}
                        </CardContent>
                        <CardFooter className='flex justify-end'>
                            <Button variant='default' className='w-fit'><LuSave /> Save Address</Button>
                        </CardFooter>
                    </Card>
                ))}
            </CardContent>
        </Card>
    )
}
