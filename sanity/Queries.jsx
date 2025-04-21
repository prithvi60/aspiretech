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