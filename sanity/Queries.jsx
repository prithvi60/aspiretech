import { groq } from "next-sanity";

// post queries
export const NA_QUERIES = groq`
*[_type == "news"]|order(publishedAt desc) {
  title,
  publishedAt,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  url
}`;

export const NA_QUERY = groq`
*[_type == "news"]|order(publishedAt desc) {
  field,
  type,
  "imageUrl": image.asset->url,
  "altText": image.alt,
  "pdfUrl": pdfFile.asset->url,
  publishedAt
}`;

export const BLOGS_QUERY = groq`
*[_type == "blog"]|order(publishedAt desc)[0...12] {
  title,
  slug,
  summary,
  publishedAt,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
}`;

export const BLOG_QUERY = groq`
*[_type == "blog"&& slug.current == $slug][0] {
  title,
  summary,
  publishedAt,
  blockContent,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "plainBody": blockContent[].children[].text
}`;