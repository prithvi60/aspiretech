import Blogs from '@/components/layout/blog page/Blogs';
import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/Queries';
import React from 'react'

const Page = async () => {
    const posts = await client.fetch(
        POSTS_QUERY,
        {},
        {
            cache: "no-cache",
            next: {
                tags: ["post"],
            },
        }
    );

    return (
        <div className="padding min-h-screen w-full flex justify-between items-center font-extrabold leading-6 tracking-wide text-[clamp(1.8rem,3vw,3rem)] text-center animate-pulse text-gradient">
            <h4 className='w-full'>Arriving shortly !</h4>
        </div>
        // <div>
        //     <Blogs posts={posts} />
        // </div>
    )
}

export default Page
