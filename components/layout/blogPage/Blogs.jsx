import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = ({ posts }) => {
    const publishedAt = posts.map((val) => val.publishedAt);
    const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
    return (
        <section className="padding w-full space-y-24 md:space-y-36">
            <div className="w-full space-y-10 md:space-y-16">
                <h1 className="text-3xl sm:text-4xl lg:text-[60px] font-semibold text-center">
                    Read more Interesting Blog
                </h1>
                <div className="grid grid-cols-1 w-full md:grid-cols-2 place-content-center place-items-center xl:grid-cols-3 gap-8">
                    {posts.map((item, idx) => (
                        <Link
                            title="blog post page"
                            href={`/blog/${item.slug.current}`}
                            key={idx}
                            className="rounded-lg shadow-lg overflow-hidden hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer w-full max-w-xs"
                        >
                            <Image
                                width={800}
                                height={650}
                                title={item.imageAlt}
                                src={item.imageUrl}
                                alt={item.imageAlt}
                                priority={false}
                                loading="lazy"
                                quality={100}
                                className="w-full h-auto"
                                sizes="(min-width: 1260px) 512px, (min-width: 780px) 42.61vw, (min-width: 600px) 512px, calc(92.86vw - 27px)"
                            />
                            <div className="p-3.5 space-y-4">
                                <h1 className="text-xl md:text-2xl font-bold tracking-wide">
                                    {item.title}
                                </h1>
                                <p className="text-base md:text-lg font-normal line-clamp-3">
                                    {item.blogShortRead}
                                </p>
                                <p className="text-sm font-normal tracking-tighter capitalize">
                                    by AspireTech person
                                </p>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-sm font-medium tracking-wider">
                                        {formattedDate}
                                    </h2>
                                    <p className="text-sm tracking-wide underline underline-offset-2">
                                        {"Read more ->"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
