import Blogs from '@/components/layout/blogPage/Blogs';
import { client } from '@/sanity/lib/client';
import { BLOGS_QUERY } from '@/sanity/Queries';
import React from 'react'

const Page = async () => {
    const posts = await client.fetch(
        BLOGS_QUERY,
        {},
        {
            cache: "no-cache",
            next: {
                tags: ["post"],
            },
        }
    );

    return (
        <div>
            <Blogs posts={posts} />
        </div>
    )
}

export default Page
