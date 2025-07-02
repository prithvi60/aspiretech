import { ContactForm } from "@/components/features/ContactForm";
import { socialLinks } from "@/utils/Data";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export const BlogSpecificPage = ({ post }) => {
  // if (!post) return <div className="h-screen flex justify-center items-center">Loading...</div>;
  const readableTime = post.plainBody.filter(Boolean).join(" ");

  const calculateReadTime = (text) => {
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  const blogContent = readableTime || "";
  const readingTime = calculateReadTime(blogContent);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <section className="padding w-full flex flex-col-reverse md:flex-row justify-between md:gap-6 xl:gap-14 2xl:gap-20 relative">
        <div className="w-full md:w-2/5 xl:w-1/4">
          <div className="w-full max-w-md mx-auto md:sticky md:top-32 xl:top-40">
            <ContactForm title={"contact"} hero blogContent />
          </div>
        </div>
        <div className="w-full space-y-14 relative md:w-3/5 xl:w-3/4">
          <Image
            width={800}
            height={650}
            title={post.imageAlt}
            src={post.imageUrl}
            alt={post.imageAlt}
            priority={false}
            loading="lazy"
            quality={100}
            className="w-full h-auto max-h-96 rounded-lg"
            sizes="(min-width: 1260px) 512px, (min-width: 780px) 42.61vw, (min-width: 600px) 512px, calc(92.86vw - 27px)"
          />
          <div className="space-y-5 relative max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              {post.title}
            </h2>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 lg:justify-between lg:items-center">
              <div className="space-y-2">
                <p className="text-base tracking-wide font-medium">
                  By AspireTech Team
                </p>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 md:items-center">
                  <h3 className="flex items-center gap-2 text-base md:text-lg capitalize sm:border-r-2 border-black sm:pr-6">
                    {readingTime} min{readingTime > 1 ? "s" : ""} Read
                  </h3>
                  <h4 className="text-base font-medium tracking-wider md:text-lg">
                    {formattedDate}
                  </h4>
                </div>
              </div>
              <ul className="flex items-center gap-5">
                {socialLinks.map((list, idx) => (
                  <li key={idx} className="flex-shrink-0">
                    <Link
                      target="_blank"
                      title="footer social icons"
                      href={list.href}
                    >
                      {list.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-7xl prose prose-blue mx-auto prose-h1:text-3.5xl prose-h1:font-bold prose-h2:text-2xl prose-h2:font-bold prose-h3:text-2xl prose-h3:font-bold prose-h4:text-2xl prose-h4:font-bold prose-p:leading-relaxed prose-p:text-lg lg:prose-p:text-xl prose-p:mt-4 prose-p:mb-4 prose-blockquote:leading-relaxed prose-blockquote:text-lg lg:prose-blockquote:text-xl prose-list:list-disc prose-list-decimal">
            <PortableText value={post.blockContent} components={customComponents} />
          </div>
        </div>
      </section>
    </>
  );
};

const customComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={value?.imageUrl}
        alt={value?.alt || "Image"}
        className="w-full h-full max-w-md max-h-full mx-auto mt-20 mb-20 md:mt-20 md:mb-10"
      />
    ),
  },
};
