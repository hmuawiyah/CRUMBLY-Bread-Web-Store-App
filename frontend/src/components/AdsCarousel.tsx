import React, { ReactNode } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function AdsCarousel() {
    return (
        <Carousel className='w-full' opts={{ align: "start", loop: true, }}>
            <CarouselContent>
                <CarouselItem><div className='flex items-center justify-center w-full aspect-16/9 md:h-[380px] bg-gray-400 text-white rounded-none text-2xl'>Image 1</div></CarouselItem>
                <CarouselItem><div className='flex items-center justify-center w-full aspect-16/9 md:h-[380px] bg-gray-400 text-white rounded-none text-2xl'>Image 2</div></CarouselItem>
                <CarouselItem><div className='flex items-center justify-center w-full aspect-16/9 md:h-[380px] bg-gray-400 text-white rounded-none text-2xl'>Image 3</div></CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}
