import { EnquireCard } from '@/components/UI/Cards'
import { SectionHeading } from '@/components/UI/SectionHeading'
import React from 'react'

const GradsOfATA = ({ title, corporateData }) => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            {title && (<SectionHeading text={"Why Grads of Aspire tech academy?"} />)}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 max-w-3xl mx-auto'>
                {corporateData.map((data, idx) => (
                    <EnquireCard data={data} key={idx} />
                ))}
            </div>
        </section>
    )
}

export default GradsOfATA