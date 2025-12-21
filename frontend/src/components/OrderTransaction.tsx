import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { LuShoppingCart, LuSearch } from 'react-icons/lu'
import { FaStar } from 'react-icons/fa6'


export default function OrderTransaction() {
    return (
        <>
            <Card className="w-full md:w-[75%] mt-7 gap-0">
                <CardHeader className='gap-0 pb-2 md:pb-4'>
                    <div className='flex justify-between opacity-50'>
                        <CardTitle className='text-xs! md:text-sm!'>12 February 2025</CardTitle>
                        <CardTitle className='text-xs! md:text-sm!'>Completed</CardTitle>
                    </div>
                </ CardHeader>
                <CardContent className='gap-0 px-2 md:px-4'>
                    <div className="flex py-3">
                        <div className="aspect-1/1 w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-400 mr-3"> IMG </div>
                        <div className='flex flex-col justify-between w-full'>
                            <div>
                                <CardTitle>Croissant Bread</CardTitle>
                                <CardTitle className="text-sm! md:text-base! opacity-75">1x Quantity</CardTitle>
                            </div>
                            <CardDescription className='text-right'> Rp52.000 </CardDescription>
                        </div>
                    </div>
                </CardContent>

                <hr className="my-3 border border-gray-200" />

                <CardContent className='gap-0 px-2 md:px-4'>
                    <div className="flex py-3">
                        <div className="aspect-1/1 w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-400 mr-3"> IMG </div>
                        <div className='flex flex-col justify-between w-full'>
                            <div>
                                <CardTitle>Croissant Bread</CardTitle>
                                <CardTitle className="text-sm! md:text-base! opacity-75">1x Quantity</CardTitle>
                            </div>
                            <CardDescription className='text-right'> Rp52.000 </CardDescription>
                        </div>
                    </div>
                </CardContent>

                <hr className="my-3 border border-gray-200" />

                <CardFooter className="flex justify-between gap-2">
                    <div className='flex flex-col md:flex-row items-center gap-3'>
                        <CardTitle className="text-sm! md:text-base! flex items-center">Total <span className='font-bold ml-1'>Rp52.000</span></CardTitle>
                        <Button variant='outline' className='font-normal'> <LuSearch /> Details </Button>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-3'>
                        <Button variant='outline' className='font-normal'> <LuShoppingCart /> Buy Again </Button>
                    </div>
                </CardFooter>
            </Card>
            <Card className="w-full md:w-[75%] mt-7 gap-0">
                <CardHeader className='gap-0 pb-2 md:pb-4'>
                    <div className='flex justify-between opacity-50'>
                        <CardTitle className='text-xs! md:text-sm!'>12 February 2025</CardTitle>
                        <CardTitle className='text-xs! md:text-sm!'>Completed</CardTitle>
                    </div>
                </ CardHeader>
                <CardContent className='gap-0 px-2 md:px-4'>
                    <div className="flex py-3">
                        <div className="aspect-1/1 w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-400 mr-3"> IMG </div>
                        <div className='flex flex-col justify-between w-full'>
                            <div>
                                <CardTitle>Croissant Bread</CardTitle>
                                <CardTitle className="text-sm! md:text-base! opacity-75">1x Quantity</CardTitle>
                            </div>
                            <CardDescription className='text-right'> Rp52.000 </CardDescription>
                        </div>
                    </div>
                </CardContent>

                <hr className="my-3 border border-gray-200" />

                <CardFooter className="flex justify-between gap-2">
                    <div className='flex flex-col md:flex-row items-center gap-3'>
                        <CardTitle className="text-sm! md:text-base! flex items-center">Total <span className='font-bold ml-1'>Rp52.000</span></CardTitle>
                        <Button variant='outline' className='font-normal'> <LuSearch /> Details </Button>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-3'>
                        <Button variant='outline' className='font-normal'> <LuShoppingCart /> Buy Again </Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}
