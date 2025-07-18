import Companies from '@/components/About/Overview/Companies'
import Directors from '@/components/About/Overview/Directors'
import Journey from '@/components/About/Overview/Journey'
import Sustainability from '@/components/About/Overview/Sustainability'
import About from '@/components/Home/About'
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