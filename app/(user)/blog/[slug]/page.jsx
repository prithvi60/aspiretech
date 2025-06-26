import { BlogSpecificPage } from '@/components/layout/blogPage/BlogSpecificPage';
import { client } from '@/sanity/lib/client';
import { BLOG_QUERY } from '@/sanity/Queries';

const Page = async ({ params }) => {
    const { slug } = await params

    const post = await client.fetch(
        BLOG_QUERY,
        { slug },
        {
            cache: "no-cache",
            next: {
                tags: ["post"],
            },
        }
    );

    return (
        <div>
            <BlogSpecificPage post={post} />
        </div>
    )
}

export default Page
