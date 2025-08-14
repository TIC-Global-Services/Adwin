
import Built from '@/components/About/Manufacturing/Built'
import Manufacture from '@/components/About/Manufacturing/Manufacture'
import ScrollingText from '@/components/About/Manufacturing/ScrollingText'
import DynamicHero from '@/components/Reusable/DynamicHero'
import { ManufacturingHero } from '@/components/Reusable/icons'
import React from 'react'

const page = () => {
  return (
 <div>
    <DynamicHero
                mediaType="image"
                mediaSrc={ManufacturingHero}
                title="Manufacturing"
                addLineBreak={false}
                subtitle='Excellence'
            />
            <Built />
            <ScrollingText />
            <Manufacture />
 </div>
 
  )
}

export default page