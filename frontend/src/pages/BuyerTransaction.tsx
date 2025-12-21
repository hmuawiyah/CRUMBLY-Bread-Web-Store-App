import React, { useState } from 'react'

import { LuChevronDown } from "react-icons/lu"
// import { LuShoppingCart, LuSearch } from 'react-icons/lu'
// import { FaStar } from 'react-icons/fa6'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import OrderTransaction from '@/components/OrderTransaction'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { orders } from '@/components/DummyDataOrdersC'

type Checked = DropdownMenuCheckboxItemProps["checked"]

const SortByDropdownMenu = () => {
    const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
    const [sortedBy, setSortedBy] = useState<string>('Lastest')
    const sortedItems: string[] = ['Lastest', 'Oldest', 'Highest Price', 'Lowest Price']

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className='border border-primary rounded-full'>{sortedBy} <LuChevronDown /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='start' className="w-56">
                <DropdownMenuGroup>
                    {sortedItems.map((item, i) => (
                        <>
                            <DropdownMenuItem
                                onClick={() => setSortedBy(item)}
                            >
                                {item}
                            </DropdownMenuItem>
                            {(i < sortedItems.length - 1) && <DropdownMenuSeparator />}
                        </>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export default function BuyerTransaction() {
    const [radioFilter, setRadioFilter] = useState<string>('All')
    const radioItems: string[] = ['All', 'Pending', 'Processing', 'Shipped', 'Completed', 'Canceled']
    return (
        <>

            <div className=' flex justify-start w-full space-y-4 overflow-x-auto h-auto mt-15 '>
                <div className='flex gap-5 min-w-[500px]!'>
                    {radioItems.map((item: string, i: number) => (
                        <Button
                            key={i}
                            variant={radioFilter == item ? 'outline' : 'ghost'}
                            onClick={() => setRadioFilter(item)}
                            className={radioFilter == item
                                ? 'border border-primary rounded-full opacity-100'
                                : 'rounded-full opacity-40'
                            }
                        >
                            {item}
                        </Button>
                    ))}
                </div>

            </div>

            <div className='flex items-center gap-3 mt-7'>
                <p>Sort By </p>
                <SortByDropdownMenu />
            </div>

            <OrderTransaction />

        </>
    )
}


