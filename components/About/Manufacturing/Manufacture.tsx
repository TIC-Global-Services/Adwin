import React from 'react'
import Image from 'next/image'
import { Logo1, Logo2, Logo3, Logo4 } from '@/components/Reusable/icons'

const contents = [
  {
    icon: Logo1, 
    desc: 'Lead Acid Batteries for inverters, solar, EVs, tractors, and more'
  },
  {
    icon: Logo2, 
    desc: 'Lithium Batteries for EVs, solar energy storage, and home backup'
  },
  {
    icon: Logo3, 
    desc: 'Solar PCUs, hybrid inverters, solar panels'
  },
  {
    icon: Logo4, 
    desc: 'LED Lighting under our Ozoro brand'
  },
]

const Manufacture = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-12 p-6 max-w-8xl mx-auto py-20'>
      {/* Left side - GIF (40% width) */}
      <div className='w-2/5 flex justify-center items-center bg-[#F6FDF9] p-8 h-[548px] '>
        <Image 
          src="/battery.gif" 
          alt="Battery manufacturing animation" 
          width={1500} 
          height={1500}
          className='max-w-full h-auto scale-150'
        />
      </div>

      {/* Right side - Content (60% width) */}
      <div className='w-3/5 flex flex-col gap-8'>
        <h1 className='text-4xl  text-gray-800 mb-4'>
          What we <span className=' text-[#005F20]'>Manufacture</span>
        </h1>
        
        {/* 2x2 Grid */}
        <div className='grid grid-cols-2 gap-6'>
          {contents.map((content, index) => (
            <div key={index} className='flex flex-col items-start gap-4 p-6 transition-shadow duration-300 '>
              <div className='w-12 h-12  rounded-lg flex items-center justify-center'>
                <Image 
                  src={content.icon} 
                  alt="product icon" 
                  width={45} 
                  height={45}
                  className=''
                />
              </div>
              <p className='text-[18px] text-[#151414] '>{content.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Manufacture