import AdwinAdvantage from '@/components/Partner/AdwinAdvantage'
import Benefits from '@/components/Partner/Benefits'
import BuildForScale from '@/components/Partner/BuildForScale'
import PartnerApply from '@/components/Partner/PartnerApply'
import WhyPartnerUs from '@/components/Partner/WhyPartnerUs'
import DynamicHero from '@/components/Reusable/DynamicHero'
import { PartnerHeroImg } from '@/components/Reusable/icons'
import React from 'react'

const page = () => {
    return (
        <div>
            <DynamicHero
                mediaType="image"
                mediaSrc={PartnerHeroImg}
                title="Partner with us"
            />
            <WhyPartnerUs />
            <BuildForScale />
            <AdwinAdvantage />
            <Benefits />
            <PartnerApply />
        </div>
    )
}

export default page
