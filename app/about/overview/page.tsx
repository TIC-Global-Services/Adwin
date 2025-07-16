import Companies from '@/components/About/Companies'
import Directors from '@/components/About/Directors'
import Journey from '@/components/About/Journey'
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
</div>
  )
}

export default page