import { RoleBasedTrainingCard } from '@/components/UI/Cards'
import { SectionHeading } from '@/components/UI/SectionHeading'
import { roleBasedTrainingList } from '@/utils/Data'
import React from 'react'

const RolesBasedTraining = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <SectionHeading text={"Role-Based Training"} />
            <div className='block space-y-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-y-5 xl:gap-5 max-w-5xl mx-auto">
                    {roleBasedTrainingList.map((data, idx) => (
                        <RoleBasedTrainingCard data={data} key={idx} />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-y-5 xl:gap-5 max-w-5xl mx-auto">
                    {roleBasedTrainingList.map((data, idx) => (
                        <RoleBasedTrainingCard data={data} key={idx} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RolesBasedTraining