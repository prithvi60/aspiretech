import Privacy from '@/components/layout/Privacy'
import React from 'react'

const Page = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <h1 className="font-extrabold tracking-tight leading-none text-gradient text-[clamp(1.8rem,3.5vw,3.8rem)] py-2 mx-auto text-center">
                Privacy
            </h1>
            <Privacy />
        </section>
    )
}

export default Page
