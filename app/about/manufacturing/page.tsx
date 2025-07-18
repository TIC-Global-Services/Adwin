import Built from '@/components/About/manufacturing/Built'
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
 </div>
 
  )
}

export default page