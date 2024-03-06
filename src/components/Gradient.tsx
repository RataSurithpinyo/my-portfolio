import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient'
import { CardHoverEffectDemo } from "@/components/Card"
import { BentoGridSecondDemo } from './Grid'
export default function Gradient() {
  return (
    <>
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 mt-10">
        <p className='mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Experiences</p>
        <BentoGridSecondDemo />
      </div>
    </BackgroundGradientAnimation>
    <CardHoverEffectDemo/>
    </>
  )
}
