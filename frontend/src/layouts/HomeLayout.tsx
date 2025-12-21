import React, { ReactNode } from 'react'
import PageWrapper from '@/components/PageWrapper'
import Navbar from '@/components/Navbar'
import AdsCarousel from '@/components/AdsCarousel'
import Footer from '@/components/Footer'
import NavbarBottom from '@/components/NavbarBottom'
import DialogIsLogin from '@/components/DialogIsLogin'

interface HomeLayoutProps {
  children: ReactNode
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <AdsCarousel />

      <PageWrapper>
        <div className='absolute flex top-15'>
          <DialogIsLogin />
        </div>
        {children}
      </PageWrapper>

      <Footer />
      <NavbarBottom />
    </>
  )
}

export default HomeLayout
