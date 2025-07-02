"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Banner = () => {
    const path = usePathname()
    const title = path.split("/")[2]?.replace(/-/g, " ")

    return (
        <div className={`${path.startsWith("/programs") ? "flex" : "hidden"} z-50 sticky inset-0 p-1 bg-primary  flex-col sm:flex-row justify-center items-center sm:gap-6 text-[clamp(0.6rem,1.15vw,1rem)] leading-5 md:leading-10 tracking-wide font-extrabold text-black capitalize`}>
            <h2 className='text-center'>Get in touch and get discounts for {title}</h2>
            <Link href={"/contact"} className='underline underline-offset-4'>Contact Us</Link>
        </div>
    )
}

export default Banner
