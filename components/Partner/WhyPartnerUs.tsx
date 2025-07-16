import Image from 'next/image'
import React from 'react'
import IndiaMap from '@/assets/Partner/IndiaMap.svg'

const WhyPartnerUs = () => {
    return (
        <section className="bg-[#EFF3F1] px-4 py-20 md:px-20 md:py-32">
            <div className="mx-auto grid   items-center gap-10 md:grid-cols-2 md:gap-32">
                {/* Left column: text */}
                <div className="order-2 md:order-1 flex flex-col justify-between h-full">
                    <div>

                        <p className="text-sm font-semibold uppercase tracking-wider text-[#005F20]">
                            Why partner with Adwin?
                        </p>
                        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                            A Trusted Network
                        </h1>
                    </div>

                    <div>
                        <p className="mt-6 text-lg leading-relaxed text-slate-700">
                            With a growing family of{' '}
                            <span className="font-bold text-[#005F20]">
                                3,500+ active dealers and distributors across India
                            </span>{' '}
                            and abroad, Adwin offers unmatched access, support, and service to
                            partners of all sizes. Every distributor receives a Business Partner
                            Certificate, and our dealers are officially certified too.
                        </p>
                    </div>



                </div>

                {/* Right column: image */}
                <div className="order-1 md:order-2 flex items-center justify-center">
                    <Image
                        src={IndiaMap}
                        alt="India dealer network map"
                        className="w-full h-auto max-w-sm"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default WhyPartnerUs