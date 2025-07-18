
import HaveAQuery from '@/components/Contact/HaveAQuery'
import StoreLocator from '@/components/Contact/StoreLocator'
import DynamicHero from '@/components/Reusable/DynamicHero'
import { ContactHeroImg } from '@/components/Reusable/icons'
import React from 'react'

const page = () => {
    return (
        <div>
            <DynamicHero
                mediaType="image"
                mediaSrc={ContactHeroImg}
                title="Contact Us"
            />
            <HaveAQuery />
            <StoreLocator />
        </div>
    )
}

export default page
