import ExitModalCard from '@/components/features/ExitModalCard';
import NewsArticlesCard from '@/components/layout/NewsArticles';
import { SectionHeading } from '@/components/UI/SectionHeading';
import { client } from '@/sanity/lib/client';
import { NA_QUERIES } from '@/sanity/Queries';
import React from 'react'

const Page = async () => {
    const newsPosts = await client.fetch(
        NA_QUERIES,
        {},
        {
            cache: "no-cache",
            next: {
                tags: ["post", "news"],
            },
        }
    );
    // console.log(newsPosts);

    return (
        <>
            <ExitModalCard />
            <section className="w-full h-full padding space-y-10 md:space-y-20">
                <h1 className="font-extrabold tracking-tight leading-none text-gradient text-[clamp(1.8rem,3.5vw,3.8rem)] py-2 md:w-3/4 mx-auto text-center text-black">
                    News and Articles
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6 md:gap-12'>
                    {newsPosts.map((item, idx) => (
                        <NewsArticlesCard key={idx} data={item} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Page
