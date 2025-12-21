import React, {useState, useEffect} from 'react'
import useCartStore from '@/store/cart.store'

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

import { LuCirclePlus, LuCircleMinus, LuTrash2, LuShoppingCart } from 'react-icons/lu'

const OrderSubtotal = () => {
  const { addToCartMany } = useCartStore()

  const [qty, setQty] = useState<number>(1)

  const plusQty = () => {
    setQty(qty + 1)
  }

  const minusQty = () => {
    setQty(qty - 1)
  }
  useEffect(() => {
    if (qty < 1) { setQty(1) }
  }, [qty])

  return (
    <>

      <Card className="relative md:fixed w-auto mt-4 gap-5 z-50">
        <CardHeader>
          <CardTitle className='text-2xl'>Subtotal</CardTitle>
          <CardDescription className='text-3xl!'>Rp99.000</CardDescription>
        </CardHeader>
        <CardFooter className="flex-col gap-2">
          <div className="flex flex-col xl:flex-row items-center gap-3 w-full">

            <div className='flex w-full justify-end'>
              <div className="flex items-center border border-gray-200 rounded-full">
                <Button variant='ghost' onClick={minusQty} >
                  <LuCircleMinus />
                </Button>
                <div className="px-3 py-1 min-w-[10px] text-center">{qty}</div>
                <Button variant='ghost' onClick={plusQty}>
                  <LuCirclePlus />
                </Button>
              </div>
            </div>

            <Button variant='default' onClick={() => addToCartMany({id: 15, name: 'Kangaroo Steak', qty: qty })} className='flex-1 w-full xl:w-auto'> <LuShoppingCart /> Add to Cart </Button>

          </div>
          <Button variant='outline' className='w-full'> Continue to payment </Button>
        </CardFooter>
      </Card>

    </>
  )
}

export default OrderSubtotal
