import DynamicHero from '@/components/Reusable/DynamicHero'
import { GBHeroImg } from '@/components/Reusable/icons'
import React from 'react'

const page = () => {
    return (
        <div>
            <DynamicHero
                mediaType="image"
                mediaSrc={GBHeroImg}
                title="Global Business"
            />
        </div>
    )
}

export default page
