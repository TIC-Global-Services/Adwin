import Innovation from '@/components/About/Research/Innovation'
import DynamicHero from '@/components/Reusable/DynamicHero'
import { ReseachHero } from '@/components/Reusable/icons'
import React from 'react'

const page = () => {
  return (
<div>
<DynamicHero
                mediaType="image"
                mediaSrc={ReseachHero}
                title="Research &"
                addLineBreak={true}
                subtitle='Development'
            />
            <Innovation />
</div>
  )
}

export default page