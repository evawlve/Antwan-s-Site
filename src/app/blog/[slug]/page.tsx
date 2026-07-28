import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PortableText from '@/components/PortableText'
import { getPostBySlug } from '@/sanity/queries'
import { urlFor } from '@/sanity/image'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const heroImageUrl = post.heroImage ? urlFor(post.heroImage).width(1600).url() : null
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white flex flex-col justify-between">
      <div>
        <Header />

        <article className="pt-32 pb-24 container mx-auto px-6 md:px-12 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors mb-12"
          >
            ← Back to Blog
          </Link>

          <header className="mb-12">
            {formattedDate && (
              <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-4 font-medium">
                {formattedDate}
              </p>
            )}

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-black mb-8 leading-tight">
              {post.title}
            </h1>

            {heroImageUrl && (
              <figure className="mt-8 mb-12">
                <div className="w-full flex justify-center bg-gray-50 overflow-hidden rounded-sm">
                  <img
                    src={heroImageUrl}
                    alt={post.heroImage?.alt || post.title}
                    className="w-full max-h-[85vh] object-contain"
                  />
                </div>
                {post.heroImage?.caption && (
                  <figcaption className="mt-3 text-center text-xs tracking-wider uppercase text-gray-500 font-light">
                    {post.heroImage.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </header>

          {post.body && (
            <div className="prose max-w-none">
              <PortableText value={post.body} />
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
            <Link
              href="/blog"
              className="text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}
