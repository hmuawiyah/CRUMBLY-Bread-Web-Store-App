import React, { useState } from 'react'

import { LuShoppingCart, LuSearch, LuCopy } from 'react-icons/lu'
import { FaStar } from 'react-icons/fa6'

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

export default function DetailOrderTransaction() {
    return (
        <Card className='w-full md:w-[75%] mt-15 gap-0'>
            <CardHeader className='gap-0 pb-2 md:pb-4'>
                <div className='flex justify-between opacity-50'>
                    <CardTitle className='text-xs! md:text-sm!'>12 February 2025</CardTitle>
                    <CardTitle className='text-xs! md:text-sm!'>Completed</CardTitle>
                </div>
            </ CardHeader>
            <CardContent className='gap-0 px-2 md:px-4'>
                <div className='flex py-3'>
                    <div className='aspect-1/1 w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-400 mr-3'> IMG </div>
                    <div className='flex flex-col justify-between w-full'>
                        <div>
                            <CardTitle>Croissant Bread</CardTitle>
                            <CardTitle className='text-sm! md:text-base! opacity-75'>1x Quantity</CardTitle>
                        </div>
                        <CardDescription className='text-right'> Rp52.000 </CardDescription>
                    </div>
                </div>
            </CardContent>

            <hr className='my-3 border border-gray-200' />

            <CardContent className='gap-0 px-2 md:px-4'>
                <div className='flex py-3'>
                    <div className='aspect-1/1 w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-400 mr-3'> IMG </div>
                    <div className='flex flex-col justify-between w-full'>
                        <div>
                            <CardTitle>Croissant Bread</CardTitle>
                            <CardTitle className='text-sm! md:text-base! opacity-75'>1x Quantity</CardTitle>
                        </div>
                        <CardDescription className='text-right'> Rp52.000 </CardDescription>
                    </div>
                </div>
            </CardContent>

            <hr className='my-3 border border-gray-200' />

            <CardContent className='px-2 md:px-4'>
                <CardTitle className='mb-5'>Shipping Info</CardTitle>

                {/* <div className='grid grid-cols-1 md:grid-cols-2 w-full md:w-[100%] mb-10 space-y-5'> */}
                <div className='flex flex-col md:flex-row w-full mb-20 space-y-5'>
                    {/* Left */}
                    <div className='flex flex-col w-full md:w-[50%] space-y-5'>
                        <div className='flex flex-row gap-1'>
                            <div className='w-[40%]'>Shipping Service</div>
                            <div className='w-[50%]'>JNT</div>
                        </div>
                        <div className='flex flex-row items-start gap-1'>
                            <div className='w-[40%]'>Tracking Number</div>
                            <div className='flex gap-1 items-center cursor-pointer underline w-[50%]'>JNT1234567890 <LuCopy /></div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className='flex w-full md:w-[50%] gap-1'>
                        <div className='w-[40%] md:w-fit md:mr-10'>Address</div>
                        <div className='w-[50%]'>
                            <div>John Doe</div>
                            <div>+1 910 123 123</div>
                            <div>3930 Martha Street Bullhead City, AZ 86442</div>
                        </div>
                    </div>
                </div>
            </CardContent>


            <CardFooter className='flex justify-between gap-2'>
                <div className='flex flex-col md:flex-row items-center gap-3'>
                    <CardTitle className='text-sm! md:text-base! flex items-center'>Total <span className='font-bold ml-1'>Rp52.000</span></CardTitle>
                    {/* <Button variant='outline' className='font-normal'> <LuSearch /> Details </Button> */}
                </div>
                <div className='flex flex-col md:flex-row items-center gap-3'>
                    <Button variant='outline' className='font-normal'> <LuShoppingCart /> Buy Again </Button>
                    <Button variant='outline' className=''>
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
