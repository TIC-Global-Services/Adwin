import DynamicHero from '@/components/Reusable/DynamicHero'
import { ProductHero } from '@/components/Reusable/icons'
import React from 'react'

const page = () => {
  return (
<div>
<DynamicHero
                mediaType="image"
                mediaSrc={ProductHero}
                title="Product &"
                subtitle='Solutions'
                addLineBreak={false}
            />
</div>
  )
}

export default page