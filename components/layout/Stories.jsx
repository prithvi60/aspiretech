import React from 'react'
import { SectionHeading } from '../UI/SectionHeading'
import { StoriesByCustomer } from '@/utils/Data'
import { StoriesCard } from '../UI/Cards'
import { AnimateButton } from '../UI/Button'

const Stories = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <SectionHeading text={"Stories of Growth & Success"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-x-0 xl:gap-y-10 max-w-7xl mx-auto">
                {StoriesByCustomer.map((item, index) => (
                    <StoriesCard key={index} data={item} />
                ))}
            </div>
            <div className='text-center'>
                <AnimateButton href={"/impact"} text={"Read more stories"} />
            </div>
        </section>
    )
}

export default Stories
