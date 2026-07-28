import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPosts } from '@/sanity/queries'
import { urlFor } from '@/sanity/image'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function BlogIndexPage() {
  const posts = await getPosts()

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white flex flex-col justify-between">
      <div>
        <Header />
        
        <div className="pt-32 pb-20 container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="mb-16 text-center">
            <h1 className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-gray-500 mb-3">
              Journal & Stories
            </h1>
            <p className="text-3xl md:text-5xl font-light tracking-tight text-black">
              Blog
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20 text-gray-400 font-light tracking-wider uppercase text-sm">
              No blog posts published yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {posts.map((post) => {
                const imageUrl = post.heroImage ? urlFor(post.heroImage).width(800).url() : null
                const formattedDate = post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })
                  : null

                return (
                  <article key={post._id} className="group cursor-pointer flex flex-col">
                    <Link href={`/blog/${post.slug.current}`} className="flex flex-col flex-1">
                      <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden mb-6">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={post.heroImage?.alt || post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-300 uppercase tracking-widest text-xs">
                            No Image
                          </div>
                        )}
                      </div>

                      {formattedDate && (
                        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">
                          {formattedDate}
                        </p>
                      )}

                      <h2 className="text-xl md:text-2xl font-light tracking-tight text-black group-hover:opacity-75 transition-opacity">
                        {post.title}
                      </h2>
                    </Link>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
