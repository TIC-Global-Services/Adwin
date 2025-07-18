import Companies from '@/components/About/overview/Companies'
import Directors from '@/components/About/overview/Directors'
import Journey from '@/components/About/overview/Journey'
import Sustainability from '@/components/About/overview/Sustainability'
import DynamicHero from '@/components/Reusable/DynamicHero'
import { AboutOverViewHero } from '@/components/Reusable/icons'
import React from 'react'

const page = () => {
  return (
<div>
<DynamicHero
                mediaType="image"
                mediaSrc={AboutOverViewHero}
                title="Company"
                addLineBreak={false}
                subtitle='Overview'
            />
            <Journey />
            <Companies />
            <Directors />
            <Sustainability />
</div>
  )
}

export default page