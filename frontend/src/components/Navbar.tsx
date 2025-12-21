import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useMenuStore from '@/store/menu.store'

import useCartStore from '@/store/cart.store'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
  IoHome, IoCart, IoDocumentText, IoPerson,
  IoHomeOutline, IoCartOutline, IoDocumentTextOutline, IoPersonOutline,
  IoSearch,
} from 'react-icons/io5'

export default function Navbar() {
  const { menuClicked, setMenuClicked } = useMenuStore()
  const [totalQty, setTotalQty] = useState('')

  const cartItems = useCartStore(state => state.items ?? [])
  const result = cartItems.reduce((sum, item) => sum + item.qty, 0)

  useEffect(() => {
    const cart = localStorage.getItem('cart-storage');

    if (cart) {
      
      setTotalQty('+' + String(result))
      if (result.toString() == '0') { setTotalQty('') }
    
    } else {
      setTotalQty('')
    }
  }, [cartItems])

  return (
    <>

      <header className='fixed w-full top-0 left-0 z-100 bg-gray-200'>
        <div className='h-[60px] mx-4 md:mx-8 lg:mx-30'>
          <div className='flex items-center justify-between h-full'>

            <div className='hidden md:flex'>
              <Link to={'/'}> <Button variant='outline' onClick={() => setMenuClicked('home')}>
                {menuClicked == 'home'
                  ? <IoHome />
                  : <IoHomeOutline />
                }
                Home </Button> </Link>
            </div>

            <div className='w-full md:w-[350px] lg:w-[550px]'>
              <IoSearch className='absolute top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 ml-3' />
              <Input type='text' placeholder='Search...' className='pl-8 bg-white w-full rounded-full' />
            </div>

            <div className='hidden md:flex gap-1'>
              <Link to={'/cart'}> <Button variant='outline' onClick={() => setMenuClicked('cart')}>
                {menuClicked == 'cart'
                  ? <IoCart />
                  : <IoCartOutline />
                }
                {totalQty == '0'
                  ? ''
                  : totalQty
                }
              </Button> </Link>
              <Link to={'/transaction'}> <Button variant='outline' onClick={() => setMenuClicked('transaction')}>
                {menuClicked == 'transaction'
                  ? <IoDocumentText />
                  : <IoDocumentTextOutline />
                }
              </Button> </Link>
              <Link to={'/profile'}> <Button variant='outline' onClick={() => setMenuClicked('profile')}>
                {menuClicked == 'profile'
                  ? <IoPerson />
                  : <IoPersonOutline />
                }</Button> </Link>
            </div>

          </div>
        </div>
      </header>


      <div className='mb-[60px]'></div>

    </>
  )
}