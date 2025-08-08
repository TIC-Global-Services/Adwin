import DynamicHero from '@/components/Reusable/DynamicHero'
import { HeroServicePage } from '@/components/Reusable/icons'
import Forms from '@/components/Service/Forms'


import React from 'react'

const page = () => {
  return (
    <div>
      <DynamicHero
        mediaType="image"
        mediaSrc={HeroServicePage}
        title="Service"
        addLineBreak={false}
      />
      <Forms />
    
    </div>
  );
}

export default page