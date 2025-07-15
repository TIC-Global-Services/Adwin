import FAQContent from '@/components/FAQ/FAQContent'
import DynamicHero from '@/components/Reusable/DynamicHero'
import { FAQHeroImg } from '@/components/Reusable/icons'
import React from 'react'


const page = () => {
  return (
    <div>
       <DynamicHero
                mediaType="image"
                mediaSrc={FAQHeroImg}
                title="FAQ"
            />
            <FAQContent />
    </div>
  )
}

export default page
