import React, { ReactNode } from 'react'

interface PageWrapperProps {
    children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className='max-w-[1920px] mx-4 md:mx-8 lg:mx-30'>
      {children}
    </div>
  )
}
