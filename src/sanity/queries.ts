import { client } from './client'

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt?: string
  heroImage?: any
  body?: any
}

export async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    heroImage
  }`
  return await client.fetch(query)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const decodedSlug = decodeURIComponent(slug)
  const query = `*[_type == "post" && (slug.current == $slug || slug.current == $decodedSlug)][0] {
    _id,
    title,
    slug,
    publishedAt,
    heroImage,
    body
  }`
  return await client.fetch(query, { slug, decodedSlug })
}
