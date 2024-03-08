import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient'
import { CardHoverEffect } from "@/components/Card"
import { BentoGridSecond } from './Grid'
export default function Gradient() {
  return (
    <>
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 mt-12">
        {/* <p className='mb-6 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Experiences</p> */}
        <BentoGridSecond />
      </div>
    </BackgroundGradientAnimation>
    <CardHoverEffect/>
    </>
  )
}
