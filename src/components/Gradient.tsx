import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient'
import { CardHoverEffectDemo } from "@/components/Card"

export default function Gradient() {
  return (
    <>
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-semibold px-4 pointer-events-none text-3xl md:text-4xl lg:text-7xl">
        <p>Experiences</p>
      </div>
      
    </BackgroundGradientAnimation>
    <CardHoverEffectDemo/>
    </>
  )
}
