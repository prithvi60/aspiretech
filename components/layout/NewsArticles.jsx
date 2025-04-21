import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewsArticlesCard = ({ data }) => {
    return (
        <Link href={data.url} target='_blank'
            className="bg-linear-to-b from-[var(--text-gradient-left)]/30 to-[#fffefe9e] p-[1.5px] rounded-xl min-h-[350px] xl:min-h-[250px] shrink-0 relative z-40 hover:scale-105 transition duration-500"
        >
            <div className="relative flex h-full flex-col justify-between overflow-hidden p-8 shadow-lg bg-radial from-black to-[#222222] font-inter gap-6 rounded-xl">
                <div className="relative">
                    {/* first layer */}
                    <div className="w-full h-56 bg-zinc-400 rounded-xl relative z-30 overflow-hidden">
                        <Image
                            fill
                            src={data.imageUrl}
                            alt={data.imageAlt}
                            className="object-cover object-top"
                        />
                    </div>
                    {/* second layer */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4/5 bg-primary/30 backdrop-blur-lg rounded-xl h-64 z-20" />
                    {/* third layer */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-11/12 bg-primary/40 backdrop-blur-xl rounded-xl h-60 z-10" />
                </div>
                <div className="flex flex-col justify-between text-foreground">
                    <div className="space-y-4 ">
                        <div className="">
                            <h5 className="text-[clamp(1rem,3vw,1.6rem)] font-bold tracking-wide">
                                {data.title}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NewsArticlesCard
