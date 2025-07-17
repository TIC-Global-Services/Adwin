import ExploreGB from '@/components/GlobalBusiness/ExploreGB'
import GlobalNetwork from '@/components/GlobalBusiness/GlobalNetwork'
import PartnerWithUs from '@/components/GlobalBusiness/PartnerWithUs'
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
            <ExploreGB />
            <GlobalNetwork />
            <PartnerWithUs />
        </div>
    )
}

export default page
