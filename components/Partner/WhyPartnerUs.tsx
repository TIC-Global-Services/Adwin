import Image from 'next/image'
import React from 'react'
import { BGMap } from '../Reusable/icons'

const WhyPartnerUs = () => {
    return (
        <section className="relative overflow-hidden h-[754px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 ">
                <Image
                    src={BGMap.src}
                    alt="Background Map"
                    width={1000}
                    height={1000}
                    className='w-full h-full object-cover'

                  
                   
                />
            </div>
            
            {/* Content */}
            <div className="relative z-10 mx-auto grid items-center gap-10 md:grid-cols-2 md:gap-32 h-full py-30 px-20">
                {/* Left column: text */}
                <div className="order-2 md:order-1 flex flex-col justify-between h-full">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#F6F8FB]">
                            Why partner with Adwin?
                        </p>
                        <h1 className="mt-3 text-[38px] font-semibold tracking-tight text-[#F6F8FB] sm:text-4xl md:text-5xl">
                            A Trusted Network
                        </h1>
                    </div>

                    <div>
                        <p className="mt-6 text-lg leading-relaxed text-[#F6F8FB]">
                            With a growing family of{' '}
                            <span className="font-bold text-[#F6F8FB] ">
                                3,500+ active dealers and distributors across India
                            </span>{' '}
                            and abroad, Adwin offers unmatched access, support, and service to
                            partners of all sizes. Every distributor receives a Business Partner
                            Certificate, and our dealers are officially certified too.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyPartnerUs