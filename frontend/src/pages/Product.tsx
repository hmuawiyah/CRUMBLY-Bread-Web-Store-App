import React, { useEffect, useState } from 'react'

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
import OrderReview from '@/components/OrderReview'
import OrderSubtotal from '@/components/OrderSubtotal'

import { LuShoppingCart } from 'react-icons/lu'
import { FaStar } from 'react-icons/fa6'

import { breadReviews } from '@/components/DummyDataReview'

export default function Product() {
    

    return (
        <>
            <div className='flex flex-wrap gap-4 justify-center mt-15'>
                <Card className='w-full md:w-[60%] mt-4'>
                    <CardContent className='px-4'>
                        <div className='flex gap-4'>
                            <div className='w-[70%] h-fit aspect-square bg-gray-400 rounded-md'></div>
                            <div className='space-y-1'>
                                <CardTitle className='text-xl md:text-3xl'>Croissant Bread</CardTitle>
                                <CardDescription className='text-xl md:text-3xl'> Rp54.000 </CardDescription>
                                <CardDescription className='font-normal flex items-center text-base md:text-lg'> <FaStar className='text-yellow-400 mr-2' /> 4.5 &bull; 12 Reviews</CardDescription>
                                <CardDescription className='font-normal text-base md:text-lg mt-10'>Traditional French baguette with a golden, crispy crust and soft, airy interior. Perfect for any meal.</CardDescription>
                            </div>
                        </div>

                    </CardContent>

                    {breadReviews.map((review, i) => (
                        <OrderReview
                            key={i}
                            name={review.name}
                            star={review.star}
                            date={review.date}
                            reviewComment={review.review}
                        />
                    ))}

                </Card>

                <div className='w-full md:w-[35%] xl:w-[25%]'>
                    <OrderSubtotal />
                </div>
            </div>
        </>
    )
}
