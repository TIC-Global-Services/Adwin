import FAQContent from '@/components/FAQ/FAQContent'
import DynamicHero from '@/components/Reusable/DynamicHero'
import { LoadCalculatorHero } from '@/components/Reusable/icons'
import React from 'react'

const page = () => {
  return (
    <div>
        <DynamicHero
        mediaType="image"
        mediaSrc={LoadCalculatorHero}
        title="Energy Consumption"
        addLineBreak={true}
        subtitle='Calculator'
      />
      <div>
        <h1 className='text-[42px] leading-[49px] text-center mt-[120px]'>
        Frequently <span className='text-[#005F20]'>Asked Question</span> </h1>
        <FAQContent />

      </div>
    </div>
   
  )
}

export default page